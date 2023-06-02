import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; 
import {
  DOCTORS_LIST_REQUEST,
  DOCTORS_LIST_SUCCESS,
  DOCTORS_LIST_FAIL,
  DOCTOR_DETAILS_REQUEST,
  DOCTOR_DETAILS_SUCCESS,
  DOCTOR_DETAILS_FAIL,
  USER_PROFILE_DR_REQUEST,
  USER_PROFILE_DR_SUCCESS,
  USER_PROFILE_DR_FAIL,
   USER_EDIT_PROFILE_DR_REQUEST,
  USER_EDIT_PROFILE_DR_SUCCESS,
  USER_EDIT_PROFILE_DR_FAIL,
  USER_EDIT_PROFILE_DR_RESET,
} from "../constants/doctorConstants";

export const listDoctors =
  (searchParams = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: DOCTORS_LIST_REQUEST });
      //console.log(searchParams);
      const { data } = await axios.get(
        `http://127.0.0.1:8000/accounts/psychologists_list/${searchParams}`
      );

      dispatch({
        type: DOCTORS_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DOCTORS_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const DrDetails =
  (par = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: DOCTOR_DETAILS_REQUEST });
  
      const { data } = await axios.get(
        `http://127.0.0.1:8000/appointments/psychologist_detail/${par}`
      );

      dispatch({
        type: DOCTOR_DETAILS_SUCCESS,
        payload: data,
      });
    } 
    catch (error) {
      dispatch({
        type: DOCTOR_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  export const EditDrProfile = (user) =>
  async (dispatch,getState) => {
    try {
      console.log(userInfo)
      dispatch({ type: USER_EDIT_PROFILE_DR_REQUEST });
      
      
      const config = {
        headers: {
          "Content-type": "application/json",
           Authorization: `BAREAR ${userInfo.tokens.access}`
        },
      };
      console.log(config)
      const { data } = await axios.put(
        `http://127.0.0.1:8000/appointments/psychologist_profile/${par}`,user, config);

      dispatch({
        type: USER_EDIT_PROFILE_DR_SUCCESS,
        payload: data,
      });
    } 
    catch (error) {
      dispatch({
        type: USER_EDIT_PROFILE_DR_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


   export const getDrProfile = (par , userInfo) =>
  async (dispatch) => {
    try {
      console.log(userInfo)
      dispatch({ type: USER_RDIT_PROFILE_DR_REQUEST });
      
      
      const config = {
        headers: {
          "Content-type": "application/json",
           Authorization: `BAREAR ${userInfo.tokens.access}`
        },
      };
      console.log(config)
      const { data } = await axios.get(
        `http://127.0.0.1:8000/appointments/psychologist_profile/${par}`, config);

      dispatch({
        type: USER_PROFILE_DR_SUCCESS,
        payload: data,
      });
    } 
    catch (error) {
      dispatch({
        type: USER_PROFILE_DR_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };


