import { BiTrash,BiAddToQueue } from "react-icons/bi"


export const TripsInfo = ({ trip ,onDeleteTrip, onChooseTrip}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeleteTrip(trip.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{trip.tripStatus}</span>
          <span className="flex-grow text-right">{trip.id}</span>
        </div>
        <div><b className="font-bold text-blue-500">Boarding Time:</b> {trip.initialTime}</div>
        <div className="leading-tight"><b className="text-blue-500">Ariival Time:</b>{trip.finalTime}</div>
        <div className="leading-tight"><b className="text-blue-500">Trip Period:</b>{trip.tripPeriod}</div>
        <div className="leading-tight"><b className="text-blue-500">Refreshment Begin:</b>{trip.refreshmentBegin}</div>
        <div className="leading-tight"><b className="text-blue-500">Refreshment End: </b>{trip.refreshmentEnd}</div>
        <div className="leading-tight"><b className="text-blue-500">Mode:</b> {trip.transportationMode}</div>
        <div className="leading-tight"><b className="text-blue-500">NO. Passengers:</b>{trip.numberOfPassenger}</div>
      </div>
            <div>
      <button onClick={()=>onChooseTrip(trip.id)} type="button" 
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiAddToQueue /></button>  </div>
    </li>
  )
};
        