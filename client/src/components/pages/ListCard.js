import React,{useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';
import {getrate,addrate} from "../../js/action/rateAction"
import Swal from "sweetalert2"

function ListCard({profile: { category,codePostal,_id }}) {
  const isAuth=useSelector(state=>state.authReducer.isAuth)
  const history=useHistory()
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getrate())
},[])

  const rates=useSelector(state=>state.rateReducer.rates)
  const rate=rates.filter(e=>e.profile== _id)

  let count =0 ;
    let sum =0;
    let moy=0;

      for (let i = 0; i < rate.length; i++) {
        count=count+1
        sum=sum+rate[i].rating
      }
    
     moy=sum/count

     const  handlesubmit=()=>{
      if (!isAuth) {   Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'To view profile you must log in!',
      })
      history.push("/login")}
    }
    return (
     
      <div className="container">
      <div className="row bootstrap snippets bootdeys">
          <div className="col-md-3">
            <div className="panel widget">
              <div className="widget-header bg-primary">
              <div className="widget-body text-center">
                <img alt="Profile Picture" className="widget-img img-circle img-border-light" src="https://previews.123rf.com/images/jemastock/jemastock1709/jemastock170909982/85612118-travailleur-de-r%C3%A9paration-ou-avatar-bricoleur-avec-bras-crois%C3%A9s-ic%C3%B4ne-image-vector-illustration-design.jpg"/>
                <h4 className="mar-no">John Doe</h4>
                <p /*className="text-muted mar-btm"*/  style={{color: "black"}}>{category}</p>
                <p /*className="text-muted mar-btm" */ style={{color: "black"}}>{codePostal}</p>
          
                <StarRatingComponent name ="t" value={moy}/>

                <div className="pad-ver">
                <button className="btn btn-primary" onClick={handlesubmit}><Link to={`/profilefiche/${_id}`}>view profil</Link></button>
                  
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
                      
          
      
    )
}
export default ListCard


