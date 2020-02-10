import { combineReducers } from "redux";
import soonFilmReducer from "./soonFilmReducer";
import releaseFilmReducer from "./releaseFilmReducer";
import filmForInfoReducer from "./filmForInfoReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
  soonFilmState: soonFilmReducer,
  releaseFilmState: releaseFilmReducer,
  filmInfoState: filmForInfoReducer,
  auth: authReducer
});

export default reducer;
