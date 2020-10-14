
import axios from "axios";
import {

      GET_USERS,
      SET_LOADING,
      GET_ERRORS    
      
  } from "../const/actionType";



 //get all artisan
 export const getuser = () =>async(dispatch)=> {
    //dispatch(setProfileLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      
    const res = await axios.get("/api/auth/alluser",options)
    dispatch({
      type: GET_USERS,
      payload: res.data, 
    });
  }catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
   };
   };
//ban an artisan

export const banuser = id =>async(dispatch)=> {
    //dispatch(setProfileLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const banned=true
    const res = await axios.put(`/api/auth/ban/${id}`,banned,options)
    dispatch(getuser());
  }catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
   };
   };

  //unban user 
  export const unbanuser = id =>async(dispatch)=> {
    //dispatch(setProfileLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const banned=false
    const res = await axios.put(`/api/auth/unban/${id}`,banned,options)
    dispatch(getuser());
  }catch (error) {
    dispatch({
      type: GET_ERRORS,
    });
   };
   };