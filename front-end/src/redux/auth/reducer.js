import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "./actionTypes";

import { saveData } from "./../../localStorage/localStorage";

const initialState = {
  user: {},
  message: "",
  isAuth: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_REQUEST: {
      console.log(type, payload);
      return { ...state };
    }

    case REGISTER_USER_SUCCESS: {
      console.log(type, payload);
      const { user, message } = payload;
      const { email, name, _id } = user;

      saveData("user", { email, name, _id, isAuth: true });
      return {
        ...state,
        user,
        message,
        isAuth: true,
      };
    }

    case REGISTER_USER_FAILURE: {
      console.log(type, payload);
      const { message } = payload;
      return { ...state, message };
    }

    case LOGIN_USER_REQUEST: {
      console.log(type, payload);
      return { ...state };
    }

    case LOGIN_USER_SUCCESS: {
      console.log(type, payload);
      const { user, message } = payload;
      const { email, name, _id } = user;

      saveData("user", { email, name, _id, isAuth: true });
      return {
        ...state,
        user,
        message,
        isAuth: true,
      };
    }

    case LOGIN_USER_FAILURE: {
      console.log(type, payload);
      const { message } = payload;
      return { ...state, message };
    }

    default:
      return state;
  }
};
