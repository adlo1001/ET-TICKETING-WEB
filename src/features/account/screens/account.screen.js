import React, { useState, useContext } from "react";
import { LoginScreen } from "./login.screen";
import { RegisterScreen } from "./register.screen";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import ActivityIndicator from 'react-activity-indicator';
  export const AccountScreen = () => {
    const { user, isAuthenticated, isLoading } = useContext(AuthenticationContext);
    return (

      <div className="flex justify-center">
      {!isLoading? 
      (
            <div className="pt-5">
            <div className="flex justify-center"><h1>WELCOME TO ET-TICKETING</h1></div>
             {  !isAuthenticated ? (
            <div className="flex justify-center">
            <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/login">
        
            Login     
          </a></div>):
          (
            <div className="flex justify-center">
            <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/dashboard">
        
            Login     
          </a></div>)}

          <br/>
          <div className="flex justify-center">
          <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/register">
            Register
          </a>
          </div>
          </div>
          ):
          (<ActivityIndicator number={10} duration={200} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={25} />) 
          }
          </div>
      
      
      
     
    );
  };