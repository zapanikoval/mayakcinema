import React from "react";
import ReactDOM from "react-dom";
import App from "./frontend/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { fetchFilms as fetchReleaseFilm } from "./frontend/Redux/Actions/releaseFilms/actions";
import { fetchFilms as fetchSoonFilm } from "./frontend/Redux/Actions/soonFilms/actions";

import store from "./frontend/Redux/Store/store";
store.dispatch(fetchReleaseFilm());
store.dispatch(fetchSoonFilm());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
