import soonActionTypes from "../Actions/soonFilms/actionTypes";

export default function filmReducer(state = [], action) {
  switch (action.type) {
    case soonActionTypes.fetchFilms: {
      return action.films;
    }
    case soonActionTypes.addFilm: {
      return [...state, action.film];
    }
    case soonActionTypes.updateFilm: {
      return state.map(film => {
        if (film._id === action.film._id) {
          return action.film;
        } else return film;
      });
    }
    case soonActionTypes.removeFilm: {
      return state.filter(film => film._id !== action.id);
    }
    default:
      return state;
  }
}
