import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  userLoginReduser,
  userRegisterDrReduser,
  userRegisterPatientReduser,
  userSendSignUpReduser,
} from "./reducers/userReducers";
import { drListReducers } from "./reducers/drListReducers";
import { initializeConnect } from "react-redux/es/components/connect";

const reducer = combineReducers({
  userLogin: userLoginReduser,
  userRegisterDr: userRegisterDrReduser,
  userRegisterPatient: userRegisterPatientReduser,
  doctorList: drListReducers,
  userSendSignUp: userSendSignUpReduser,
});

const userInfoFormStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFormStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
