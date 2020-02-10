import React from "react";
import TextField from "@material-ui/core/TextField";
import PasswordField from "./PasswordField";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import "../Styles/LoginForm.scss";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2a3037"
    },
    secondary: {
      main: "#fe5e52"
    }
  }
});

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        userName: "",
        password: "",
        rePassword: ""
      },
      invalidMessage: {
        email: "",
        userName: "",
        password: "",
        rePassword: ""
      },
      disableSubmit: false
    };
    this.isValidInput = this.isValidInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      user: {
        email: "",
        userName: "",
        password: "",
        rePassword: ""
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { invalidMessage, user } = this.state;
    if (
      !invalidMessage.email &&
      !invalidMessage.password &&
      !invalidMessage.rePassword &&
      !invalidMessage.userName &&
      user.email &&
      user.userName &&
      user.rePassword &&
      user.password
    ) {
      const registerUser = {
        email: user.email,
        userName: user.userName,
        password: user.password
      };
      this.resetForm();
      this.props.register(registerUser);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => {
      return {
        user: {
          ...prevState.user,
          [name]: value
        }
      };
    });
  }

  isValidInput(e) {
    const patternEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    const patternPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const { name, value } = e.target;
    let message = "";
    switch (name) {
      case "email": {
        const isValid = patternEmail.test(value);
        if (value.length === 0) {
          message = "Поле не может быть пустым";
        } else if (!isValid) {
          message = "Неверный email.";
        } else {
          message = "";
        }
        break;
      }
      case "password": {
        const isValid = patternPassword.test(value);
        if (value.length === 0) {
          message = "Поле не может быть пустым";
        } else if (value.length < 8) {
          message = "Слишком короткий пароль";
        } else if (!isValid) {
          message =
            "Слишком простой пароль. Пароль должен содержать прописные символы и цифры.";
        }
        break;
      }
      case "rePassword": {
        if (value.length === 0) {
          message = "Поле не может быть пустым";
        } else if (value !== this.state.user.password)
          message = "Пароли не совпадают";
        break;
      }
      case "userName": {
        if (value.length === 0) {
          message = "Поле не может быть пустым";
        } else if (value.length < 5) {
          message = "Имя пользователя не может быть меньше 5 символов";
        }
        break;
      }
      default: {
        message = "";
      }
    }
    this.setState(prevState => {
      return {
        invalidMessage: {
          ...prevState.invalidMessage,
          [name]: message
        }
      };
    });
  }

  render() {
    const { invalidMessage, user } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h3
            style={
              this.props.auth.errorMessage
                ? { marginBottom: 5 }
                : { margin: 25 }
            }
          >
            Регистрация
          </h3>
          {this.props.auth.errorMessage && (
            <div className="auth-error">
              <p>{this.props.auth.errorMessage}</p>
            </div>
          )}
          <TextField
            fullWidth
            label="Имя пользователя"
            name="userName"
            type="text"
            error={!!invalidMessage.userName}
            helperText={!!invalidMessage.userName && invalidMessage.userName}
            color="primary"
            value={user.userName}
            onChange={this.handleChange}
            onBlur={this.isValidInput}
            autoComplete="false"
            inputProps={{ maxLength: "20" }}
          />
          <TextField
            style={{ marginTop: 30 }}
            fullWidth
            label="Email"
            name="email"
            type="email"
            error={!!invalidMessage.email}
            helperText={!!invalidMessage.email && invalidMessage.email}
            color="primary"
            value={user.email}
            onChange={this.handleChange}
            onBlur={this.isValidInput}
            autoComplete="false"
          />
          <PasswordField
            style={{ marginTop: 30 }}
            fullWidth
            label="Пароль"
            name="password"
            error={!!invalidMessage.password}
            helperText={!!invalidMessage.password && invalidMessage.password}
            color="primary"
            value={user.password}
            onChange={this.handleChange}
            onBlur={this.isValidInput}
            autoComplete="false"
          />
          <PasswordField
            style={{ marginTop: 30 }}
            fullWidth
            label="Повторите пароль"
            name="rePassword"
            error={!!invalidMessage.rePassword}
            helperText={
              !!invalidMessage.rePassword && invalidMessage.rePassword
            }
            color="primary"
            value={user.rePassword}
            onChange={this.handleChange}
            onBlur={this.isValidInput}
            autoComplete="false"
          />
          <div className="controls">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!!this.props.auth.userName}
            >
              Зарегестрироваться
            </Button>
            <Button variant="contained" color="primary">
              <NavLink
                className="a-link"
                to="/auth/login"
                style={{ color: "white" }}
              >
                Войти
              </NavLink>
            </Button>
          </div>
        </form>
      </ThemeProvider>
    );
  }
}
