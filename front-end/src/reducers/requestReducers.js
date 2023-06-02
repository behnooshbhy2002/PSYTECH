import {
  DOCTOR_SEND_REQUEST,
  DOCTOR_SEND_SUCCESS,
  DOCTOR_SEND_FAIL,
} from "../constants/requestConstants";
export const requestSendReduser = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR_SEND_REQUEST:
      return { loading: true };

    case DOCTOR_SEND_SUCCESS:
      return { loading: false, reqResult: action.payload };

    case DOCTOR_SEND_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
