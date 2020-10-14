import axios from "axios";
import {
      GET_ANNONCE,
      SET_LOADING,
      
  } from "../const/actionType";
  
  //Add Annoces cl
  
export const addAnnocescl = (newAnnonce) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addannoncecl", newAnnonce,options);
     dispatch(getAnnocescl());
    } catch (error) {
      console.log(error)
    

    }
  };


  //get annonce

  export const getAnnocescl = () => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.get("/api/auth/allannoncecl",options);
     dispatch({
        type: GET_ANNONCE,
        payload: res.data, 
      });
    } catch (error) {
    console.log(error)
    }
  };

  
 
  //delete annonces ar
  export const deleteAnnoncecl = id => dispatch => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
    const res =axios.delete(`/api/auth/deleteannonceartisancl/${id}`,options);
      dispatch(getAnnocescl());
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
    export const editAnnoncecl=(id,updateAnnonce)=>dispatch=>{
        dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
        const res =axios.put(`/api/auth/editannoncecl/${id}`,updateAnnonce,options)
        dispatch(getAnnocescl());
      } catch (error) {
       console.log(error)
      
  
      }
      };

      const setLoading = () => (dispatch) => {
        dispatch({
          type: SET_LOADING,
        });
      };

