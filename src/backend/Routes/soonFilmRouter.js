const express = require("express");
const soonFilmController = require("../Controllers/soonFilmController.js");
const soonFilmRouter = express.Router();

soonFilmRouter.get("/", soonFilmController.getSoonFilms);
soonFilmRouter.get("/get/:id", soonFilmController.getSoonFilm);
soonFilmRouter.post("/add", soonFilmController.addSoonFilm);
soonFilmRouter.put("/update", soonFilmController.updateSoonFilm);
soonFilmRouter.delete("/delete/:id", soonFilmController.deleteSoonFilm);

module.exports = soonFilmRouter;
