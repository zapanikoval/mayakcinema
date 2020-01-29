const express = require("express");
const releaseFilmController = require("../Controllers/releaseFilmController.js");
const releaseFilmRouter = express.Router();

releaseFilmRouter.get("/", releaseFilmController.getReleaseFilms);
releaseFilmRouter.get("/get/:id", releaseFilmController.getReleaseFilm);
releaseFilmRouter.post("/add", releaseFilmController.addReleaseFilm);
releaseFilmRouter.put("/update", releaseFilmController.updateReleaseFilm);
releaseFilmRouter.delete(
  "/delete/:id",
  releaseFilmController.deleteReleaseFilm
);

module.exports = releaseFilmRouter;
