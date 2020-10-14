import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import {Link,Route} from "react-router-dom"

import {getcurrentprofile,clearCurrentProfile} from "../../js/action/profileactions"

import Swal from 'sweetalert2'



const Dashboard = ({profile,getprofilee}) => {
 
  const user =useSelector((state)=>state.authReducer.user)
  const isloading =useSelector((state)=>state.profileReducer.isloading)
  const dispatch = useDispatch();
  const history=useHistory()
  const getProfile = () => dispatch(getcurrentprofile());
    
  useEffect(() =>{
        
    (getProfile())
     
  },[]);
 
  const deleteprofilee=()=>{
    if (user.banned==false){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearCurrentProfile(profile._id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }else{  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'you are not authorize to delete profile!!'
  })}

  }
     
    
     
if (isloading){
  return <h1>spinner...</h1>
}
 
  return (
    ( profile ===null )?(  
      <div>
           
           <div>
      {user.firstName} {user.lastName} : {user.email}
      </div>
      { (user.role=="artisan")?(
      <Link to="/profileform"><button>create profile</button></Link>):(<div></div>)}
               
                  </div>
      ):(
        
       
        <div>
       
             <p className="text-pr">{profile && profile.profileName}</p>
              <p className="text-pr">{profile && profile.avatar}</p>
              <p className="text-pr">{profile && profile.speciality}</p>
              <p className="text-pr">{profile && profile.category}</p>
              <p className="text-pr">{profile && profile.desciption}</p>
              <p className="text-pr">{profile && profile.adress}</p>
              <p className="text-pr">{profile && profile.codePostal}</p>
              <p className="text-pr">{profile && profile.phoneNumber}</p>
              <p className="text-pr">{profile && profile.Diploma}</p>
              <p className="text-pr">{profile && profile.Rating}</p>

      
        
       
        <Link to="/dashboard"><button type="submit" className="btn btn-success" onClick={()=>deleteprofilee()}>Delete</button></Link >
        <Link to="/profileform"><button  className="btn btn-success" onClick={()=> getprofilee(profile)}>Edit</button></Link>
           
  </div>
       
      )
 
  )
};
export default Dashboard;