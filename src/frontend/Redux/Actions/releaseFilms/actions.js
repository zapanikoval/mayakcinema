import axios from "axios";
import releaseActionTypes from "./actionTypes";

const baseURL = "http://localhost:3003/films/release";

export function fetchFilms() {
  return async function(dispatch) {
    await axios.get(`${baseURL}/`).then(res => {
      const films = res.data;
      dispatch({ type: releaseActionTypes.fetchFilms, films });
    });
  };
}

export function getFilm(id) {
  return async function(dispatch) {
    await axios.get(`${baseURL}/get/${id}`).then(res => {
      const film = res.data;
      dispatch({ type: releaseActionTypes.getFilm, film });
    });
  };
}

export function addFilm(film) {
  return async function(dispatch) {
    await axios.post(`${baseURL}/add`, JSON.stringify(film)).then(res => {
      const addedFilm = res.data;
      dispatch({ type: releaseActionTypes.addFilm, film: addedFilm });
    });
  };
}

export function updateFilm(film) {
  return async function(dispatch) {
    await axios.put(`${baseURL}/update`, JSON.stringify(film)).then(res => {
      const updatedFilm = res.data;
      dispatch({ type: releaseActionTypes.updateFilm, film: updatedFilm });
    });
  };
}

export function deleteFilm(id) {
  return async function(dispatch) {
    await axios.delete(`${baseURL}/delete/${id}`).then(res => {
      const deletedFilmId = res.data;      
      dispatch({ type: releaseActionTypes.removeFilm, id: deletedFilmId });
    });
  };
}
