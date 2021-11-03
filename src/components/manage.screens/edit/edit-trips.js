import { useState, useContext } from 'react';
import DatePicker from 'react-date-picker';
import {    BiBus } from "react-icons/bi";


  export const TripsScreen = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
    const [formData, setFormData]=useState(clearData);
    const [error, setError] = useState(null);
    const [toggleForm1, setToggleForm1]=useState(false);
    const [toggleForm2, setToggleForm2]=useState(false);
    return (
      <div>
<button onClick ={()=>setToggleForm1(!toggleForm1)}
      className={`m-2 bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm1? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  ADD TRIP</div>
      </button>{ toggleForm1 &&  

      <div className="flex justify-center">
            <div className="pt-5">
            <div className="flex justify-center"><h1>ADD</h1></div>
            
            <div className="m-1 justify-center border border-dark">
    
      
     
  <h5 className="m-2 text-1xl mb-3" href="#">  
        Boarding Time</h5>
        <DatePicker className="m-2"
      >Boarding Time</DatePicker>
      {
        !!error && <h5 className="text-1xl mb-2 " > {error}</h5>
      }

<h5 className="m-2 text-1xl mb-3" href="#">  
        Arrival Time</h5>
        <DatePicker className="m-2"
      >Arrival Time</DatePicker>
      {
        !!error && <h5 className="text-1xl mb-2 " > {error}</h5>
      }

<div className=" flex justify-center">
              
              <input type="text" name="tripPeriod" id="tripPeriod"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder=" Trip Period eg. 3 hours" />
  </div> 
  <div className=" flex justify-center">
              
              <input type="text" name="numberOfPassenger" id="numberOfPassenger"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Number of Passenger Seat eg. 75" />
  </div> 
        
  <div className=" flex justify-center">
              
              <input type="text" name="refereshmentBegin" id="refereshmentBegin"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Refereshment Begin eg. 11:30" />
  </div> 
        
  <div className=" flex justify-center">
              
              <input type="text" name="refereshmentEnd" id="refereshmentEnd"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Refereshment End eg. 12:00" />
  </div> 
        

  <div className=" flex justify-center">
  <select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option > Trip Status</option>
  <option  selected> TICKETING</option>
  <option > ONBOARING</option>
  <option > FINISHED</option>
  <option > EXTENDED</option>
  <option > CANCELLED</option>
</select>
</div>
</div>


<div className="m-1 justify-center border border-dark">
  <div className="p-2 flex justify-center">
  <select  class=" m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Transportation Id</option></select><p class="m-3"> optional</p></div> 
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
<div className="p-2 flex justify-center">
<p class="p-2 m-2">Smoking allowed ?</p>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="petAllowed" id="petAllowed"/>
  <label class="form-check-label" for="petAllowed">
    Yes
  </label> 
</div>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="petAllowed" id="petNotAllowed" checked/>
  <label class="form-check-label" for="petNotAllowed">
    No
  </label>
</div></div>

<div className="p-2 flex justify-center">
<p class="p-2 m-2">Smoking allowed ?</p>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="smokingAllowed" id="smokingAllowed"/>
  <label class="form-check-label" for="smokingAllowed">
    Yes
  </label> 
</div>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="smokingAllowed" id="smokingNotAllowed" checked/>
  <label class="form-check-label" for="smokingNotAllowed">
    No
  </label>
</div></div>
 


<div className="p-2 flex justify-center">
<p class="p-2 m-2">Drinking allowed ?</p>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="drinkingAllowed" id="drinkingAllowed"/>
  <label class="form-check-label" for="drinkingAllowed">
    Yes
  </label> 
</div>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="drinkingAllowed" id="drinkingNotAllowed" checked/>
  <label class="form-check-label" for="drinkingNotAllowed">
    No
  </label>
</div></div> </div>


<div className="m-1 flex justify-center border border-dark">
      
  
            <div className="pt-5">
            <div className="flex justify-center "><h1>ROUTE</h1></div>
            
            <div className="p-2 flex justify-center">

       
<select  class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>RouteID</option></select><p> optional</p></div> 
      
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

          </div>
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
      className={`m-2 bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm2? 'rounded-t-md':'rounded-md'}`}>
        <div><BiBus className="inline-block align-text-top" />  EDIT TRIP</div>
      </button>{ toggleForm2 &&  

      <div className="flex justify-center">
            <div className="pt-5">
            <div className="flex justify-center"><h1>EDIT</h1></div>
            
            <div className="m-1 justify-center border border-dark">
            <div className="p-2 flex justify-center">

    
<select  class=" m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Trip Id</option></select><p class="m-3"> optional</p></div> 
      
     
  <h5 className="m-2 text-1xl mb-3" href="#">  
        Boarding Time</h5>
        <DatePicker className="m-2"
      >Boarding Time</DatePicker>
      {
        !!error && <h5 className="text-1xl mb-2 " > {error}</h5>
      }

<h5 className="m-2 text-1xl mb-3" href="#">  
        Arrival Time</h5>
        <DatePicker className="m-2"
      >Arrival Time</DatePicker>
      {
        !!error && <h5 className="text-1xl mb-2 " > {error}</h5>
      }

<div className=" flex justify-center">
              
              <input type="text" name="tripPeriod" id="tripPeriod"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder=" Trip Period eg. 3 hours" />
  </div> 
  <div className=" flex justify-center">
              
              <input type="text" name="numberOfPassenger" id="numberOfPassenger"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Number of Passenger Seat eg. 75" />
  </div> 
        
  <div className=" flex justify-center">
              
              <input type="text" name="refereshmentBegin" id="refereshmentBegin"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Refereshment Begin eg. 11:30" />
  </div> 
        
  <div className=" flex justify-center">
              
              <input type="text" name="refereshmentEnd" id="refereshmentEnd"  
                 className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Refereshment End eg. 12:00" />
  </div> 
        

  <div className=" flex justify-center">
  <select  class="m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option > Trip Status</option>
  <option  selected> TICKETING</option>
  <option > ONBOARING</option>
  <option > FINISHED</option>
  <option > EXTENDED</option>
  <option > CANCELLED</option>
</select>
</div>
</div>


<div className="m-1 justify-center border border-dark">
  <div className="p-2 flex justify-center">
  <select  class=" m-2 form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>Transportation Id</option></select><p class="m-3"> optional</p></div> 
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
<div className="p-2 flex justify-center">
<p class="p-2 m-2">Smoking allowed ?</p>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="petAllowed" id="petAllowed"/>
  <label class="form-check-label" for="petAllowed">
    Yes
  </label> 
</div>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="petAllowed" id="petNotAllowed" checked/>
  <label class="form-check-label" for="petNotAllowed">
    No
  </label>
</div></div>

<div className="p-2 flex justify-center">
<p class="p-2 m-2">Smoking allowed ?</p>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="smokingAllowed" id="smokingAllowed"/>
  <label class="form-check-label" for="smokingAllowed">
    Yes
  </label> 
</div>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="smokingAllowed" id="smokingNotAllowed" checked/>
  <label class="form-check-label" for="smokingNotAllowed">
    No
  </label>
</div></div>
 


<div className="p-2 flex justify-center">
<p class="p-2 m-2">Drinking allowed ?</p>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="drinkingAllowed" id="drinkingAllowed"/>
  <label class="form-check-label" for="drinkingAllowed">
    Yes
  </label> 
</div>
<div class="m-2 form-check">
  <input class="form-check-input" type="radio" name="drinkingAllowed" id="drinkingNotAllowed" checked/>
  <label class="form-check-label" for="drinkingNotAllowed">
    No
  </label>
</div></div> </div>


<div className="m-1 flex justify-center border border-dark">
      
  
            <div className="pt-5">
            <div className="flex justify-center "><h1>ROUTE</h1></div>
            
            <div className="p-2 flex justify-center">

       
<select  class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>RouteID</option></select><p> optional</p></div> 
      
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

          </div>
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