import React, { Component,useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import ActivityIndicator from 'react-activity-indicator';


export const  NavBar =()=> {
  const { isAuthenticated,onLogout, error, isLoading } = useContext(AuthenticationContext);

    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg  navbar-style">
          <a className="navbar-brand text-white" href="/home">
            ET-TICKETING
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
      

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            {!isAuthenticated && 
             <li className="nav-item ">
                <Link to="/account" className="nav-link text-white">
                  Login
                </Link>
              </li>}

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administrator
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/dashboard">Dashboard </a></li>
            {!isAuthenticated &&  <li><a class="dropdown-item" href="/account">Login </a></li>}
          </ul>
        </li>

     
        {isAuthenticated &&  <div className="pt-1" >
            <div className="justify-end">
              <button type="submit"  onClick={()=>{onLogout()}}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Logout
              </button>
            </div>
          </div>}


            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  };

