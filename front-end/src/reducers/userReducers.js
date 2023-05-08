import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_DR_REQUEST,
  USER_REGISTER_DR_SUCCESS,
  USER_REGISTER_DR_FAIL,
  USER_REGISTER_PATIENT_REQUEST,
  USER_REGISTER_PATIENT_SUCCESS,
  USER_REGISTER_PATIENT_FAIL,
} from "../constants/userConstants";

export const userLoginReduser = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };

    case USER_LOGOUT:
      return {};

    default:
      return state;
  }
};

export const userRegisterDrReduser = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_DR_REQUEST:
      return { loading: true };

    case USER_REGISTER_DR_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_DR_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userRegisterPatientReduser = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_PATIENT_REQUEST:
      return { loading: true };

    case USER_REGISTER_PATIENT_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_REGISTER_PATIENT_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
