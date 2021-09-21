import React, { Component } from "react";
import NavBar from "./infrastructure/navigation/nav-bar";
import {HomeScreen} from "./screen/home.screen";
import {AddStation} from "./components/stations.component";
import {StationInfo} from "./components/station-info.component";
import { Route, Switch } from "react-router";
import { Router } from "react-router-dom";
import NoMatchPage from "./components/no-match-page"
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
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <Router history={history}>
        <NavBar/> 
        <div className="container-fluid">
          <Switch>
            <Route path="/login" exact component={LoginScreen}/>
            <Route path="/register" exact component={RegisterScreen}/>
            <Route path="/account" exact component={AccountScreen}/>
            <Route path="/dashboard" exact component={DashboardScreen}/>
            <Route path="/home" exact component={HomeScreen} />

            {/*EACH TASKS */}
            <Route path="/editstations" exact component={AddStation} />
            <Route path="/allstations" exact component={Stations} />

            <Route path="/editroutes" exact component={AddRoute} />
            <Route path="/editstations" exact component={AddStation} />



            {/*MANAGE */}
            <Route path="/managestations" exact component={ManageStationsScreen} />
            <Route path="/managetickets" exact component={ManageTicketsScreen} />
            <Route path="/managetransportations" exact component={ManageTransportationsScreen} />
            <Route path="/manageTrips" exact component={ManageTripsScreen} />
            <Route path="/manageUsers" exact component={ManageUsersScreen} />
            <Route path="/managecompanies" exact component={ManageCompaniesScreen} />
            <Route path="/managepassengers" exact component={ManagePassengersScreen} />
            <Route path="/manageroutes" exact component={ManageRoutesScreen} />
            <Route path="*" component={NoMatchPage} />
          </Switch>
        </div>
      </Router>
    );
  }

  //This method can be called by child components to update isLoggedIn property of the state
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}
