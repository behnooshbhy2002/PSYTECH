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
  USER_PROFILE_DR_RESET,
  USER_EDIT_PROFILE_DR_REQUEST,
  USER_EDIT_PROFILE_DR_SUCCESS,
  USER_EDIT_PROFILE_DR_FAIL,
  USER_EDIT_PROFILE_DR_RESET,
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

export const drDetailsReducers = (state = { details:[] }, action) => {
  switch (action.type) {
    case DOCTOR_DETAILS_REQUEST:
      return { loading: true, details: [] };

    case DOCTOR_DETAILS_SUCCESS:
      return { loading: false, details: action.payload };

    case DOCTOR_DETAILS_SUCCESS:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const userProfileDrReduser = (state = {user:{}}, action) => {
  switch (action.type) {
    case USER_PROFILE_DR_REQUEST:
      return {...state, loadingDr: true };

    case USER_PROFILE_DR_SUCCESS:
      return { loadingDr: false, user: action.payload };

    case USER_PROFILE_DR_FAIL:
      return { loadingDr: false, errorDr: action.payload };
    
      case USER_PROFILE_DR_RESET:
        return {user:{}}
    default:
      return state;
  }
};


export const DrEditProfilee = (state = {user:{}}, action) => {
  switch (action.type) {
    case USER_EDIT_PROFILE_DR_REQUEST:
      return { loadingDr: true };

    case USER_EDIT_PROFILE_DR_SUCCESS:
      return { loadingDr: false,success:true, user: action.payload };

    case USER_EDIT_PROFILE_DR_FAIL:
      return { loadingDr: false, errorDr: action.payload };
    
    case USER_EDIT_PROFILE_DR_RESET:
      return {}
    default:
      return state;
  }
};