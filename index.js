const express = require("express");
const app = express();
const fs = require("fs");
const ytdl = require("ytdl-core");
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/download", async (req, res) => {
  videoURL = req.query.videoURL;

  // ! passing encoded data of vdo
  // ? fs writing file
  ytdl(videoURL).pipe(fs.createWriteStream("video.mp4"));
});

app.get("/videoInfo", async (req, res) => {
  console.log(res);
  console.log(req.query.videoURL);
  return;
  videoURL = req.query.videoURL;
  const videoInfo = await ytdl.getInfo(videoURL);
  res.status(200).send(videoInfo);
});

app.listen(PORT, () => {
  console.log(`connected on port : ${PORT}`);
});
