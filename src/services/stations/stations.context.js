import {MStationsRequest,MStationsRequest2, MStationsTransform} from "./stations.service";
import React,{useEffect,useCallback} from "react";
import {
  useState,
  createContext,
  useMemo
} from "react";


export const StationsContext = createContext();

export const StationsContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Arba Minch");
  const [keyword1, setKeyword1] = useState("station1");
  const [keyword2, setKeyword2] = useState("station2");
  const [boardingTime, setBoardingTime]=useState(new String(new Date()));
  const [mstations, setMStations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [stationList, setStationList]=useState([]);
  const [routeList, setRouteList]=useState([]);
  const [companyList, setCompanyList]=useState([]);
  const [transList, setTransList]=useState([]);
  const [tripList, setTripList]= useState([]);
  const [userList, setUserList]= useState([]);
  const [passeList, setPasseList]= useState([]);


  const onSearch = (searchKeyword,id) => {
    setIsLoading(true);
    if(id==1){setKeyword(searchKeyword);setKeyword1(null);setKeyword2(null)}
    else if(id==2) {setKeyword1(searchKeyword);setKeyword(null);setKeyword2(null)}
    else if (id==3){setKeyword2(searchKeyword);setKeyword(null);setKeyword1(null)}
   

    MStationsRequest(keyword&&keyword.toLowerCase()||keyword1&&keyword1.toLowerCase()||keyword2&&keyword2.toLowerCase())
      .then((result) => {
        setIsLoading(false);
        setMStations(result);   
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
   
       
  };

  const onType = () =>  {
    fetchData()
      .then((result) => {
        setStationList(result);
      
      })
      .catch((err) => {
        console.log(err);
      });
   
       
  };

  const onChooseTime = (_time) =>  {
  setBoardingTime(_time); 
  };
   
    const fetchData=useCallback(()=>{
      fetch('http://192.168.1.67:8080/stations')
      .then(response =>response.json())
      .then(data=>
        {setStationList(data); setData(data);}).catch((err)=>console.log(err))

        return new Promise((resolve, reject)=>{
          
          if(!data) {

            reject("Stations Not Found");
        }
  
        resolve(data);
        }
          
          );
    
      },[]);

      const fetchRoutes=useCallback(()=>{
        fetch('http://192.168.1.67:8080/routes')
        .then(response =>response.json())
        .then(data=>
          {setRouteList(data); }).catch((err)=>console.log(err))
  
          return new Promise((resolve, reject)=>{
            
            if(!data) {
  
              reject("Routes Not Found");
          }
    
          resolve(data);
          }
            
            );
      
        },[]);

        const fetchCompanies=useCallback(()=>{
          fetch('http://192.168.1.67:8080/company')
          .then(response =>response.json())
          .then(data=>
            {setCompanyList(data); }).catch((err)=>console.log(err))
    
            return new Promise((resolve, reject)=>{
              
              if(!data) {
    
                reject("Companies Not Found");
            }
      
            resolve(data);
            }
              
              );
        
          },[]);
          const fetchTransportataions=useCallback(()=>{
            fetch('http://192.168.1.67:8080/trans')
            .then(response =>response.json())
            .then(data=>
              {setTransList(data); }).catch((err)=>console.log(err))
      
              return new Promise((resolve, reject)=>{
                
                if(!data) {
      
                  reject("Transportations Not Found");
              }
        
              resolve(data);
              }
                
                );
          
            },[]);

            const fetchTrips=useCallback(()=>{
              fetch('http://192.168.1.67:8080/trip/trips')
              .then(response =>response.json())
              .then(data=>
                {setTripList(data); }).catch((err)=>console.log(err))
        
                return new Promise((resolve, reject)=>{
                  
                  if(!data) {
        
                    reject("Transportations Not Found");
                }
          
                resolve(data);
                }
                  
                  );
            
              },[]);

              
              
            const fetchUsers=useCallback(()=>{
              fetch('http://192.168.1.67:8080/users')
              .then(response =>response.json())
              .then(data=>
                {setUserList(data); }).catch((err)=>console.log(err))
        
                return new Promise((resolve, reject)=>{
                  
                  if(!data) {
        
                    reject("Users Not Found");
                }
          
                resolve(data);
                }
                  
                  );
            
              },[]);

              const fetchPassengers=useCallback(()=>{
                fetch('http://192.168.1.67:8080/passengers')
                .then(response =>response.json())
                .then(data=>
                  {setPasseList(data); }).catch((err)=>console.log(err))
          
                  return new Promise((resolve, reject)=>{
                    
                    if(!data) {
          
                      reject("Passengers Not Found");
                  }
            
                  resolve(data);
                  }
                    
                    );
              
                },[]);
    
  
      useEffect(()=>{fetchData(); 
        fetchRoutes();
        fetchCompanies();
        fetchTransportataions();
        fetchTrips();
        fetchUsers();
        fetchPassengers();
      },[]);
  return (
    <StationsContext.Provider
      value={{
        mstations,
        isLoading,
        error,
        search: onSearch,
        chooseTime:onChooseTime,
        boardingTime,
        keyword,
        keyword1,
        keyword2,
        type: onType,
        stationList,
        routeList,
        companyList,
        transList,
        tripList,
        userList,
        passeList,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
};
