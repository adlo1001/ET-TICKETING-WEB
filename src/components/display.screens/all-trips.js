import { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { TripsContext } from '../../services/trips/trips.context';
import { TripsInfo } from '../trips-info.component';
import { StationsContext } from '../../services/stations/stations.context';




  export const AllTrips = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
   
    const {tripList} =useContext(StationsContext);
 
    
    return <>
      <div className="">
            <div className="pt-5">
            <div className=" justify-left"><h1>TRIPS</h1></div>
       
          {tripList.map(trip => {
		    	return (
        
        <div className="m-1 justify-center border border-dark">
              <TripsInfo trip={trip}/>
         
        </div>
        );	})
        }

          </div>
          </div>
      
      
      
     
    </>
  };