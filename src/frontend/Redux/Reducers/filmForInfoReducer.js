import releaseActionTypes from "../Actions/releaseFilms/actionTypes";
import soonActionTypes from "../Actions/soonFilms/actionTypes";

export default function filmForInfoReducer(state = {}, action) {
  switch (action.type) {
    case releaseActionTypes.getFilm: {
      return action.film;
    }
    case soonActionTypes.getFilm: {
      return action.film;
    }
    case "FILM_INFO_RESET": {
      return {};
    }
    default:
      return state;
  }
}
