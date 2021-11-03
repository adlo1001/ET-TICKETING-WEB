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
  const [keyword1, setKeyword1] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [boardingTime, setBoardingTime]=useState(new String(new Date()));
  const [mstations, setMStations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage]=useState(null);
  const [data, setData] = useState([]);
  const [stationList, setStationList]=useState([]);
  const [routeList, setRouteList]=useState([]);
  const [companyList, setCompanyList]=useState([]);
  const [transList, setTransList]=useState([]);
  const [tripList, setTripList]= useState([]);
  const [userList, setUserList]= useState([]);
  const [passeList, setPasseList]= useState([]);
  const [URL]=useState('http://192.168.1.67:8080');


  const onSearch = (searchKeyword,id) => {
    setIsLoading(true);
    if(id===1){setKeyword(searchKeyword);setKeyword1(null);setKeyword2(null)}
    else if(id===2) {setKeyword1(searchKeyword);setKeyword(null);setKeyword2(null)}
    else if (id===3){setKeyword2(searchKeyword);setKeyword(null);setKeyword1(null)}
   

    MStationsRequest(keyword.toLowerCase()||keyword1.toLowerCase()||keyword2.toLowerCase())
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
    fetchStations()
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
   
    const fetchStations=useCallback(()=>{
      fetch(URL+'/stations')
      .then(response =>response.json())
      .then(data=>
        {setStationList(data); setData(data);}).catch((err)=>console.log(err))

        return new Promise((resolve, reject)=>{
          
          if(!stationList) {

            reject("Stations Not Found");
        }
  
        resolve(stationList);
        }
          
          );
    
      },[stationList]);

      const fetchRoutes=useCallback(()=>{
        setIsLoading(true);
        fetch(URL+'/routes')
        .then(response =>response.json())
        .then(data=>
          {setRouteList(data);   setIsLoading(false);}).catch((err)=>console.log(err))
  
          return new Promise((resolve, reject)=>{
            
            if(!routeList) {
  
              reject("Routes Not Found");
          }
    
          resolve(routeList);
          }
            
            );
      
        },[routeList]);

        const fetchCompanies=useCallback(()=>{
          setIsLoading(true);
          fetch(URL+'/company')
          .then(response =>response.json())
          .then(data=>
            {setCompanyList(data);  setIsLoading(false); }).catch((err)=>console.log(err))
    
            return new Promise((resolve, reject)=>{
              
              if(!companyList) {
    
                reject("Companies Not Found");
            }
      
            resolve(companyList);
            }
              
              );
        
          },[companyList]);
          const fetchTransportations=useCallback(()=>{
            setIsLoading(true);
            fetch(URL+'/trans')
            .then(response =>response.json())
            .then(data=>
              {setTransList(data);  setIsLoading(false); }).catch((err)=>console.log(err))
      
              return new Promise((resolve, reject)=>{
                
                if(!transList) {
      
                  reject("Transportations Not Found");
              }
        
              resolve(transList);
              }
                
                );
          
            },[transList]);

            const fetchTrips=useCallback(()=>{
              setIsLoading(true);
              fetch(URL+'/trip/trips')
              .then(response =>response.json())
              .then(data=>
                {setTripList(data);   setIsLoading(false);}).catch((err)=>console.log(err))
        
                return new Promise((resolve, reject)=>{
                  
                  if(!tripList) {
        
                    reject("Transportations Not Found");
                }
          
                resolve(tripList);
                }
                  
                  );
            
              },[tripList]);

              
              
            const fetchUsers=useCallback(()=>{
              setIsLoading(true);
              fetch(URL+'/users')
              .then(response =>response.json())
              .then(data=>
                {setUserList(data);   setIsLoading(false);}).catch((err)=>console.log(err))
        
                return new Promise((resolve, reject)=>{
                  
                  if(!userList) {
        
                    reject("Users Not Found");
                }
          
                resolve(userList);
                }
                  
                  );
            
              },[userList]);

              const fetchPassengers=useCallback(()=>{
                setIsLoading(true);
                fetch(URL+'/passengers')
                .then(response =>response.json())
                .then(data=>
                  {setPasseList(data);  setIsLoading(false); }).catch((err)=>console.log(err))
          
                  return new Promise((resolve, reject)=>{
                    
                    if(!passeList) {
          
                      reject("Passengers Not Found");
                  }
            
                  resolve(passeList);
                  }
                    
                    );
              
                },[passeList]);


                const addStation=(__station)=>{
               const  _station={id:0, stationName:"Dessie", city:"Dessie",region:"Amhara",subcity:"",description:"Dessie", Province:"Wollo"};
                  fetch(URL+'/stations/', 
                  {  method: 'POST',  
                     headers: {    Accept: 'application/json',    'Content-Type': 'application/json' 
                     //,'Access-Control-Allow-Origin':'*'
                     ,'Access-Control-Allow-Methods':'DELETE, POST, GET'
                     //'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
                    },  
                     body: JSON.stringify({    
                     "stationName": _station[1],
                     "city": _station[2],
                     "region": _station[3],
                     "subcity": _station[4],
                     "description": _station[5],
                     "province": _station[6],
                        })}).then((response)=>setMessage(response)).catch((error)=>setError(error));
                   
                        return new Promise((resolve, reject)=>{
                          if(!message) {
                     
                                 reject("Error - Stations not Save");
                             }
                       
                             //resolve(response);
                             })
              
                           

                        
                      }
    
  
      useEffect(()=>{
        fetchPassengers();
      },[]);

      useEffect(()=>{
        fetchUsers();
      },[]);


      useEffect(()=>{
        fetchTrips();
      },[]);

      useEffect(()=>{
        fetchTransportations();
      },[]);

      useEffect(()=>{
        fetchCompanies();
      },[]);


      useEffect(()=>{
        fetchStations();
      },[]);

      useEffect(()=>{
        fetchRoutes();
      },[]);
  return (
    <StationsContext.Provider
      value={{
        URL,
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
        onStationAdd:addStation,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
};
