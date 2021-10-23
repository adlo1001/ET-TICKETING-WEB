import { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { StationsContext } from '../../services/stations/stations.context';
import {TransportationInfo} from "../trans-info.component";

  export const AllTrans = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
    const {transList} =useContext(StationsContext);
    
    return <>
      <div className="">
    
            <div className="pt-5">
            <div className=" justify-left"><h1>TRANSPORATION</h1></div>
            <div className="m-1 justify-center border border-dark">
                           </div>
			
        <div className="m-1 justify-center border border-dark">
        {transList.map(_trans => {
			return (
        <div className="m-1 justify-center border border-dark">
         <TransportationInfo _trans={_trans}/>
        </div>
        );	})
        }
           
        </div>
        
          </div>
          </div>
      
      
      
     
    </>
  };