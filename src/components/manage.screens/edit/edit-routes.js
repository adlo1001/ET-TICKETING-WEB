import React, {useState,useContext} from "react";
import {    BiBus } from "react-icons/bi";
import { StationsContext } from "../../../services/stations/stations.context";

  export const RoutesScreen = () => {
    const [toggleForm1, setToggleForm1]=useState(false);
    const [toggleForm2, setToggleForm2]=useState(false);
 
    return (
      


<div>

     <button onClick ={()=>setToggleForm1(!toggleForm1)}
      className={`m-2 bg-blue-400 text-white px-2 py-3 w-50 text-left rounded-t-md ${toggleForm1? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  ADD ROUTES</div>
      </button>{ toggleForm1 &&
      <div className="flex justify-center">
      
            <div className="pt-5">
            <div className="flex justify-center"><h1>ADD</h1></div>
            
            <div className="p-2 flex justify-center">
            <input type="text" name="routeName" id="routeName"  
               className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Route Name  e.g. from Addis Ababa to Araba Minch" />
</div> 
      
      <div className="p-2 flex justify-center">
<input type="text" name="routeDescription" id="routeDescription"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Route Description  e.g. from Addis Ababa to Araba Minch via Shashemene, Sodo" />
</div>
            <div className="p-2  flex justify-center">

       
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Initial Station</option>

</select>
<select  class="m-2 form-select form-select-sm  mb-5" aria-label=".form-select-sm example">
  <option selected>Substation one</option>

</select>
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Substation two</option>

</select>
<select  class="m-2 form-select form-select-sm  mb-5" aria-label=".form-select-sm example">
  <option selected>Substation three</option>

</select>
</div>

<div className="p-2 flex justify-center">
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Substation Four </option>
 
</select>
<select  class="m-2 form-select form-select-sm  mb-5" aria-label=".form-select-sm example">
  <option selected>Substation Five</option>
 
</select>
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Final Station</option>

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
      className={`m-2 bg-blue-400 text-white px-2 py-3 w-50 text-left rounded-t-md ${toggleForm2? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  EDIT ROUTES</div>
      </button>{ toggleForm2 &&
      <div  className="flex justify-center">
      
            <div className="pt-5">
            <div className="flex justify-center"><h1>ROUTES</h1></div>
            
            <div className="p-2 flex justify-center">

       
<select  class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>RouteID</option></select><p></p></div> 
      
            <div className="p-2 flex justify-center">
            <input type="text" name="routeName" id="routeName"  
               className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Route Name  e.g. from Addis Ababa to Araba Minch" />
</div> 
      
      <div className="p-2 flex justify-center">
<input type="text" name="routeDescription" id="routeDescription"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Route Description  e.g. from Addis Ababa to Araba Minch via Shashemene, Sodo" />
</div>
            <div className="p-2  flex justify-center">

       
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Initial Station</option>

</select>
<select  class="m-2 form-select form-select-sm  mb-5" aria-label=".form-select-sm example">
  <option selected>Substation one</option>

</select>
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Substation two</option>

</select>
<select  class="m-2 form-select form-select-sm  mb-5" aria-label=".form-select-sm example">
  <option selected>Substation three</option>

</select>
</div>

<div className="p-2 flex justify-center">
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Substation Four </option>
 
</select>
<select  class="m-2 form-select form-select-sm  mb-5" aria-label=".form-select-sm example">
  <option selected>Substation Five</option>
 
</select>
<select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Final Station</option>

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