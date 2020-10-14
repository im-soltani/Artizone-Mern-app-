import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom"
import {createcurrprofile,editcurrprofile} from "../../js/action/profileactions"
import { useSelector,useDispatch } from "react-redux";

import Swal from 'sweetalert2'


const Profileform = ({profileName,avatar,speciality,category,description,adress,
  codePostal,phoneNumber,Diploma,Rating,setProfileName,setAvatar,setSpeciality,setCategory,setDescription,setAdress,
  setCodePostal,setPhoneNumber,setDiploma,setRating,id,setId,edit,setEdit}) => {

    const dispatch=useDispatch()
    const isloading =useSelector((state)=>state.profileReducer.isloading)
    const { user } = useSelector((state) => state.authReducer);
      
      const addprofile = () => {
        if (user.banned==false){
        dispatch(createcurrprofile({ profileName,avatar,speciality,category,description,adress,
          codePostal,phoneNumber,Diploma,Rating }));
      
          setProfileName('');
          setAvatar('')
          setSpeciality('')
          setCategory('')
          setDescription('')
          setAdress('')
          setCodePostal('')
          setPhoneNumber('')
          setDiploma('')
          setRating('')
          Swal.fire('Good job!',"profile added with success","success")
        }else{  Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'you are not authorize to add profile!!'
        })}
      }

      const editprofile=()=>{

        /* Swal.fire('Good job!',"profile edited with success","success")*/
        if (user.banned==false){
         Swal.fire({
           title: 'Are you sure?',
           text: "You would save the modified field!",
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#3085d6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'Yes, save modif!'
         }).then((result) => {
           if (result.isConfirmed) {
             dispatch(editcurrprofile(id,{id,profileName,avatar,speciality,category,description,adress,
               codePostal,phoneNumber,Diploma,Rating}))
        
             Swal.fire(
               'Saved!',
               'Your change has been saved.',
               'success'
             )
           }
         })}else{  Swal.fire({
           icon: 'error',
           title: 'Oops...',
           text: 'you are not authorize to edit profile!'
         })}
         setEdit(false)
         setProfileName('');
         setAvatar('')
         setSpeciality('')
         setCategory('')
         setDescription('')
         setAdress('')
         setCodePostal('')
         setPhoneNumber('')
         setDiploma('')
         setRating('')
         setId(0)
     }
    
      const action= edit? editprofile : addprofile  
      if (isloading){
        return <h1>spinner...</h1>
      }
      return (
       
           <div>


<input id="name" name="profileName" type="text" placeholder="enter your profileName" className="form-control"
value={profileName} onChange={(e)=>setProfileName(e.target.value)}/> 

<input id="name" name="avatar" type="text" placeholder="enter your avatar" className="form-control"
value={avatar} onChange={(e)=>setAvatar(e.target.value)}/>  

<input id="name" name="Speciality" type="text" placeholder="enter your Speciality" className="form-control"
value={speciality} onChange={(e)=>setSpeciality(e.target.value)}/>  

<input id="name" name="Category" type="text" placeholder="enter your Category" className="form-control"
value={category} onChange={(e)=>setCategory(e.target.value)}/>  

<input id="name" name="Description" type="text" placeholder="enter your Description" className="form-control"
value={description} onChange={(e)=>setDescription(e.target.value)}/>  

<input id="name" name="Adress" type="text" placeholder="enter your Adress" className="form-control"
value={adress} onChange={(e)=>setAdress(e.target.value)}/>  

<input id="name" name="CodePostal" type="text" placeholder="enter your CodePostal" className="form-control"
value={codePostal} onChange={(e)=>setCodePostal(e.target.value)}/>  

<input id="name" name="PhoneNumber" type="text" placeholder="enter your PhoneNumber" className="form-control"
value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>  

<input id="name" name="Diploma" type="text" placeholder="enter your Diploma" className="form-control"
value={Diploma} onChange={(e)=>setDiploma(e.target.value)}/>  

<input id="name" name="Rating" type="text" placeholder="enter your Rating" className="form-control"
value={Rating} onChange={(e)=>setRating(e.target.value)}/>



<div className="col-md-12 text-center">
<Link to="/dashboard" ><input type="submit"  value={edit? "edit profile":"add profile"} onClick={action} /> </Link>
</div>
</div>
      
      );
    };
    export default Profileform;