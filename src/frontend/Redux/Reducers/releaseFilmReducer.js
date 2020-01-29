import releaseActionTypes from "../Actions/releaseFilms/actionTypes";

export default function releaseFilmReducer(state = [], action) {
  switch (action.type) {
    case releaseActionTypes.fetchFilms: {
      return action.films;
    }
    case releaseActionTypes.addFilm: {
      return [...state, action.film];
    }
    case releaseActionTypes.updateFilm: {
      return state.map(film => {
        if (film.id === action.film.id) {
          return action.film;
        } else return film;
      });
    }
    case releaseActionTypes.removeFilm: {
      return state.filter(film => film._id !== action.id);
    }
    default:
      return state;
  }
}
