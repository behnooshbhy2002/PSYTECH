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
  USER_REGISTER_GET_ADMIN_REQUEST,
  USER_REGISTER_GET_ADMIN_SUCCESS,
  USER_REGISTER_GET_ADMIN_FAIL,
  USER_REGISTER_SEND_ADMIN_REQUEST,
  USER_REGISTER_SEND_ADMIN_SUCCESS,
  USER_REGISTER_SEND_ADMIN_FAIL,
  USER_REGISTER_VERIFY_REQUEST,
  USER_REGISTER_VERIFY_SUCCESS,
  USER_REGISTER_VERIFY_FAIL,
 
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
      return { loadingDr: true };

    case USER_REGISTER_DR_SUCCESS:
      return { loadingDr: false, userInfoDr: action.payload };

    case USER_REGISTER_DR_FAIL:
      return { loadingDr: false, errorDr: action.payload };

    default:
      return state;
  }
};



export const userRegisterPatientReduser = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_PATIENT_REQUEST:
      return { loadingPatient: true };

    case USER_REGISTER_PATIENT_SUCCESS:
      return { loadingPatient: false, userInfoPatient: action.payload };

    case USER_REGISTER_PATIENT_FAIL:
      return { loadingPatient: false, errorPatient: action.payload };

    default:
      return state;
  }
};
export const userSignUpVerifyReduser = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_VERIFY_REQUEST:
      return { loading: true };

    case USER_REGISTER_VERIFY_SUCCESS:
      return { loading: false, result: action.payload };

    case USER_REGISTER_VERIFY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const userGetSignUpReduser = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_GET_ADMIN_REQUEST:
      return { loading: true };

    case USER_REGISTER_GET_ADMIN_SUCCESS:
      return { loading: false, list: action.payload };

    case USER_REGISTER_GET_ADMIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userSendSignUpReduser = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_SEND_ADMIN_REQUEST:
      return { loading: true };

    case USER_REGISTER_SEND_ADMIN_SUCCESS:
      return { loading: false, list: action.payload };

    case USER_REGISTER_SEND_ADMIN_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
