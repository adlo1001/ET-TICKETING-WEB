import React, { Component} from "react";
import { useState,useEffect,useContext, useCallback } from "react";
import {NavBar} from "./infrastructure/navigation/nav-bar";
import {HomeScreen} from "./screen/home.screen";
import {AddStation} from "./components/stations.component";
import {StationInfo} from "./components/station-info.component";
import { Route, Switch } from "react-router";
import { Router } from "react-router-dom";
import NoMatchPage from "./components/no-match-page";
import YetMatchPage from "./components/not-yet-match-page";
import history from "./components/history";
import {AddRoute} from "./components/routes.component";
import { AccountScreen } from "./features/account/screens/account.screen";
import { LoginScreen } from "./features/account/screens/login.screen";
import { RegisterScreen } from "./features/account/screens/register.screen";
import { DashboardScreen } from "./screen/dashboard.screen";
import {ManageStationsScreen} from "./components/manage.screens/stations.manage";
import {ManageTicketsScreen} from "./components/manage.screens/tickets.manage";
import {ManageTransportationsScreen} from "./components/manage.screens/transportations.manage";
import {ManageCompaniesScreen} from "./components/manage.screens/companies.manage";
import {ManagePassengersScreen} from "./components/manage.screens/passengers.manage";
import {ManageTripsScreen} from "./components/manage.screens/trips.manage";
import {ManageUsersScreen} from "./components/manage.screens/users.manage";
import {ManageRoutesScreen} from "./components/manage.screens/routes.manage";
import {Stations} from "./screen/details.screen/stations";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {   AuthenticationContextProvider, AuthenticationContext } from "./services/authentication/authentication.context"; 
import Menu from "./Menu";
import { StationsContextProvider } from "./services/stations/stations.context";
import { TripsContextProvider } from "./services/trips/trips.context";




const firebaseConfig = {
  apiKey: "AIzaSyDi8FwgAlI818nyuW-7WMUWa8BfmmiAAVQ",
  authDomain: "et-ticketing-6b08a.firebaseapp.com",
  projectId: "et-ticketing-6b08a",
  storageBucket: "et-ticketing-6b08a.appspot.com",
  messagingSenderId: "552968375475",
  appId: "1:552968375475:web:7fcd30063418bca18eb4c6"

};

initializeApp(firebaseConfig);



export default function App()  {
 
 


    return (
      <Router history={history}>
       
       <StationsContextProvider>
          <TripsContextProvider>
  
           <AuthenticationContextProvider>
        <NavBar/> 
        <Menu/>
        </AuthenticationContextProvider>
        
        </TripsContextProvider>
        </StationsContextProvider>
      </Router>
    );
  }


