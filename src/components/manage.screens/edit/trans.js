

  export const TransScreen = () => {
 
    return (
      <div className="flex justify-center">
      
  
            <div className="pt-5">
            <div className="flex justify-center"><h1>ADD/EDIT TRANSPORTATIONS</h1></div>
            
            <div className="p-2 flex justify-center">

       
<select  class="form-select form-select-sm mb-5" aria-label=".form-select-sm example">
  <option selected>ID</option></select><p> optional</p></div> 
      
            <div className="p-2 flex justify-center">
            <input type="text" name="vehicle" id="vehicle"  
               className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="" />
</div> 
      
      <div className="p-2 flex justify-center">
<input type="text" name="_plateNumber" id="_plateNumber"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Plat Number eg. AA 67876" />
<input type="text" name="_plateNumber" id="_plateNumber"  
   className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Plat Number eg. AA 67876" />

            <div className="p-2  flex justify-center">

            <input type="text" name="numberSeat" id="numberSeat"  
               className="m-2 pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Number of Seat. eg 70" />
</div> 
       
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
      
      
      
     
    );
  };