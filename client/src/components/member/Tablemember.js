import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import {banuser,unbanuser} from "../../js/action/userAction"
import Swal from "sweetalert2"


function Tablemember({userr}) {
    const dispatch=useDispatch()
    
    let value = '';
    let backgroundColor = '';
    let action;

    const banuserr=()=>{

        Swal.fire({
            title: 'Are you sure?',
            text: `You will ban the user ${userr.firstName}!`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, ban it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(banuser(userr._id))
              Swal.fire(
                'banned!',
                `the user ${userr.firstName} has been banned.`,
                'success'
              )
            }
          })
    }
    const unbanuserr=()=>{
        dispatch(unbanuser(userr._id)) 
        Swal.fire('Good job!',`the user ${userr.firstName} unbaned with success`,"success")        
    }
    if (userr.banned==true) {
        value = 'Unban';
        backgroundColor = '#6495ED';
        action = unbanuserr;

    } else {
        value = 'Ban';
        backgroundColor = '#B22222';
        action = banuserr;
    } 
    
    if (userr.banned==true) {
        value = 'Unban';
        backgroundColor = '#6495ED';
        action = unbanuserr;

    } else {
        value = 'Ban';
        backgroundColor = '#B22222';
        action = banuserr;
    }    

    
    return (
        
                    <tr className="row">
            <td className="col-lg-3">
            {userr.firstName}
            </td>
            <td className="col-lg-3">
            {userr.role} 
            </td>
            <td className="col-lg-3">
            {userr.email} 
            </td>
            <td className="col-lg-3">
                    
            <div className = "form-group">
                    
                    <input type="submit" style={{backgroundColor:backgroundColor}}  value={value} onClick={action} className="btn btn-primary my-1"/>
                    </div>
            </td>
        </tr>
        
    )
}

export default Tablemember
