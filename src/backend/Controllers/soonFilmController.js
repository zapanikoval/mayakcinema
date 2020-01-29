const mongoose = require("mongoose");
const Schema = mongoose.Schema;
soonFilmSchema = new Schema({
  type: String,
  link: String,
  smallPoster: String,
  fullPoster: String,
  name: String,
  originalName: String,
  producer: String,
  releaseDate: String,
  style: String,
  studio: String,
  mainRoles: String,
  description: String
});

const SoonFilm = mongoose.model("SoonFilm", soonFilmSchema);

exports.getSoonFilms = function(req, res) {
  SoonFilm.find({}, (err, films) => {
    if (err) return console.error(err);

    res.send(films);
  });
};
exports.getSoonFilm = function(req, res) {
  const id = req.params.id;
  SoonFilm.findById(id, (err, film) => {
    if (err) return console.error(err);

    res.send(film);
  });
};
exports.addSoonFilm = function(req, res) {};
exports.updateSoonFilm = function(req, res) {};
exports.deleteSoonFilm = function(req, res) {
  const id = req.params.id;
  SoonFilm.findByIdAndDelete(id, (err, doc) => {
    if (err) return console.log(err);

    res.send(doc._id);
  });
};
