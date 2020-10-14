import { combineReducers } from "redux";
import authReducer from "./authReducer";
import annReducer from "./annReducer"
import profileReducer from "./profileReducer";
import userReducer from "./userReducer";
import rateReducer from "./rateReducer"

export default combineReducers({
  authReducer,annReducer,profileReducer,userReducer,rateReducer,
  
});