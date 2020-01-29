import axios from "axios";
import soonActionTypes from "./actionTypes";

const baseURL = "http://localhost:3003/films/soon";

export function fetchFilms() {
  return async function(dispatch) {
    await axios.get(`${baseURL}/`).then(res => {
      const films = res.data;
      dispatch({ type: soonActionTypes.fetchFilms, films });
    });
  };
}

export function getFilm(id) {
  return async function(dispatch) {
    await axios.get(`${baseURL}/get/${id}`).then(res => {
      const film = res.data;
      dispatch({ type: soonActionTypes.getFilm, film });
    });
  };
}

export function addFilm(film) {
  return async function(dispatch) {
    await axios.post(`${baseURL}/add`, JSON.stringify(film)).then(res => {
      const addedFilm = res.data;
      dispatch({ type: soonActionTypes.addFilm, film: addedFilm });
    });
  };
}

export function updateFilm(film) {
  return async function(dispatch) {
    await axios.put(`${baseURL}/update`, JSON.stringify(film)).then(res => {
      const updateFilm = res.data;
      dispatch({ type: soonActionTypes.updateFilm, film: updateFilm });
    });
  };
}

export function deleteFilm(id) {
  return async function(dispatch) {
    await axios.delete(`${baseURL}/delete/${id}`).then(res => {
      const deletedFilmId = res.data;
      dispatch({ type: soonActionTypes.removeFilm, id: deletedFilmId });
    });
  };
}
