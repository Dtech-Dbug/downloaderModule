const express = require("express");
const app = express();
const fs = require("fs");
const ytdl = require("ytdl-core");
const cors = require("cors");

app.use(cors());
// TypeScript: import ytdl from 'ytdl-core'; with --esModuleInterop
// TypeScript: import * as ytdl from 'ytdl-core'; with --allowSyntheticDefaultImports
// TypeScript: import ytdl = require('ytdl-core'); with neither of the above

// ! passing encoded data of vdo
// ? fs writing file
ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ").pipe(
  fs.createWriteStream("video.mp4")
);

app.get("/videoInfo", async (req, res) => {
  console.log(res);
  console.log(req.query.videoURL);
  videoURL = req.query.videoURL;
  const videoInfo = await ytdl.getInfo(videoURL);
  res.status(200).send(videoInfo);
});

app.listen("8000", () => {
  console.log("COnnected");
});
