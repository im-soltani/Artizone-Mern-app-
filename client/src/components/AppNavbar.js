import React from "react";

import { useSelector, useDispatch } from "react-redux";

import Register from "./auth/Register";
import Login from "./auth/Login";
import { Link } from "react-router-dom";
import { logout} from "../js/action/authActions";

const AppNavbar = () => {
  const dispatch = useDispatch();
  const {isAuth,user} = useSelector((state) => state.authReducer);


  const authLinks = (
    <ul className="navbar-nav ml-auto">
    {(user && user.role=="admin")? (<li className="nav-item">
<Link className="nav-link" to="/memberlist">Memberlist</Link>
</li>):(<li></li>)}
            <li className="nav-item">
        <Link className="nav-link" to="/Annoncescl">Annonces client</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Annonces">Annonces artisan</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dashboard">Dashboard</Link>
      </li>
      <li className="nav-item">
        <a href="" onClick={() => dispatch(logout())} className="nav-link">
         {" "}
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Sign Up
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>)
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
    <div className="container">
    <a className="navbar-brand" >
          <img src={"/logo.jpg"} alt=""/>
        </a>
      <Link className="navbar-brand" to="/">
        ArtiZone
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-nav"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="mobile-nav">
     {!isAuth?( <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/registeradmin">
                  {" "}
                  Admin{" "}
                </Link>
              </li>
            </ul>):(<ul></ul>)}
        {isAuth ? authLinks : guestLinks}
      </div>
    </div>
  </nav>
  );
};

export default AppNavbar;