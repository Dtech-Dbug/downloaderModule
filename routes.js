const express = require("express");
const fs = require("fs");
const ytdl = require("ytdl-core");
const router = express.Router();

const PORT = process.env.PORT || 8000;

router.get("/test", (req, res) => {
  console.log("he");
});

router.get("/download", async (req, res) => {
  videoURL = req.query.videoURL;

  // ! passing encoded data of vdo
  // ? fs writing file
  ytdl(videoURL).pipe(fs.createWriteStream("video.mp4"));
});

router.get("/videoInfo", async (req, res) => {
  console.log(req.query.videoURL);

  videoURL = req.query.videoURL;
  const videoInfo = await ytdl.getInfo(videoURL);
  res.status(200).send(videoInfo);
});

module.exports = router;
