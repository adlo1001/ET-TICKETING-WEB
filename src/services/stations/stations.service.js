import { stations } from "../stations/statations.mock";
import camelize from "camelize";
import { useState,useCallback } from "react";


export const MStationsRequest=(searchTerm)=>{
   
    return new Promise((resolve, reject)=>{
      const stationMock= stations[searchTerm];

        if(!stations) {
            reject("Not Found");
        }
        resolve(stations);

    });   

};

export const MStationsRequest2=()=>{
    const[data, setData] = useState(null);
    const[err,setErr] = useState();
  const fetchdata=useCallback(()=>{
    fetch('http://192.168.1.67:8080/stations')
    .then(response =>response.json())
    .then(data=>
      {setData(data)}).catch((error)=>setErr(error));

      return new Promise((resolve, reject)=>
      {
       if(!data) 
       reject("Stations not found");
       resolve(data);

      });
  
    },[data]);
   
  return new Promise((resolve, reject)=>{

      if(!data) {
          reject("Not Found");
      }

      resolve(data);

  });   

};





