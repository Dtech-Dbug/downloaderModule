const express = require("express");
// const fs = require("fs");
// const ytdl = require("ytdl-core");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

//routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`RUNNING ON ${PORT}`);
});
