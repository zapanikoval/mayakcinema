import React from "react";

import "../Styles/AddPage.scss";
import "../Styles/UpdatePage.scss";
import TextField from "@material-ui/core/TextField";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { updateFilm as updateReleaseFilm } from "../Redux/Actions/releaseFilms/actions";
import { updateFilm as updateSoonFilm } from "../Redux/Actions/soonFilms/actions";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

class UpdatePage extends React.Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
    const type = this.props.match.params.type;

    const film =
      type === "release"
        ? this.props.releaseFilms.find(film => {
            if (film._id === id) return film;
          })
        : this.props.soonFilms.find(film => {
            if (film._id === id) return film;
          });

    this.state = {
      showAlert: false,
      film
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleAlert = this.handleToggleAlert.bind(this);
  }

  handleToggleAlert() {
    this.setState(prevState => {
      return {
        showAlert: !prevState.showAlert
      };
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const type = this.props.match.params.type;

    if (type === "release")
      this.props.dispatch(updateReleaseFilm(this.state.film));
    else if (type === "soon")
      this.props.dispatch(updateSoonFilm(this.state.film));
    this.handleToggleAlert();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState(prevState => {
      return {
        film: {
          ...prevState.film,
          [name]: value
        }
      };
    });
  }

  scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  scrollDown() {
    window.scrollTo({
      top: 9999,
      behavior: "smooth"
    });
  }

  render() {
    const type = this.props.match.params.type;

    if (this.state.film)
      return (
        <div className="add-page">
          <div className="background-image"></div>
          <div className="background-blur">
            <div className="scroll-btns">
              <Fab className="fab" onClick={this.scrollUp}>
                <ExpandLessIcon fontSize="large" />
              </Fab>
              <Fab className="fab" onClick={this.scrollDown}>
                <ExpandMoreIcon fontSize="large" />
              </Fab>
            </div>
          </div>
          <form
            className="container-info"
            ref="form"
            name="form"
            onSubmit={this.handleSubmit}
          >
            <div
              className="alert alert-info mb-3"
              style={{
                paddingRight: 5,
                display: this.state.showAlert ? "block" : "none"
              }}
            >
              Фильм обновлен.{" "}
              <NavLink
                to={
                  this.props.match.params.type === "release"
                    ? `/release-film/${this.state.film._id}`
                    : `/soon-film/${this.state.film._id}`
                }
                className="link"
              >
                Посмотреть
              </NavLink>
              <IconButton
                className="close-btn"
                style={{ marginLeft: 10, outline: "none" }}
                onClick={this.handleToggleAlert}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="row-block">
              <h1>Обновить фильм</h1>
              <TextField
                required
                label="Name"
                name="name"
                value={this.state.film.name}
                variant="filled"
                onChange={this.handleChange}
              />
            </div>
            <div className="row-block mt-5">
              <div className="column">
                <h4>Маленький постер</h4>
                <TextField
                  required
                  label="Small poster"
                  placeholder="http://url"
                  type="url"
                  name="smallPoster"
                  value={this.state.film.smallPoster}
                  variant="filled"
                  onChange={this.handleChange}
                />
              </div>
              <div
                className="small-poster"
                style={{
                  backgroundImage: `url(${this.state.film.smallPoster})`
                }}
              >
                {this.state.film.smallPoster === "" && (
                  <h3>
                    <ArrowBackIcon className="arrow" />
                    Вставьте URL
                  </h3>
                )}
              </div>
            </div>
            <h4 className="mt-5">Большой постер</h4>
            <TextField
              required
              label="Full poster"
              placeholder="http://url"
              type="url"
              name="fullPoster"
              value={this.state.film.fullPoster}
              variant="filled"
              onChange={this.handleChange}
            />
            <div
              className="full-poster mt-3"
              style={{ backgroundImage: `url(${this.state.film.fullPoster})` }}
            >
              {this.state.film.fullPoster === "" && (
                <h3>
                  <ArrowUpwardIcon className="arrow" />
                  Вставьте URL
                </h3>
              )}
            </div>
            <h2 className="mt-5">Подробности фильма:</h2>
            <div className="row-block">
              <div className="column">
                <TextField
                  required
                  label="Original name"
                  name="originalName"
                  value={this.state.film.originalName}
                  variant="filled"
                  onChange={this.handleChange}
                />
                {type === "release" && (
                  <TextField
                    required
                    label="Year limit"
                    placeholder="0+"
                    name="yearLimit"
                    value={this.state.film.yearLimit}
                    variant="filled"
                    onChange={this.handleChange}
                  />
                )}

                <TextField
                  required
                  label="Producer"
                  placeholder="Quentin Tarantino"
                  name="producer"
                  value={this.state.film.producer}
                  variant="filled"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  label="Style"
                  placeholder="drama, thriller"
                  name="style"
                  value={this.state.film.style}
                  variant="filled"
                  onChange={this.handleChange}
                />
                <TextField
                  required
                  label="Main roles"
                  placeholder="Jared Leto"
                  name="mainRoles"
                  value={this.state.film.mainRoles}
                  variant="filled"
                  onChange={this.handleChange}
                />
              </div>
              <div className="column">
                <TextField
                  required
                  label="Trailer link"
                  placeholder="ex: gbcVZgO4n4E"
                  name="link"
                  value={this.state.film.link}
                  variant="filled"
                  onChange={this.handleChange}
                />
                {type === "release" ? (
                  <TextField
                    required
                    label="Release time"
                    placeholder="dd.mm.yyyy-dd.mm.yyyy"
                    name="releaseTime"
                    value={this.state.film.releaseTime}
                    variant="filled"
                    onChange={this.handleChange}
                  />
                ) : (
                  <TextField
                    required
                    label="Release date"
                    placeholder="dd.mm.yyyy"
                    name="releaseDate"
                    value={this.state.film.releaseDate}
                    variant="filled"
                    onChange={this.handleChange}
                  />
                )}
                {type === "release" && (
                  <TextField
                    required
                    label="IMDb rate"
                    placeholder="5.2"
                    name="rate"
                    value={this.state.film.rate}
                    variant="filled"
                    onChange={this.handleChange}
                  />
                )}

                {type === "release" && (
                  <TextField
                    required
                    label="Film time"
                    placeholder="h:mm or mmm"
                    name="time"
                    value={this.state.film.time}
                    variant="filled"
                    onChange={this.handleChange}
                  />
                )}

                <TextField
                  required
                  label="Studio"
                  placeholder="Universal"
                  name="studio"
                  value={this.state.film.studio}
                  variant="filled"
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="description">
              <TextField
                required
                label="Description"
                multiline
                rows="8"
                placeholder="Something about film"
                name="description"
                value={this.state.film.description}
                variant="filled"
                onChange={this.handleChange}
              />
            </div>
            <Button
              variant="contained"
              size="large"
              className="btn-add mt-4"
              type="submit"
            >
              Обновить
            </Button>
          </form>
        </div>
      );
    else return <Redirect to="/admin" />;
  }
}

function mapStateToProps(state) {
  return {
    releaseFilms: state.releaseFilmState,
    soonFilms: state.soonFilmState
  };
}
export default connect(mapStateToProps)(UpdatePage);
