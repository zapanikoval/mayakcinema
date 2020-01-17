import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Release from "./Components/Release";
import FilmInfo from "./Components/FilmInfo";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/release">
          <Release />
        </Route>
        <Route path="/soon">
          <Release />
        </Route>
        <Route path="/cinema">
          <Release />
        </Route>
        <Route
          path="/film/:filmId"
          render={routeProps => <FilmInfo {...routeProps} />}
        />
        <Route path="*">
          <Redirect to="/release" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
