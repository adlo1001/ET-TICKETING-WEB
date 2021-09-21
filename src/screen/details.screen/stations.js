import { useState,useEffect, useCallback } from "react";
import { BiCalendar} from "react-icons/bi"
import {    BiBus } from "react-icons/bi";
import Search from "../../components/search.component";
import { StationInfo } from "../../components/station-info.component";
import {AddStation} from "../../components/stations.component";


export const Stations=()=> {
  const [stationList, setStationList]=useState([]);
  const [query, setQuery] = useState("");


  const filteredStations = stationList.filter(
    item => {
      return (
        item.stationName.toLowerCase().includes(query.toLowerCase()) ||
        item.city.toLowerCase().includes(query.toLowerCase()) ||
        item.subcity.toLowerCase().includes(query.toLowerCase())||
        item.region.toLowerCase().includes(query.toLowerCase())
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
        <BiBus className="inline-block text-red-400 align-top" />Bus Stations</h1>
      <AddStation  
      onSendStation={myStation=>setStationList([...stationList,myStation])}
      lastId={stationList.reduce((max, item)=>Number(item.id)>max ?Number(item.id):max,0)}
      />
      <Search query={query} onQueryChange={(myquery)=>setQuery(myquery)}/>
      <ul className="divide-y divide-gray-200">
        {filteredStations
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

