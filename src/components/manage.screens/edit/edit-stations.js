import {    BiBus } from "react-icons/bi";
import { useContext, useState } from "react";
import { StationsContext } from "../../../services/stations/stations.context";


export const AddStation = ({lastId}) => {
  const{onStationAdd}= useContext(StationsContext);

    const clearData ={
      id:0,
        stationName:'',
        city:'',
        subcity:'',
        region:'',
        provice:'',
        description:''
        

    };
    const [toggleForm1, setToggleForm1]=useState(false);
    const [toggleForm2, setToggleForm2]=useState(false);
    const [formData, setFormData]=useState(clearData);

    const formDataPublish =()=>{
  
        const stationInfo ={
       // id:lastId +1,
        id:formData.id,
        stationName: formData.stationName,
        city:formData.city,
        subcity:formData.subcity,
        region:formData.region,
        provice:formData.provice,
        description:formData.description
        }

      setTimeout(()=>{
        //console.log(formData);
        onStationAdd(stationInfo);
        setToggleForm1(!toggleForm1);
        
       
    
      },1000);


 
    }
   
  return (
    <div>
    <div className="m-3">
      <button onClick ={()=>setToggleForm1(!toggleForm1)}
      className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm1? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  Add Station</div>
      </button>{ toggleForm1 &&
      <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="stationName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Station Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="stationName" id="stationName"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            City
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="city" id="city"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="subcity" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Subcity
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="subcity" id="subcity"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="province" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Province
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="province" id="province"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Region
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="region" id="region"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
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
    
    <div className="m-3">
      <button onClick ={()=>setToggleForm2(!toggleForm2)}
      className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm2? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  Edit Station</div>
      </button>{ toggleForm2 &&
      <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="stationName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Station Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="stationName" id="stationName"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            City
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="city" id="city"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>


        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="subcity" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Subcity
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="subcity" id="subcity"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="province" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Province
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="province" id="province"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="region" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Region
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input type="text" name="region" id="region"
              className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
          <label htmlFor="aptNotes" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
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
    </div>
  )
}

export default AddStation