import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import {deleteAnnonce} from "../../js/action/AnnonceAction"
import Swal from "sweetalert2"
import "./AnnonceItem.css"


function AnnonceItem({annonce ,getAnnoncee}) {
    const { user } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch()

    const deleteAnnoncee=()=>{
      if (((user.role== "artisan") && (user._id === annonce.user._id) && user.banned==false) || (user.role=="admin")){
        
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
            dispatch(deleteAnnonce(annonce._id))
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'you are not authorise to delete this annonce',
      })
    }
    }
    
    return (
        
      <div>
      <ul className="products">
     
        <li key={annonce._id}>
          <div className="product">
        
            <div className="title">{annonce && annonce.title}</div>
            <div className="date">{annonce && annonce.date}</div>
            <div className="product-brand">{annonce && annonce.category}</div>
            <div className="description">{annonce && annonce.description}</div>
            <div className="btns">
    <button type="submit" className="btn1" onClick={deleteAnnoncee}>Delete</button>
      <button type="submit" className="btn2" onClick={()=>getAnnoncee(annonce)}>Edit</button>
    </div>
          </div>
        </li>
      
    </ul>
    <div>
      
    </div>
    </div>

 
 
    )
}

export default AnnonceItem
