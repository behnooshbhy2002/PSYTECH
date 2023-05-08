import axios from "axios";
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

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/accounts/login/",
      { email: email, password: password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => {
  localStorage.removeItem("userInfo");
  // dispatch({ type: USER_LOGOUT });
};

export const registerDr =
  (fullname, phonenumber, email, gender, medicalNum, password) =>
  async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_DR_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/registerDr/",
        {
          fullname: fullname,
          phonenumber: phonenumber,
          email: email,
          gender: gender,
          medicalNum: medicalNum,
          password: password,
        },
        config
      );
      dispatch({
        type: USER_REGISTER_DR_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_DR_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

export const registerPatient =
  (fullname, phonenumber, email, gender, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_PATIENT_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/users/registerPatient/",
        {
          fullname: fullname,
          phonenumber: phonenumber,
          email: email,
          gender: gender,
          password: password,
        },
        config
      );
      dispatch({
        type: USER_REGISTER_PATIENT_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_PATIENT_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };