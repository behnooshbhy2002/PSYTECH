import axios from "axios";
import {
  DOCTORS_LIST_REQUEST,
  DOCTORS_LIST_SUCCESS,
  DOCTORS_LIST_FAIL,
} from "../constants/doctorConstants";

export const listDoctors =
  (searchParams = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: DOCTORS_LIST_REQUEST });
      console.log(searchParams);
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
