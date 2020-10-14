import axios from "axios";
import Swal from "sweetalert2"
import {
  LOGIN_USER,
  GET_AUTH_USER,
  REGISTER_USER,
  LOGOUT,
  AUTH_ERROR,
  SET_LOADING,
} from "../const/actionType";

// register user

export const register = (formData) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await axios.post("/api/auth/register", formData);

    dispatch({
      type: REGISTER_USER,
      payload: res.data, //  { msg: "register Success", user,token }
    });
  } catch (error) {
    const errorsArray = error.response.data.errors;
    const msg = error.response.data.msg
    if (Array.isArray(errorsArray)) {
      errorsArray.forEach((err) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.msg
      }));
    }
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// login user

export const login = (formData) => async (dispatch) => {
  dispatch(setLoading());

  try {
    const res = await axios.post("/api/auth/login", formData);

    dispatch({
      type: LOGIN_USER,
      payload: res.data, //  { msg: "Login Success", user, token }
    });
  } catch (error) {
    console.dir(error);
    const errorsArray = error.response.data.errors;
    const msg = error.response.data.msg
    if (Array.isArray(errorsArray)) {
      errorsArray.forEach((err) => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.msg
      }));
    }
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// get auth user

export const getAuthUser = () => async (dispatch) => {
  dispatch(setLoading());

  try {
    const options = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    const res = await axios.get("/api/auth/me", options);

    dispatch({
      type: GET_AUTH_USER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};