import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "../Reducers/reducer";

const initialState = {
  soonFilmState: [],
  releaseFilmState: [],
  filmInfoState: {}
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
