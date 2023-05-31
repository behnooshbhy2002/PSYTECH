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
  USER_REGISTER_GET_ADMIN_REQUEST,
  USER_REGISTER_GET_ADMIN_SUCCESS,
  USER_REGISTER_GET_ADMIN_FAIL,
  USER_REGISTER_SEND_ADMIN_REQUEST,
  USER_REGISTER_SEND_ADMIN_SUCCESS,
  USER_REGISTER_SEND_ADMIN_FAIL,
  USER_REGISTER_VERIFY_REQUEST,
  USER_REGISTER_VERIFY_SUCCESS,
  USER_REGISTER_VERIFY_FAIL,
  USER_PROFILE_DR_REQUEST,
  USER_PROFILE_DR_SUCCESS,
  USER_PROFILE_DR_FAIL,
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

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
};

export const registerDr =
  (fullname, phonenumber, email, gender, medicalNum, password, confirmPass) =>
  async (dispatch) => {
    //console.log("d");
    try {
      dispatch({
        type: USER_REGISTER_DR_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const obj = {
        full_name: fullname,
        phone_number: phonenumber,
        email: email,
        gender: gender,
        medical_number: medicalNum,
        password: password,
      };
      //console.log(obj);
      const { data } = await axios.post(
        "http://127.0.0.1:8000/accounts/register_psychologist/",
        obj,
        config
      );
      dispatch({
        type: USER_REGISTER_DR_SUCCESS,
        payload: data,
      });
      //const history = useNavigate();
      //history.push("/Login")
      localStorage.setItem("verifyEmail", JSON.stringify(data));
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
    //console.log("p");
    try {
      dispatch({
        type: USER_REGISTER_PATIENT_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const obj = {
        full_name: fullname,
        phone_number: phonenumber,
        email: email,
        gender: gender,
        password: password,
      };
      const { data } = await axios.post(
        "http://127.0.0.1:8000/accounts/register/",
        obj,
        config
      );
      dispatch({
        type: USER_REGISTER_PATIENT_SUCCESS,
        payload: data,
      });

      localStorage.setItem("verifyEmail", JSON.stringify(data));
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

export const verify = (code, email) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_VERIFY_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/accounts/verify/",
      { otp: code, email: email },
      config
    );
    dispatch({
      type: USER_REGISTER_VERIFY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_VERIFY_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const userGetSignUp = (checkRes) => async (dispatch) => {
  try {
    console.log(checkRes);
    dispatch({ type: USER_REGISTER_GET_ADMIN_REQUEST });
    const { data } = await axios.get(
      `http://127.0.0.1:8000/accounts/active_psychologist/`
    );

    dispatch({
      type: USER_REGISTER_GET_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_GET_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const userSendSignUpStatus = (id, status) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_SEND_ADMIN_REQUEST,
    });
    console.log(id, status);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/accounts/active_psychologist/",
      {
        pk: id,
        is_active: status,
      },
      config
    );
    dispatch({
      type: USER_REGISTER_SEND_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_SEND_ADMIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProfileDR = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_PROFILE_DR_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        // Authorization: `BAREAR ${userInfo.t oken}`
      },
    };

    const { data } = await axios.get(`/api/users/${id}`, config);

    dispatch({
      type: USER_PROFILE_DR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_DR_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
