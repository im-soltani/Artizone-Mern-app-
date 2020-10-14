import axios from "axios";
import {
      GET_CURRENT_PROFILE,
      GET_PROFILES,
      SET_LOADING,
      GET_PROFILE_ID,
      GET_ERRORS    
      
  } from "../const/actionType";


  //add current profile
  export const createcurrprofile = (newprofile) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios.post("/api/auth/addprofile", newprofile,options);
     dispatch(getcurrentprofile());
    } catch (error) {
      console.log(error)
    

    }
  };

    //get current profile
    export const getcurrentprofile = () => async (dispatch) => {
        dispatch(setLoading());
        try {
          const options = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
      
          const res = await axios.get("/api/auth/currentprofile",options);
         dispatch({
            type: GET_CURRENT_PROFILE,
            payload: res.data, 
          });
        } catch (error) {
        console.log(error)
        }
      };
//
  //delete current profile
// Clear profile
export const clearCurrentProfile = (id) => async (dispatch) => {
    dispatch(setLoading());
    try {
      const options = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const res = await axios.delete(`/api/auth/deleteartisan/${id}`,options);
      dispatch(getcurrentprofile());
    } catch (error) {
    console.log(error)
    }
  };
        //edit curr profile
        export const editcurrprofile=(id,updatecurrprofile)=>dispatch=>{
            dispatch(setLoading());
        try {
          const options = {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          };
            const res =axios.put(`/api/auth/editprofile/${id}`,updatecurrprofile,options)
            dispatch(getcurrentprofile());
          } catch (error) {
           console.log(error)
          
      
          }
          };
    
          const setLoading = () => (dispatch) => {
            dispatch({
              type: SET_LOADING,
            });
          };
  //get all profile
          export const getProfiles = () =>async(dispatch)=> {
            //dispatch(setProfileLoading());
            try {
            const res = await axios.get("/api/auth/allprofile")
            dispatch({
              type: GET_PROFILES,
              payload: res.data, 
            });
          }catch (error) {
            dispatch({
              type: GET_ERRORS,
            });
           };
           };
//get profile by id
export const getprofilebyid = (Id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    
    const res = await axios.get('/api/auth/profil/' + Id);
    dispatch({ type: GET_PROFILE_ID, 
              payload: res.data });
  } catch (error) {
    dispatch({ 
      type: GET_ERRORS 
    });
  }
};