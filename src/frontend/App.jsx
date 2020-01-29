import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Release from "./Components/Release";
import FilmInfo from "./Components/FilmInfo";
import Soon from "./Components/Soon";
import TrailerPage from "./Components/TrailerPage";
import CinemaInfo from "./Components/CinemaInfo";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminPage from "./Components/AdminPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/release">
          <Release />
        </Route>
        <Route path="/soon">
          <Soon />
        </Route>
        <Route path="/cinema">
          <CinemaInfo />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route
          path="/trailer/:trailerLink"
          render={routeProps => <TrailerPage {...routeProps} />}
        />
        <Route
          path="/release-film/:filmId"
          render={routeProps => <FilmInfo {...routeProps} type="release" />}
        />
        <Route
          path="/soon-film/:filmId"
          render={routeProps => <FilmInfo {...routeProps} type="soon" />}
        />
        <Route path="*">
          <Redirect to="/release" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
