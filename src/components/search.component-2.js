import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi"
import { useState } from 'react';


export const Search2 = ({ query,val, onQueryChange }) => {
  const [val1, setVal1]=useState(val);
  return (
    <div className="py-1">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query1" className="sr-only" />
        </div>
        <input type="text" name="query1" id="query1"  value={query}
          onChange={(event) =>  {onQueryChange(event.target.value);} }
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search for onbaording Station/city. for example. Meskel Square" />
        
      </div>
      
      {!!val&&<div><b className="font-bold text-blue-500">Boarinding Station:</b> {val}</div>}
    </div>
  )
}


export const Search3 = ({ query, val, onQueryChange }) => {

  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch />
          <label htmlFor="query2" className="sr-only" />
        </div>
        <input type="text" name="query2" id="query2" value={query}
          onChange={(event) =>  {onQueryChange(event.target.value)} }
          className="pl-8 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300" placeholder="Search for Destination Station. for example. Hawassa" />
      </div>
      {!!val&&<div><b className="font-bold text-blue-500">Destination Station:</b> {val}</div>}
    </div>
  )
}
