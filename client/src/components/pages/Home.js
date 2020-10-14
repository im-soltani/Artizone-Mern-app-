import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom"; 
import { useSelector,useDispatch} from "react-redux"
import ListCard from "./ListCard";
import {getProfiles} from "../../js/action/profileactions";
const Home = () => {
  const profiles = useSelector((state) => state.profileReducer.profiles);
  const [categorySearch, setCategorySearch] = useState('');
  const [codePostalSearch, setCodePostalSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles());
   },[])
    return (
        <div className="landing hj">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Trouver un artisan</h1>
                <p className="lead">
                  {" "}
                  chercher un artisan , partager une annonce ,donner un rating ...
                </p>
                <hr />
                <div className="s01">
        <form>
          <div className="inner-form col-md-12 text-center">
            <div className="input-field first-wrap">
              <input id="search" type="text" placeholder="category" onChange={(e) => setCategorySearch(e.target.value)} />
            </div>
            <div className="input-field second-wrap">
              <input id="location" type="text" placeholder="code postal" onChange={(e) => setCodePostalSearch(e.target.value)}/>
            </div>
            <div className="input-field third-wrap">
              <h1 className="title_search" >Search</h1>
            </div>
          </div>
        </form>
      </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        {(categorySearch.trim() !=="" && codePostalSearch.trim() !== "")?
        (<div className='listeprofile'>
         {  profiles.filter(
          profile =>
          (profile.category.toLowerCase().includes(categorySearch.toLowerCase().trim()))&&
          (profile.codePostal.toLowerCase().includes(codePostalSearch.toLowerCase().trim()))
          ).map((profile,i)=>
            <ListCard key ={i} profile={profile}/>
           )
         }
        </div>
        ):<div></div>}
        </div>
     </div>
    )
}
export default Home





