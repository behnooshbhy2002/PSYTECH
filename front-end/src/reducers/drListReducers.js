import {
  DOCTORS_LIST_REQUEST,
  DOCTORS_LIST_SUCCESS,
  DOCTORS_LIST_FAIL,
} from "../constants/doctorConstants";
export const drListReducers = (state = { doctors: [] }, action) => {
  switch (action.type) {
    case DOCTORS_LIST_REQUEST:
      return { loading: true, doctors: [] };

    case DOCTORS_LIST_SUCCESS:
      return { loading: false, doctors: action.payload };

    case DOCTORS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};