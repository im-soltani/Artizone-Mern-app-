import React,{useEffect} from 'react'
import { getuser } from '../../js/action/userAction'
import {useDispatch,useSelector} from "react-redux"
import Tablemember from './Tablemember'

function Memberlist() {
    const dispatch=useDispatch();
    const users = useSelector((state) => state.userReducer.users);
    const getuserr=()=>{
      dispatch(getuser())
    }
    useEffect(() => {
        getuserr();
      }, []);
    return (
        <div className="container">
        <table className="table table-striped">
          <thead>
            <tr className="row">
              <td className="col-lg-3"><strong>User Name</strong></td>
              <td className="col-lg-3"><strong>Type of user</strong></td>
              <td className="col-lg-3"><strong>Email</strong></td>
              <td className="col-lg-3"><strong>Ban/Unban</strong></td>
            </tr>
          </thead>
          <tbody>
         {users.map((userr,i)=> <Tablemember key={i} userr={userr}/>)} 
          </tbody>
        </table>
    </div>
    )
}

export default Memberlist
