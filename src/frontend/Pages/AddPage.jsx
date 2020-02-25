import React from "react";

import "../Styles/AddPage.scss";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ru } from "date-fns/locale";
import { format, isValid } from "date-fns";

import { addFilm as addReleaseFilm } from "../Redux/Actions/releaseFilms/actions";
import { addFilm as addSoonFilm } from "../Redux/Actions/soonFilms/actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    const type = this.props.match.params.type;
    if (type === "release")
      this.state = {
        film: {
          type: "inRelease",
          link: "",
          smallPoster: "",
          fullPoster: "",
          name: "",
          yearLimit: "",
          originalName: "",
          producer: "",
          releaseTime: "",
          rate: "",
          style: "",
          time: "",
          studio: "",
          mainRoles: "",
          description: "",
          shows: []
        },
        showAlert: false,
        show: {
          date: new Date(),
          time: new Date(),
          price: ""
        }
      };
    else if (type === "soon")
      this.state = {
        film: {
          type: "soon",
          link: "",
          smallPoster: "",
          fullPoster: "",
          name: "",
          originalName: "",
          producer: "",
          releaseDate: "",
          style: "",
          studio: "",
          mainRoles: "",
          description: "",
          shows: []
        },
        showAlert: false,
        show: {
          date: new Date(),
          time: new Date(),
          price: ""
        }
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleAlert = this.handleToggleAlert.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.addShow = this.addShow.bind(this);
  }

  addShow() {
    const newShow = {
      date: format(this.state.show.date, "dd.MM.yyyy"),
      time: format(this.state.show.time, "HH:mm"),
      price: this.state.show.price
    };
    this.setState(prev => {
      return {
        film: {
          ...prev.film,
          shows: [...prev.film.shows, newShow]
        }
      };
    });
  }

  handlePriceChange(e) {
    const { value } = e.target;
    this.setState(prev => {
      return {
        show: {
          ...prev.show,
          price: value
        }
      };
    });
  }

  handleDateChange(date) {
    this.setState(prevState => {
      return {
        show: {
          ...prevState.show,
          date
        }
      };
    });
  }

  handleTimeChange(time) {
    this.setState(prevState => {
      return {
        show: {
          ...prevState.show,
          time
        }
      };
    });
  }

  handleToggleAlert() {
    this.setState(prevState => {
      return {
        showAlert: !prevState.showAlert
      };
    });
  }

  resetForm() {
    const type = this.props.match.params.type;
    if (type === "release")
      this.setState({
        film: {
          type: "inRelease",
          link: "",
          smallPoster: "",
          fullPoster: "",
          name: "",
          yearLimit: "",
          originalName: "",
          producer: "",
          releaseTime: "",
          rate: "",
          style: "",
          time: "",
          studio: "",
          mainRoles: "",
          description: "",
          shows: []
        }
      });
    else if (type === "soon")
      this.setState({
        film: {
          type: "soon",
          link: "",
          smallPoster: "",
          fullPoster: "",
          name: "",
          originalName: "",
          producer: "",
          releaseDate: "",
          style: "",
          studio: "",
          mainRoles: "",
          description: "",
          shows: []
        }
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const type = this.props.match.params.type;

    if (type === "release")
      this.props.dispatch(addReleaseFilm(this.state.film));
    else if (type === "soon") this.props.dispatch(addSoonFilm(this.state.film));
    this.resetForm();
    this.handleToggleAlert();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(this.state);

    this.setState(prevState => {
      return {
        film: {
          ...prevState.film,
          [name]: value
        }
      };
    });
  }

  render() {
    const type = this.props.match.params.type;

    return (
      <div className="add-page">
        <div className="background-image"></div>
        <div className="background-blur"></div>
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
            Фильм добавлен.{" "}
            <NavLink to={`/${type}`} className="link">
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
            <h1>Добавить фильм</h1>
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
              style={{ backgroundImage: `url(${this.state.film.smallPoster})` }}
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
          {this.state.film.type === "inRelease" && (
            <div className="show">
              <h4 className="mt-4 mb-2">Добавить сеанс</h4>
              <div className="shows">
                {this.state.film.shows[0] &&
                  this.state.film.shows.map((show, indexShow) => (
                    <div className="info-show" key={indexShow}>
                      <span className="number">{indexShow + 1}</span>
                      <span>
                        {typeof show.date === "string"
                          ? show.date
                          : isValid(show.date) &&
                            format(show.date, "dd.MM.yyyy")}
                      </span>
                      <span>
                        {typeof show.time === "string"
                          ? show.time
                          : isValid(show.time) && format(show.time, "HH:mm")}
                      </span>
                      <span>{show.price}грн</span>
                    </div>
                  ))}
              </div>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ru}>
                <div className="inputs">
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    inputVariant="filled"
                    format="dd.MM.yyyy"
                    label="Дата сеанса"
                    value={this.state.show.date}
                    onChange={this.handleDateChange}
                  />
                  <KeyboardTimePicker
                    inputVariant="filled"
                    clearable="true"
                    ampm={false}
                    variant="inline"
                    label="Время сеанса"
                    minutesStep={5}
                    placeholder="08:00"
                    mask="__:__"
                    value={this.state.show.time}
                    onChange={this.handleTimeChange}
                  />
                  <TextField
                    label="Цена"
                    placeholder="90"
                    name="price"
                    value={this.state.show.price}
                    variant="filled"
                    onChange={this.handlePriceChange}
                  />
                  <Fab className="add-show" onClick={this.addShow}>
                    <AddIcon />
                  </Fab>
                </div>
              </MuiPickersUtilsProvider>
            </div>
          )}
          <Button
            variant="contained"
            size="large"
            className="btn-add mt-4"
            type="submit"
          >
            Добавить
          </Button>
        </form>
      </div>
    );
  }
}

export default connect(null)(AddPage);
