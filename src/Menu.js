import React, { Component} from "react";
import { useState,useEffect,useContext, useCallback } from "react";
import {NavBar} from "./infrastructure/navigation/nav-bar";
import {HomeScreen} from "./screen/home.screen";
//import {AddStation} from "./components/stations.component";
import {AddStation} from "./components/manage.screens/edit/edit-stations";
import {StationInfo} from "./components/station-info.component";
import { Redirect, Route, Switch } from "react-router";
import NoMatchPage from "./components/no-match-page";
import YetMatchPage from "./components/not-yet-match-page";
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
import { RoutesScreen } from "./components/manage.screens/edit/edit-routes";
import { TransScreen } from "./components/manage.screens/edit/edit-trans";
import { TripsScreen } from "./components/manage.screens/edit/edit-trips";
import { TicketsScreen } from "./components/manage.screens/edit/edit-tickets";
import { CompanyScreen } from "./components/manage.screens/edit/edit-companies";
import { AllTickets } from "./components/display.screens/all-tickets";
import { AllStations } from "./components/display.screens/all-stations";
import { AllRoutes } from "./components/display.screens/all-routes";
import { AllCompanies, ALLCompanies } from "./components/display.screens/all-companies";
import { AllTrans } from "./components/display.screens/all-trans";
import {AllTrips} from "./components/display.screens/all-trips";
import { AllUsers } from "./components/display.screens/all-users";
import { AllPassengers } from "./components/display.screens/all-passengers";
import { Tickets } from "./components/display.screens/tickets";


export default function Menu()  {
  const { isAuthenticated,onLogout, error, isLoading } = useContext(AuthenticationContext);

    return (
        <div className="container-fluid">
          <Switch>
          {!isAuthenticated &&<Route path="/login" exact component={LoginScreen}/>}
            <Route path="/register" exact component={RegisterScreen}/>
            <Route path="/account" exact component={AccountScreen}/>
            {isAuthenticated &&<Route path="/dashboard" exact component={DashboardScreen}/>}
            <Route path="/home" exact component={HomeScreen} />
            <Route path="/" exact component={HomeScreen} />

            {/*EACH TASKS */}
            <Route path="/editstations" exact component={AddStation} />
            {/*<Route path="/allstations" exact component={Stations} />*/}

            {isAuthenticated&&<Route path="/editroutes" exact component={RoutesScreen} />}
            {isAuthenticated&&<Route path="/editstations" exact component={AddStation} />}
            {isAuthenticated&&<Route path="/edittransporations" exact component={TransScreen} />}
            {isAuthenticated&&<Route path="/edittrips" exact component={TripsScreen} />}
            {isAuthenticated&&<Route path="/edittickets" exact component={TicketsScreen} />}
            {isAuthenticated&& <Route path="/editcompanies" exact component={CompanyScreen} />}
           


           {/*DISPLAY */}
            {isAuthenticated&&<Route path="/alltickets" exact component={AllTickets} />}
            {isAuthenticated&&<Route path="/tickets" exact component={Tickets} />}
            {isAuthenticated&&<Route path="/alltrips" exact component={AllTrips} />}
            {isAuthenticated&&<Route path="/allstations" exact component={AllStations} />}
            {isAuthenticated&&<Route path="/allroutes" exact component={AllRoutes} />}
            {isAuthenticated&&<Route path="/allcompanies" exact component={AllCompanies } />}
            {isAuthenticated&&<Route path="/alltransporations" exact component={AllTrans } />   } 
            {isAuthenticated&&<Route path="/allusers" exact component={AllUsers } /> }
            {isAuthenticated&&<Route path="/allpassengers" exact component={AllPassengers } />  }
       
            {/*MANAGE */}
            {isAuthenticated&&<Route path="/managestations" exact component={ManageStationsScreen} />}
            {isAuthenticated&&<Route path="/managetickets" exact component={ManageTicketsScreen} />}
            {isAuthenticated&&<Route path="/managetransportations" exact component={ManageTransportationsScreen} />}
            {isAuthenticated&&<Route path="/manageTrips" exact component={ManageTripsScreen} />}
            {isAuthenticated&&<Route path="/manageUsers" exact component={ManageUsersScreen} />}
            {isAuthenticated&&<Route path="/managecompanies" exact component={ManageCompaniesScreen} />}
            {isAuthenticated&&<Route path="/managepassengers" exact component={ManagePassengersScreen} />}
            {isAuthenticated&&<Route path="/manageroutes" exact component={ManageRoutesScreen} />}
            {(<Route path="*" component={YetMatchPage}/> )}
            {!isLoading&&<Route path="*" component={YetMatchPage} />}
           
          </Switch>
        </div>

    );
  }


