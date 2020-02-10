import axios from "axios";
import actionTypes from "./actionTypes";

const baseURL = "http://192.168.0.101:5000/auth";
//const baseURL = "http://localhost:5000/auth";

export function logInUser(user) {
  return async function(dispatch) {
    try {
      const res = await axios.post(`${baseURL}/login`, user);

      if (res) {
        const { userName, email, userRole } = parseJwt(res.data.accessToken);

        if (res.data.accessToken) {
          localStorage.setItem("access_token", res.data.accessToken);
        }
        if (res.data.refreshToken) {
          localStorage.setItem("refresh_token", res.data.refreshToken);
        }

        const authUser = {
          userName,
          email,
          role: userRole,
          token: res.data.accessToken
        };
        dispatch({ type: actionTypes.logInUser, user: authUser });
      }
    } catch (e) {
      console.log(e);
      if (e.response.status === 401) {
        const errorMessage = "Неверный пароль.";
        const statusCode = 401;
        const error = {
          errorMessage,
          statusCode
        };
        dispatch({ type: actionTypes.authError, error });
      } else if (e.response.status === 404) {
        const errorMessage = "Пользователь с таким email не найден.";
        const statusCode = 404;
        const error = {
          errorMessage,
          statusCode
        };
        dispatch({ type: actionTypes.authError, error });
      } else if (e.response.status === 409) {
        const errorMessage = "Подтвердите email.";
        const statusCode = 409;
        const error = {
          errorMessage,
          statusCode
        };
        dispatch({ type: actionTypes.authError, error });
      }
    }
  };
}

export function registerUser(user) {
  return async function(dispatch) {
    try {
      const res = await axios.post(`${baseURL}/register`, user);
      if (res.status === 201) {
        const successMessage = res.data.message;
        const statusCode = res.status;
        const success = {
          successMessage,
          statusCode
        };
        dispatch({ type: actionTypes.register, success });
      }
    } catch (e) {
      if (e) {
        console.log(e);
        if (e.response.status === 409) {
          const error = {
            errorMessage: e.response.data.message,
            statusCode: e.response.status
          };
          dispatch({ type: actionTypes.authError, error });
        } else if (e.response.status === 500) {
          console.log(e.response.data.message);
        }
      }
    }
  };
}

export function checkAccessToken() {
  return async function(dispatch, getState) {
    const { auth } = getState();

    if (auth.token) {
      const tokenFromState = auth.token;
      const token = parseJwt(tokenFromState);
      if (Math.trunc(Date.now() / 1000) < token.exp) {
        console.log("TOKEN IS ACCESS");
      } else if (Math.trunc(Date.now() / 1000) >= token.exp) {
        console.log("TOKEN NOT ACCESS");
        try {
          const refreshToken = localStorage.getItem("refresh_token");
          const res = await axios.post(`${baseURL}/refresh`, {
            refresh: refreshToken
          });
          if (res) {
            const { userName, email, userRole } = parseJwt(
              res.data.accessToken
            );
            if (res.data.accessToken) {
              await localStorage.setItem("access_token", res.data.accessToken);
            }
            if (res.data.refreshToken) {
              await localStorage.setItem(
                "refresh_token",
                res.data.refreshToken
              );
            }
            const authUser = {
              userName,
              email,
              role: userRole,
              token: res.data.accessToken
            };
            dispatch({ type: actionTypes.logInUser, user: authUser });
          }
        } catch (e) {
          if (e.response.status === 401) {
            console.error(e);
            const error = {
              errorMessage: e.response.data.message,
              statusCode: e.response.status
            };
            dispatch({ type: actionTypes.authError, error });
          } else if (e.response.status === 500) {
            console.error("ТОКЕН НЕ НАЙДЕН В БАЗЕ ДАННЫХ");
          }
        }
      }
    } else if (localStorage.getItem("access_token")) {
      const token = localStorage.getItem("access_token");
      const { userName, email, userRole } = parseJwt(token);
      const authUser = {
        userName,
        email,
        role: userRole,
        token
      };
      dispatch({ type: actionTypes.logInUser, user: authUser });
    }
  };
}

export function logOutUser() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  return { type: actionTypes.logOutUser };
}

export function parseJwt(token) {
  if (token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function(c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } else return undefined;
}
