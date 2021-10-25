import { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { TripsContext } from '../../services/trips/trips.context';
import { UserInfo } from '../users-info.component';
import { StationsContext } from '../../services/stations/stations.context';
import YetMatchPage from '../not-yet-match-page';



  export const AllUsers = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
   
    const {isLoading,userList} =useContext(StationsContext);

    
    return <>
      <div className="">
            <div className="pt-5">
            <div className=" justify-left"><h1>USERS</h1></div>
            {isLoading&&<YetMatchPage/>}
          {userList.map(user => {
		    	return (
        
        <div className="m-1 justify-center border border-dark">
              <UserInfo user={user}/>
         
        </div>
        );	})
        }
          </div>
          </div>
      
      
      
     
    </>
  };