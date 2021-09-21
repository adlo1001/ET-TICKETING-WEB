import { useState,useEffect, useCallback } from "react";
import { BiCalendar} from "react-icons/bi"
import {    BiBus } from "react-icons/bi";
import {Search2,Search3} from "../components/search.component-2";
import { StationInfo } from "../components/station-info.component";
import {AddStation} from "../components/stations.component";


export const HomeScreen=({onSendUser})=> {
  const [stationList, setStationList]=useState([]);
  const [onboaridngQuery, setOnboardingQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [onboaridng, setOnboarding] = useState("");
  const [destination, setDestination] = useState("");
  
  const clearData ={
    onboarding:'',
    destination:'',
 

};
const formDataPublish =()=>{
  const tripInfo ={

  onboarding: formData.onboarding,
  destination:formData.destination,

  }
  onSendUser(tripInfo);

}
  const [formData, setFormData]=useState(clearData);

  const filteredStations1 = stationList.filter(
    item => {
      return (
        item.stationName.toLowerCase().includes(onboaridngQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(onboaridngQuery.toLowerCase()) ||
        item.subcity.toLowerCase().includes(onboaridngQuery.toLowerCase())
      )
    }
  )
  const filteredStations2 = stationList.filter(
    item => {
      return (
        item.stationName.toLowerCase().includes(destinationQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(destinationQuery.toLowerCase()) ||
        item.subcity.toLowerCase().includes(destinationQuery.toLowerCase())
      )
    }
  )

  const fetchData=useCallback(()=>{
  fetch('./stations.json')
  .then(response =>response.json())
  .then(data=>
    {setStationList(data)})

  },[]);

  useEffect(()=>{fetchData()},[fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">  
        <BiBus className="inline-block text-red-400 align-top" />Bus Trips</h1>
        <h5 className="text-1xl mb-3">
        Book Ticket</h5>
      <Search2 query={onboaridngQuery} onQueryChange={(myquery1)=>{setOnboardingQuery(myquery1);setOnboarding(myquery1[0])}}/>
      <Search3 query={destinationQuery} onQueryChange={(myquery2)=>setDestinationQuery(myquery2)}/>

      <div className="pt-5">
            <div className="flex justify-end">
              <button type="submit"  onClick={()=>{formDataPublish()}}className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-400 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                Submit
              </button>
            </div>
          </div>

      <ul className="divide-y divide-gray-200">
        {filteredStations1
          .map(station => (
            <StationInfo key={station.id}
              station={station}
              onDeleteStation={
                stationId =>
                setStationList(stationList.filter(station=>
                  station.id !== stationId ))}
            />
          ))
        }
      </ul>
      <ul className="divide-y divide-gray-200">
        {filteredStations2
          .map(station => (
            <StationInfo key={station.id}
              station={station}
              onDeleteStation={
                stationId =>
                setStationList(stationList.filter(station=>
                  station.id !== stationId ))}
            />
          ))
        }
      </ul>

    </div>
  );
}

