import axios from "axios";
import {
      GET_RATE,
      SET_LOADING,
      
  } from "../const/actionType";

  //Add rate
  
export const addrate = (id,newrate) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post(`/api/auth/${id}/addrate`, newrate,options);
     dispatch(getrate());
    } catch (error) {
      console.log(error)
    

    }
  };


  //get rate
  export const getrate= () => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.get("/api/auth/allrate",options);
     dispatch({
        type: GET_RATE,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };

  
 
 
      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };

