const mongoose = require("mongoose");
const Schema = mongoose.Schema;
releaseFilmSchema = new Schema({
  type: String,
  link: String,
  smallPoster: String,
  fullPoster: String,
  name: String,
  yearLimit: String,
  originalName: String,
  producer: String,
  releaseTime: String,
  rate: String,
  style: String,
  time: String,
  studio: String,
  mainRoles: String,
  description: String
});

const ReleaseFilm = mongoose.model("ReleaseFilm", releaseFilmSchema);

exports.getReleaseFilms = function(req, res) {
  ReleaseFilm.find({}, (err, films) => {
    if (err) return console.error(err);
    console.log("Fetching films");

    res.send(films);
  });
};
exports.getReleaseFilm = function(req, res) {
  const id = req.params.id;
  ReleaseFilm.findById(id, (err, film) => {
    if (err) return console.log(err);

    console.log("GETTING FILM");
    res.send(film);
  });
};
exports.addReleaseFilm = function(req, res) {};
exports.updateReleaseFilm = function(req, res) {};
exports.deleteReleaseFilm = function(req, res) {
  const id = req.params.id;
  ReleaseFilm.findByIdAndDelete(id, (err, doc) => {
    if (err) return console.log(err);

    res.send(doc._id);
  });
};
