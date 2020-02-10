import axios from "axios";
import soonActionTypes from "./actionTypes";
import { checkAccessToken } from "../auth/actions";

const baseURL = "http://192.168.0.101:5000/films/soon";
//const baseURL = "http://localhost:5000/films/soon";

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

export function addComment(req) {
  return async function(dispatch, getState) {
    await dispatch(checkAccessToken());
    await axios
      .post(`${baseURL}/add_comment/${req.id}`, req.comment, {
        headers: {
          authorization: getState().auth.token
        }
      })
      .then(res => {
        const updatedFilm = res.data;

        dispatch({ type: "FILM_INFO_UPDATE", film: updatedFilm });
      });
  };
}

export function editComment(req) {
  return async function(dispatch, getState) {
    await dispatch(checkAccessToken());
    await axios
      .put(`${baseURL}/update_comment/${req.filmId}`, req.comment, {
        headers: {
          authorization: getState().auth.token
        }
      })
      .then(res => {
        const updatedFilm = res.data;
        dispatch({ type: "FILM_INFO_UPDATE", film: updatedFilm });
      });
  };
}

export function addFilm(film) {
  return async function(dispatch, getState) {
    try {
      await dispatch(checkAccessToken());
      await axios
        .post(`${baseURL}/add`, film, {
          headers: {
            authorization: getState().auth.token
          }
        })
        .then(res => {
          const addedFilm = res.data;
          dispatch({ type: soonActionTypes.addFilm, film: addedFilm });
        });
    } catch (e) {
      console.log(e);
    }
  };
}

export function updateFilm(film) {
  return async function(dispatch, getState) {
    try {
      await dispatch(checkAccessToken());
      await axios
        .put(`${baseURL}/update`, film, {
          headers: {
            authorization: getState().auth.token
          }
        })
        .then(res => {
          const updatedFilm = res.data;
          dispatch({ type: soonActionTypes.updateFilm, film: updatedFilm });
        });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteFilm(id) {
  return async function(dispatch, getState) {
    try {
      await dispatch(checkAccessToken());
      await axios
        .delete(`${baseURL}/delete/${id}`, {
          headers: {
            authorization: getState().auth.token
          }
        })
        .then(res => {
          const deletedFilmId = res.data;
          dispatch({ type: soonActionTypes.removeFilm, id: deletedFilmId });
        });
    } catch (e) {
      console.log(e);
    }
  };
}

export function deleteComment(params) {
  return async function(dispatch, getState) {
    const { filmId, commentId } = params;
    try {
      await dispatch(checkAccessToken());
      await axios
        .delete(`${baseURL}/delete_comment/${filmId}/${commentId}`, {
          headers: {
            authorization: getState().auth.token
          }
        })
        .then(res => {
          const updatedFilm = res.data;
          dispatch({ type: "FILM_INFO_UPDATE", film: updatedFilm });
        });
    } catch (e) {
      console.error(e.response.status);
      console.error(e);
    }
  };
}

export function rateFilm(params) {
  return async function(dispatch, getState) {
    const { type, filmId } = params;
    try {
      await dispatch(checkAccessToken());
      await axios
        .put(
          `${baseURL}/rate/${filmId}`,
          {
            type,
            user: getState().auth.userName
          },
          {
            headers: {
              authorization: getState().auth.token
            }
          }
        )
        .then(res => {
          const updatedFilm = res.data;
          dispatch({ type: "FILM_INFO_UPDATE", film: updatedFilm });
        });
    } catch (e) {
      console.error(e);
    }
  };
}
