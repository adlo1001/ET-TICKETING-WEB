import React from "react";
import {
  useState,
  createContext,
  useCallback,
  useContext,
  useEffect
} from "react"; 
import { StationsContext } from "../stations/stations.context";


export const TripsContext = createContext();

export const TripsContextProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [alltrips, setAllTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const mstations = useContext(StationsContext);
  const[data, setData] = useState(null);
  const[allData, setAllData] = useState(null);
  //const [boarding, setBoarding]=useState("2021-10-18 15:00:00");
  const {boardingTime, keyword1, keyword2 } = useContext(StationsContext);
  const [initial, setInitial]=useState(keyword1);
  const [final_, setFinal_]=useState(keyword2);
  
  const retrieveStations = (mstat) => {
    setIsLoading(true);
    //setTrips(null);
    setTimeout(() => {
        //if(initial!=null && final_!=null)
        //tripsRequest(initial,final_, boardingTime)
        allTripsRequest2();
    }, 2000);
  
  };
  useEffect(() => {
    setInitial(keyword1);
    setFinal_(keyword2);
    retrieveStations(mstations.keyword);
  }, [mstations]);


    const tripsRequest=useCallback((_initial,_final,boardingTime)=>{
      fetch('http://192.168.1.67:8080/ticketsQuery/?_initial='+ _initial +'&_boarding_time='+boardingTime+'&_final='+_final)
        .then(response =>response.json())
      .then(data=>
        {
      setIsLoading(false);
      setData(data);
      if(data!="")setTrips(data);
      
    })
      .catch((error)=>{setError(error);});
      
    
      },[]);
    

 
   const allTripsRequest=useCallback(()=>{
    fetch('http://192.168.1.67:8080/tickets')
   .then(response =>response.json())
    .then(_data=>
      {setAllData(_data); console.log(_data[0])}).catch((error)=>{setError(error);console.log(error)});
      return new Promise((resolve, reject)=>{
        if(!allData) {
            reject("Tickets Not Found2");
        }
        resolve(allData);

    });  

    },[]);    




    const allTripsRequest2 = async () => { 
       try {    const response = await fetch( 'http://192.168.1.67:8080/tickets'    );    
       const json = await response.json();    
       setTrips(json);  
      
      }
      catch (error) {    console.error(error);  }};


  return (
    <TripsContext.Provider
      value={{
        trips,
        isLoading,
        onTripsSearch:tripsRequest,
        error,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};
