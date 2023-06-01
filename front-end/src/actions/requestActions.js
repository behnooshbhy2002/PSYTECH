import axios from "axios";
import {
  DOCTOR_SEND_REQUEST,
  DOCTOR_SEND_SUCCESS,
  DOCTOR_SEND_FAIL,
} from "../constants/requestConstants";
export const SendRequest = (p_id, dr_id) => async (dispatch) => {
  try {
    dispatch({
      type: DOCTOR_SEND_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://127.0.0.1:8000/accounts/verify/",
      { id_patient: p_id, id_psycologist: dr_id },
      config
    );
    dispatch({
      type: DOCTOR_SEND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOCTOR_SEND_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
