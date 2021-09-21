import React, { useState, useContext } from "react";


  export const RegisterScreen = ({onSendUser}) => {
    const clearData ={
      email:'',
      password:'',
      repeat_password:'',
  
  };
  const formDataPublish =()=>{
    const userInfo ={
  
    email: formData.email,
    password:formData.password,
    repeat_password:formData.repeat_password
    }
    onSendUser(userInfo);
  
  }
    const [formData, setFormData]=useState(clearData);
    return (
      <div className="flex justify-center">

        
     
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
      <h1>Account Screen</h1>
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
               </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Email:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="email" id="aptDate"
               onChange={(event)=>{setFormData({...formData, email:event.target.value})}}
               value={formData.email}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Password:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="password" name="password" id="password"
               onChange={(event)=>{setFormData({...formData, password:event.target.value})}}
               value={formData.password}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Repeat Password:
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input type="password" name="repeat_password" id="repeat_password"
               onChange={(event)=>{setFormData({...formData, repeat_password:event.target.value})}}
               value={formData.repeat_password}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
  
            <div className="pt-5">
            <div className="flex justify-end">
              <button type="submit"  onClick={()=>{formDataPublish()}}className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
          </div>
          </div>
      
      
      
      </div>
    );
  };