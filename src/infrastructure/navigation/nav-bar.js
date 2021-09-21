import React, { Component } from "react";
import { Link } from "react-router-dom";


export const  NavBar =(isAuthenticated)=> {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <a className="navbar-brand" href="/home">
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
             <li className="nav-item">
                <Link to="/account" className="nav-link">
                  Login
                </Link>
              </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Administrator
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/dashboard">Dashboard </a></li>
            <li><a class="dropdown-item" href="/account">Login </a></li>
          </ul>
        </li>

        {isAuthenticated &&<li className="nav-item text-right">
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>}

            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  };

