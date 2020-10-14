import React, { useState,useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


import AppNavbar from "./components/AppNavbar";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import Home from "./components/pages/Home";
import AnnoncesListe from "./components/annonce/AnnoncesListe"
import AnnoncesListecl from "./components/annonce/AnnoncesListecl"
import Dashboard from "./components/pages/Dashboard";
import Profileform from "./components/profile/Profileform"
import Memberlist from "./components/member/Memberlist"
import Profilefiche from "./components/pages/Profilefiche"
import Registeradmin from "./components/auth/Registeradmin"


import PrivateRoute from "./components/route/PrivateRoute";
import { getAuthUser } from "./js/action/authActions";


import "./App.css";




function App() {
  const profile =useSelector((state)=>state.profileReducer.profile)
  const dispatch = useDispatch();

  const [profileName, setProfileName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [codePostal, setCodePostal] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [Diploma, setDiploma] = useState("");
  const [Rating, setRating] = useState("");
  const [id, setId] = useState(0)
  const [edit, setEdit] = useState(false)

  const getprofilee=(profilee)=>{

    setProfileName(profilee.profileName)
    setAvatar(profilee.avatar)
    setSpeciality(profilee.speciality)
    setCategory(profilee.category)
    setDescription(profilee.description)
    setAdress(profilee.adress)
    setCodePostal(profilee.codePostal)
    setPhoneNumber(profilee.phoneNumber)
    setDiploma(profilee.Diploma)
    setRating(profilee.Rating)
  
    setId(profilee._id)
    setEdit(true)
    
  }


 /* const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.authReducer);*/

 

  const getUser = () => dispatch(getAuthUser());
  useEffect(() => {
    getUser();
  }, []);

 
  return (
   
    <BrowserRouter >
      <AppNavbar />
      
      <Switch>
       <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login}  />
        <Route exact path="/" component={Home}  />
        <PrivateRoute exact path="/memberlist" component={Memberlist}  />
   
        <PrivateRoute path="/profileform" render={() => (
            <Profileform
            profileName={profileName}
            avatar={avatar}
            speciality={speciality}
            category={ category}
            description={description}
            adress={adress}
            codePostal={codePostal}
            phoneNumber={phoneNumber}
            Diploma={Diploma}
            Rating={Rating}
            id={id}
         
              
            
            setProfileName={setProfileName}
            setAvatar={setAvatar}
            setSpeciality={setSpeciality}
            setCategory={ setCategory}
            setDescription={setDescription}
            setAdress={setAdress}
            setCodePostal={setCodePostal}
            setPhoneNumber={setPhoneNumber}
            setDiploma={setDiploma}
            setRating={setRating}
            setId={setId}

              edit={edit}
              setEdit={setEdit} />  )}
              />
      
      
        
     

        <PrivateRoute path="/Annoncescl" component={AnnoncesListecl} />
        <PrivateRoute path="/Annonces" component={AnnoncesListe} />

        <PrivateRoute path="/dashboard" render={() => (
            <Dashboard
              profile={profile}
              getprofilee={getprofilee}
               />  )}  />

        <PrivateRoute exact path="/profilefiche/:id" component={Profilefiche} />
        <Route path="/registeradmin" component={Registeradmin}/>
      </Switch>
      
      
    </BrowserRouter>
   
  );
}

export default App;
