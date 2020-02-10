import releaseActionTypes from "../Actions/releaseFilms/actionTypes";
import soonActionTypes from "../Actions/soonFilms/actionTypes";

export default function filmForInfoReducer(state = {}, action) {
  switch (action.type) {
    case releaseActionTypes.getFilm: {
      const newFilm = {
        ...action.film,
        comments: action.film.comments.reverse()
      };
      return newFilm;
    }
    case soonActionTypes.getFilm: {
      const newFilm = {
        ...action.film,
        comments: action.film.comments.reverse()
      };
      return newFilm;
    }
    case "FILM_INFO_RESET": {
      return {};
    }
    case "FILM_INFO_UPDATE": {
      const newFilm = {
        ...action.film,
        comments: action.film.comments.reverse()
      };
      return newFilm;
    }
    default:
      return state;
  }
}
