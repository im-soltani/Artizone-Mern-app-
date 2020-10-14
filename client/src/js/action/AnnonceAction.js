import axios from "axios";
import {
      GET_ANNONCE,
      SET_LOADING,
      
  } from "../const/actionType";
  //Add Annoces ar
  
export const addAnnoces = (newAnnonce) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addannonce", newAnnonce,options);
     dispatch(getAnnoces());
    } catch (error) {
      console.log(error)
    

    }
  };


  //get annonce
  export const getAnnoces = () => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.get("/api/auth/allannonce",options);
     dispatch({
        type: GET_ANNONCE,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };

  
 
  //delete annonces ar
  export const deleteAnnonce = id => dispatch => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    const res =axios.delete(`/api/auth/deleteannonceartisan/${id}`,options);
      dispatch(getAnnoces());
    } catch (error) {
      const errorsArray = error.response.data.errors;
      const msg = error.response.data.msg
      if (Array.isArray(errorsArray)) {
        errorsArray.forEach((err) => alert(err.msg));
      }
      if (msg) {
        alert(msg);
      }

    }
    };
 
    //editannonce ar
    export const editAnnonce=(id,updateAnnonce)=>dispatch=>{
        dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
        const res =axios.put(`/api/auth/editannonce/${id}`,updateAnnonce,options)
        dispatch(getAnnoces());
      } catch (error) {
       console.log(error)
      
  
      }
      };

      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };

