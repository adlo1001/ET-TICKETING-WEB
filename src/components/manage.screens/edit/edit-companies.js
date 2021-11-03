import {    BiBus } from "react-icons/bi";
import { useContext, useState } from "react";
import { StationsContext } from "../../../services/stations/stations.context";

  export const CompanyScreen = () => {
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


    return (
<div>
      <button onClick ={()=>setToggleForm1(!toggleForm1)}
      className={`m-1 bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm1? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  ADD BUS COMPANY</div>
      </button>{ toggleForm1 &&
      <div className="flex justify-center">
      
  
            <div className="pt-5">
            <div className="flex justify-center"><h1>ADD</h1></div>
            
      
            <div className=" flex justify-center">
            <input type="text" name="vehicle" id="vehicle"  
               className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Vehicle Type eg. Bus" />
</div> 
      
      <div className=" flex justify-center">
<input type="text" name="_plateNumber" id="_plateNumber"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Plate Number eg. AA 67876" />
<input type="text" name="numberOfSeat" id="numberOfSeat"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Number of Seat eg. 70" />







</div>

<div className=" flex justify-center">



<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option > Mode of Transportation</option>
  <option  selected> BUS</option>
  <option > MINIBUS</option>
  <option > TRAIN</option>
  <option > PICKUP</option>
  <option > SUV</option>
  <option > SEDAN</option>
  <option > SMALL CAR</option>
</select>

<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option > Company Name</option>
  <option  selected> SELAM BUS</option>
  <option > ABAY BUS</option>
  <option > ODA BUS</option>
  <option > GOLDEN BUS</option>
  <option > ZEMEN BUS</option>
  <option > WALIA BUS</option>
  <option > ETHIO BUS</option>
</select>

</div>


          

       
          <div className="flex ">
              <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
            
          </div>
          </div>
      
      
  }
  
  <button onClick ={()=>setToggleForm2(!toggleForm2)}
      className={`m-1 bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm2? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  EDIT BUS COMPANY</div>
      </button>{ toggleForm2 &&
      <div className="flex justify-center">
      
  
            <div className="pt-5">
            <div className="flex justify-center"><h1>EDIT</h1></div>
            
            <div className="p-2 flex justify-center">
<select  class=" m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>ID</option></select></div> 
      
            <div className=" flex justify-center">
            <input type="text" name="vehicle" id="vehicle"  
               className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Vehicle Type eg. Bus" />
</div> 
      
      <div className=" flex justify-center">
<input type="text" name="_plateNumber" id="_plateNumber"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Plate Number eg. AA 67876" />
<input type="text" name="numberOfSeat" id="numberOfSeat"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Number of Seat eg. 70" />







</div>

<div className=" flex justify-center">



<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option > Mode of Transportation</option>
  <option  selected> BUS</option>
  <option > MINIBUS</option>
  <option > TRAIN</option>
  <option > PICKUP</option>
  <option > SUV</option>
  <option > SEDAN</option>
  <option > SMALL CAR</option>
</select>

<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option > Company Name</option>
  <option  selected> SELAM BUS</option>
  <option > ABAY BUS</option>
  <option > ODA BUS</option>
  <option > GOLDEN BUS</option>
  <option > ZEMEN BUS</option>
  <option > WALIA BUS</option>
  <option > ETHIO BUS</option>
</select>

</div>




          

       
          <div className="flex ">
              <button type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
            
          </div>
          </div>
      
      
  }

  </div>
     
    );
  };