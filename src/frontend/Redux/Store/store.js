import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import { fetchFilms as fetchReleaseFilm } from "../Actions/releaseFilms/actions";
import { fetchFilms as fetchSoonFilm } from "../Actions/soonFilms/actions";
import { checkAccessToken } from "../Actions/auth/actions";

import reducer from "../Reducers/reducer";

const initialState = {
  soonFilmState: [],
  releaseFilmState: [],
  filmInfoState: {},
  auth: {}
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));
store.dispatch(fetchReleaseFilm());
store.dispatch(fetchSoonFilm());
store.dispatch(checkAccessToken());

export default store;
