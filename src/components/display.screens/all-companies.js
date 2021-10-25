import { useContext, useState } from 'react';
import { StationsContext } from '../../services/stations/stations.context';
import {CompanyInfo} from "../companies-info.component";
import YetMatchPage from '../not-yet-match-page';
  export const AllCompanies = () => {
    const clearData ={
      onboarding:'',
      destination:'',
   
  
  };
    const [formData, setFormData]=useState(clearData);
    const [error, setError] = useState(null);
    const {isLoading,companyList} =useContext(StationsContext);

    return <>
      <div className="">
    
            <div className="pt-5">
            <div className=" justify-left"><h1>TRANSPORATION COMPANIES</h1></div>
            <div className="m-1 justify-center border border-dark">
                           </div>
                           {isLoading&&<YetMatchPage/>}
        <div className="m-1 justify-center border border-dark">
        {companyList.map(company => {
			return (
        <div className="m-1 justify-center border border-dark">
         <CompanyInfo company={company}/>
        </div>
        );	})
        }
           
        </div>
        
          </div>
          </div>
      
      
      
     
    </>
  };