import React from "react";
import ReactDOM from "react-dom";
import App from "./frontend/App";
import AuthPage from "./frontend/Pages/AuthPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./frontend/Redux/Store/store";

window.addEventListener("unload", () => {
  const notRemember = localStorage.getItem("refresh_token");
  if (notRemember === "no_remember") {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  }
});

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route
          strict
          path="/auth"
          render={routeProps => <AuthPage {...routeProps} />}
        />
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Provider>
  </Router>,
  document.getElementById("root")
);
