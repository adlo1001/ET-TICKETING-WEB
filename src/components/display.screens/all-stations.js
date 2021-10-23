import { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { StationsContext } from '../../services/stations/stations.context';
import {StationInfo} from "../station-info.component";

  export const AllStations = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
    const [formData, setFormData]=useState(clearData);
    const [error, setError] = useState(null);
    const {stationList} =useContext(StationsContext);
 

    
    return <>
      <div className="">
    
            <div className="pt-5">
            <div className=" justify-left"><h1>STATIONS</h1></div>
            <div className="m-1 justify-center border border-dark">
                           </div>
			
        <div className="m-1 justify-center border border-dark">
        {stationList.map(station => {
			return (
        <div className="m-1 justify-center border border-dark">
         <StationInfo station={station}/>
        </div>
        );	})
        }
           
        </div>
        
          </div>
          </div>
      
      
      
     
    </>
  };