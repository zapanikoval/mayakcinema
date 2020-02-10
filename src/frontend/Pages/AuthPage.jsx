import React from "react";

import LoginForm from "../Components/LoginForm";
import RegisterForm from "../Components/RegisterForm";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import "../Styles/AuthPage.scss";
import logoTheme from "../Images/logo-theme.png";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logInUser, registerUser } from "../Redux/Actions/auth/actions";

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.register = this.register.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.refs.successBox.style.display = "none";
  }

  logIn(user) {
    this.props.dispatch(logInUser(user));
  }

  register(user) {
    this.props.dispatch(registerUser(user));
  }

  // componentDidUpdate() {
  //   if (this.props.auth.userName) this.props.history.go(-1);
  // }

  render() {
    const { auth } = this.props;

    if (!auth.userName)
      return (
        <div className="body-auth">
          <div className="background-image"></div>
          <div className="background-blur"></div>
          <header className="top-logo">
            <NavLink to="/" className="header-name">
              Кинотеатр имени Маяковского
              <img src={logoTheme} alt="logo" className="logo-img"></img>
            </NavLink>
          </header>
          <div
            className="success-register"
            ref="successBox"
            style={{
              display: this.props.auth.successMessage ? "flex" : "none"
            }}
          >
            <p>Пожалуйста, подтвердите email. Письмо выслано.</p>
            <NavLink
              to="/auth/login"
              className="login-link"
              onClick={this.handleClick}
            >
              Войдите
            </NavLink>
            <IconButton
              size="small"
              className="close-btn"
              onClick={this.handleClick}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          </div>
          <div
            className="auth-form"
            style={{
              marginTop: this.props.auth.successMessage ? "5.8%" : "9%"
            }}
          >
            <Switch>
              <Route path="/auth/login">
                <LoginForm logIn={this.logIn} auth={auth} />
              </Route>
              <Route path="/auth/register">
                <RegisterForm register={this.register} auth={auth} />
              </Route>
            </Switch>
          </div>
        </div>
      );
    else return <Redirect to="/" />;
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(AuthPage);
