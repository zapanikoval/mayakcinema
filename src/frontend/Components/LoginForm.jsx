import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        rememberMe: false
      },
      invalidMessage: {
        email: "",
        password: ""
      },
      disableSubmit: false
    };
    this.isValidInput = this.isValidInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { invalidMessage, user } = this.state;
    if (
      !invalidMessage.email &&
      !invalidMessage.password &&
      user.email &&
      user.password
    ) {
      this.props.logIn(user);
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

  onCheck(e) {
    const isCheck = e.target.checked;
    this.setState(prev => {
      return {
        user: {
          ...prev.user,
          rememberMe: isCheck
        }
      };
    });
  }

  isValidInput(e) {
    const patternEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
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
        if (value.length === 0) {
          message = "Поле не может быть пустым";
        } else if (value.length < 8) {
          message = "Слишком короткий пароль";
        } else {
          message = "";
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
    const { invalidMessage } = this.state;

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
            Вход
          </h3>
          {this.props.auth.errorMessage && (
            <div className="auth-error">
              <p>{this.props.auth.errorMessage}</p>
            </div>
          )}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            error={!!invalidMessage.email}
            helperText={!!invalidMessage.email && invalidMessage.email}
            color="primary"
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
            onChange={this.handleChange}
            onBlur={this.isValidInput}
            autoComplete="false"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={this.state.user.rememberMe}
                color="secondary"
                onClick={this.onCheck}
              />
            }
            label="Запомнить на этом устройстве?"
          />

          <div className="controls">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={!!this.props.auth.userName}
            >
              Войти
            </Button>
            <Button variant="contained" color="primary">
              <NavLink
                style={{ color: "white" }}
                className="a-link"
                to="/auth/register"
              >
                Регистраиця
              </NavLink>
            </Button>
          </div>
        </form>
      </ThemeProvider>
    );
  }
}
