import { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { TripsContext } from '../../services/trips/trips.context';
import { TicketsInfo } from '../tickets-info.component';
import YetMatchPage from "../not-yet-match-page";
import {AuthenticationContext} from "../../services/authentication/authentication.context"




  export const AllTickets = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
    const [formData, setFormData]=useState(clearData);
    const [error, setError] = useState(null);
    const {isLoading,trips, onTripsSearch} =useContext(TripsContext);
    
 
   
    return <>
      <div className="">
    
            <div className="pt-5">
            <div className=" justify-left"><h1>TICKETS</h1></div>
            {isLoading&&<YetMatchPage/>}
          {trips.map(trip => {
		    	return (
        
        <div className="m-1 justify-center border border-dark">
              <TicketsInfo ticket={trip}/>
         
        </div>
        );	})
        }

          </div>
          </div>
      
      
      
     
    </>
  };