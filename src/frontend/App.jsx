import React from "react";
import "./App.scss";
import Header from "./Components/Header";
import Release from "./Pages/Release";
import FilmInfo from "./Pages/FilmInfo";
import Soon from "./Pages/Soon";
import TrailerPage from "./Pages/TrailerPage";
import CinemaInfo from "./Pages/CinemaInfo";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute";
import AdminPage from "./Pages/AdminPage";
import AddPage from "./Pages/AddPage";
import UpdatePage from "./Pages/UpdatePage";

class App extends React.Component {

  render() {
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
          <PrivateRoute path="/admin">
            <AdminPage />
          </PrivateRoute>
          <PrivateRoute
            path="/add/:type"
            render={function(routeProps) {
              return <AddPage {...routeProps} />;
            }}
          />

          <PrivateRoute
            path="/update/:type/:id"
            render={routeProps => <UpdatePage {...routeProps} />}
          />

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
}

export default App;
