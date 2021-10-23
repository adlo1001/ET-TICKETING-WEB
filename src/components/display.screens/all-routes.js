import { useContext, useState } from 'react';
import DatePicker from 'react-date-picker';
import { StationsContext } from '../../services/stations/stations.context';
import {RouteInfo} from "../route-info.component";

  export const AllRoutes = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
    const [formData, setFormData]=useState(clearData);
    const [error, setError] = useState(null);
    const {routeList} =useContext(StationsContext);

    return <>
      <div className="">
    
            <div className="pt-5">
            <div className=" justify-left"><h1>ROUTES</h1></div>
            <div className="m-1 justify-center border border-dark">
                           </div>
			
        <div className="m-1 justify-center border border-dark">
        {routeList.map(_route => {
			return (
        <div className="m-1 justify-center border border-dark">
         <RouteInfo _route={_route}/>
        </div>
        );	})
        }
           
        </div>
        
          </div>
          </div>
      
      
      
     
    </>
  };