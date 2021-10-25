import { useContext } from 'react';
import { TripsInfo } from '../trips-info.component';
import { StationsContext } from '../../services/stations/stations.context';
import YetMatchPage from '../not-yet-match-page';




  export const AllTrips = () => {
   
    const {isLoading,tripList} =useContext(StationsContext);
  
    
 
    
    return <>
      <div className="">
            <div className="pt-5">
            <div className=" justify-left"><h1>TRIPS</h1></div>
            {isLoading&&<YetMatchPage/>}
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