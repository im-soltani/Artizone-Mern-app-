import React, { useState,useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../js/action/authActions";

import Swal from "sweetalert2"


const Login = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
 


  const handleFormChange = (e) =>{
  e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  
  const handleConfim = (e) => {
    e.preventDefault();
    dispatch(login(formData));
   }
  
  useEffect(() => {
   
    if (isAuth){
      history.push("/dashboard")
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'you have logged in successfully',
        showConfirmButton: false,
        timer: 1500
      })
   
  
      }
  })



  return (
<div className="login-form">
    <form >
        <h2 className="text-center">Log in</h2>       
        <div className="form-group">
            <input type="email" name="email" className="form-control" placeholder="Email" required="required"
            onChange={handleFormChange}/>
        </div>
        <div className="form-group">
            <input type="password" name="password" className="form-control" placeholder="Password" required="required"
            onChange={handleFormChange}/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block" onClick={handleConfim}>Log in</button>
        </div>
        <div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="register" class="ml-2">Sign Up</a>
					</div>
          </div>
        </form>
  
</div>

  );
};

export default Login;