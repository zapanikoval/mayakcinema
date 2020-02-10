import actionTypes from "../Actions/auth/actionTypes";

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.logInUser: {
      return action.user;
    }
    case actionTypes.logOutUser: {
      return {};
    }
    case actionTypes.authError: {
      return action.error;
    }
    case actionTypes.register: {
      return action.success;
    }
    default:
      return state;
  }
}
