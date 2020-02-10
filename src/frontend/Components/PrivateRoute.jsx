import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends React.Component {
  render() {
    const { children, auth, component: Component, ...rest } = this.props;
    if (auth.role && auth.role === "admin") {
      if (Component) {
        return (
          <Route
            {...rest}
            render={routeProps => <Component {...routeProps} />}
          />
        );
      } else return <Route {...rest}>{children}</Route>;
    } else return <Redirect to="/auth/login"></Redirect>;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(PrivateRoute);
