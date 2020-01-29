import React from "react";
import "../Styles/AdminPage.scss";
import SettingsCard from "./SettingsCard";
import { connect } from "react-redux";
import { deleteFilm as deleteReleaseFilm } from "../Redux/Actions/releaseFilms/actions";
import { deleteFilm as deleteSoonFilm } from "../Redux/Actions/soonFilms/actions";

class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.removeFilm = this.removeFilm.bind(this);
  }

  removeFilm(film) {
    if (film.type === "release") {
      this.props.dispatch(deleteReleaseFilm(film.id));
    } else if (film.type === "soon") {
      this.props.dispatch(deleteSoonFilm(film.id));
    }
  }

  render() {
    const { releaseFilms, soonFilms } = this.props;

    if (releaseFilms !== undefined && soonFilms !== undefined)
      return (
        <div className="admin-info">
          <div className="background-image"></div>
          <div className="background-blur"></div>
          <div className="container-info">
            <div className="film-column">
              <h1>Сейчас в прокате</h1>
              {releaseFilms.map(film => (
                <SettingsCard
                  img={film.smallPoster}
                  title={film.name}
                  key={film._id}
                  id={film._id}
                  type="release"
                  removeFilm={this.removeFilm}
                />
              ))}
            </div>
            <div className="film-column">
              <h1>Скоро в прокате</h1>
              {soonFilms.map(film => (
                <SettingsCard
                  img={film.smallPoster}
                  title={film.name}
                  key={film._id}
                  id={film._id}
                  type="soon"
                  removeFilm={this.removeFilm}
                />
              ))}
            </div>
          </div>
        </div>
      );
    else return <h1>Загрузка...</h1>;
  }
}

function mapStateToProps(state) {

  return {
    releaseFilms: state.releaseFilmState,
    soonFilms: state.soonFilmState
  };
}

export default connect(mapStateToProps)(AdminPage);
