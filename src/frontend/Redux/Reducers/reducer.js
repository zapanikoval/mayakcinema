import { combineReducers } from "redux";
import soonFilmReducer from "./soonFilmReducer";
import releaseFilmReducer from "./releaseFilmReducer";
import filmForInfoReducer from "./filmForInfoReducer";

const reducer = combineReducers({
  soonFilmState: soonFilmReducer,
  releaseFilmState: releaseFilmReducer,
  filmInfoState: filmForInfoReducer
});

export default reducer;
