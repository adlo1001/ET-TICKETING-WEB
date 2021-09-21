import {    BiBus } from "react-icons/bi";
import { useState } from "react";

export const AddRoute = ({onSendRoute, lastId}) => {
    const clearData ={
      routeName:'',
      description:'',
        initialStation:'',
        finalStation:'',
        subStation1:'',
        subStation2:'',
        subStation3:'',
        subStation4:'',
        subStation5:'',

    };
    const [toggleForm, setToggleForm]=useState(false);
    const [formData, setFormData]=useState(clearData);

    const formDataPublish =()=>{
        const routeInfo ={
          routeName: formData.routeName,
          description:formData.description,
          initialStation:formData.initialStation,
          finalStation:formData.finalStation,
          subStation1:formData.subStation1,
          subStation2:formData.subStation2,
          subStation3:formData.subStation3,
          subStation4:formData.subStation4,
          subStation5:formData.subStation5,
        }
        onSendRoute(routeInfo);
        setToggleForm(!toggleForm);
    }
   
  return (
    <div>
      <button onClick ={()=>setToggleForm(!toggleForm)}
      className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  Add Route</div>
      </button>{ toggleForm &&
      <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="routeName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Route Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="routeName" id="routeName"
            onChange={(event)=>{setFormData({...formData, routeName:event.target.value})}}
            value={formData.routeName}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="inititialStation" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Initial Station
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="inititialStation" id="inititialStation"
             onChange={(event)=>{setFormData({...formData, inititialStation:event.target.value})}}
             value={formData.inititialStation}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="finalStation" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Final Station
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="finalStation" id="finalStation"
             onChange={(event)=>{setFormData({...formData, finalStation:event.target.value})}}
             value={formData.finalStation}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="subStation1" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Sub Station 1
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="subStation1" id="subStation1"
             onChange={(event)=>{setFormData({...formData, subStation1:event.target.value})}}
             value={formData.subStation1}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="subStation1" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Sub Station 2
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="subStation2" id="subStation2"
             onChange={(event)=>{setFormData({...formData, subStation2:event.target.value})}}
             value={formData.subStation2}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="subStation1" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Sub Station 3
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="subStation3" id="subStation3"
             onChange={(event)=>{setFormData({...formData, subStation3:event.target.value})}}
             value={formData.subStation3}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="subStation1" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Sub Station 4 
          </label>
          <div className="mt-1 sm:mt-0 m:col-span-2">
            <input type="text" name="subStation4" id="subStation4"
             onChange={(event)=>{setFormData({...formData, subStation4:event.target.value})}}
             value={formData.subStation4}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 5m:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="subStation1" className="block text-sm font-5edium text-gray-700 sm:mt-px sm:pt-2">
            Sub Station 5
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="subStation5" id="subStation5"
             onChange={(event)=>{setFormData({...formData, subStation5:event.target.value})}}
             value={formData.subStation5}
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Description
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <textarea id="description" name="description" rows="3"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Detailed comments about the condition"></textarea>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button type="submit"  onClick={()=>{formDataPublish()}}className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
              Submit
            </button>
          </div>
        </div>
      </div>}
    </div>
  )
}
