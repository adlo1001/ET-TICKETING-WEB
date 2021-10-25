import { useContext, useState } from 'react';
import { PassengerInfo } from '../passengers-info.component';
import { StationsContext } from '../../services/stations/stations.context';
import YetMatchPage from '../not-yet-match-page';



  export const AllPassengers = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
   
    const {isLoading,passeList} =useContext(StationsContext);
 
    
    return <>
      <div className="">
            <div className="pt-5">
            <div className=" justify-left"><h1>PASSENGERS</h1></div>
            {isLoading&&<YetMatchPage/>}

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