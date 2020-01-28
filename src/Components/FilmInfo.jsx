import React from "react";
import Fab from "@material-ui/core/Fab";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

import films from "./films";

import "../Styles/FilmInfo.scss";

class FilmInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.goBack();
  }

  render() {
    const film = films.find(film => film.id === this.props.match.params.filmId);
    return (
      <div className="body-info">
        <div className="background-image"></div>
        <div className="background-blur"></div>
        <div className="container-info">
          <Fab size="small" className="btn-back" onClick={this.handleClick}>
            <KeyboardBackspaceIcon fontSize="small" />
          </Fab>

          <img className="film-poster" src={film.fullPoster} alt={film.name} />
          <h1>{film.name}</h1>
          <div className="film-info">
            <div className="info">
              {film.yearLimit && (
                <p>
                  <span>Возраст:</span> {film.yearLimit}
                </p>
              )}

              <p>
                <span>Оригинальное название:</span> {film.originalName}
              </p>
              <p>
                <span>Режисер:</span> {film.producer}
              </p>
              {film.type === "soon" ? (
                <p>
                  <span>Релиз: </span>
                  {film.releaseDate}
                </p>
              ) : (
                <p>
                  <span>Период проката:</span> {film.releaseTime}
                </p>
              )}

              {film.rate && (
                <p>
                  <span>Рейтинг Imdb:</span> {film.rate}
                </p>
              )}
              <p>
                <span>Жанр:</span> {film.style}
              </p>
              {film.type !== "soon" && (
                <p>
                  <span>Длительность:</span> {film.time}
                </p>
              )}

              <p>
                <span>Студия:</span> {film.studio}
              </p>
              <p>
                <span>В главных ролях:</span> {film.mainRoles}
              </p>
            </div>
            <div className="description">{film.description}</div>
          </div>
          <h4>Трейлер: </h4>
          <iframe
            title={film.link}
            className="youtube-player"
            src={`https://www.youtube.com/embed/${film.link}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default FilmInfo;
