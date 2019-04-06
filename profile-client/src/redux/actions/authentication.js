// imports
import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./type";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

//const API_URL = "http://localhost:4000/api/users";
const API_URL = "/api/users";
// api call
const registerUser = (user, history) => dispatch => {
  axios
    .post(API_URL + "/register", user)
    .then(res => history.push("/login"))
    .catch(err => {
      dispatch(getErrors(err.response.data));
    });
};

const loginUser = (user, history) => dispatch => {
  axios
    .post(API_URL + "/login", user)
    .then(res => {
      //console.log(res.data);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .then(res => history.push("/admin"))
    .catch(err => {
      console.log(err);
      dispatch(getErrors(err.response.data));
    });
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/");
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

const getErrors = result => {
  return {
    type: GET_ERRORS,
    result
  };
};

//exports

const actionCreators = {
  registerUser,
  loginUser,
  logoutUser,
  setCurrentUser
};

export { actionCreators };
