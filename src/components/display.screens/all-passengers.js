import { useContext, useState } from 'react';
import { PassengerInfo } from '../passengers-info.component';
import { StationsContext } from '../../services/stations/stations.context';




  export const AllPassengers = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
   
    const {passeList} =useContext(StationsContext);
 
    
    return <>
      <div className="">
            <div className="pt-5">
            <div className=" justify-left"><h1>PASSENGERS</h1></div>
       
          {passeList.map(passe => {
		    	return (
        
        <div className="m-1 justify-center border border-dark">
              <PassengerInfo passe={passe}/>
         
        </div>
        );	})
        }

          </div>
          </div>
      
      
      
     
    </>
  };