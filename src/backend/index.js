const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const soonFilmRouter = require("./Routes/soonFilmRouter.js");
const releaseFilmRouter = require("./Routes/releaseFilmRouter.js");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/films/soon", soonFilmRouter);
app.use("/films/release", releaseFilmRouter);

mongoose.connect(
  "mongodb://localhost:27017/mayakcinema",
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) return console.log(err);

    app.listen(3003, () => {
      console.log("Сервер запущен. Ожидает подключения");
    });
  }
);
