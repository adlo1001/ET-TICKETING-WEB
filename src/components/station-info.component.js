import { BiTrash,BiAddToQueue } from "react-icons/bi";
import {BsFillPlusCircleFill} from "react-icons/bs";



export const StationInfo = ({ station ,onDeleteStation, onChooseStation}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeleteStation(station.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{station.stationName}</span>
          <span className="p-1 flex-grow text-right">Add </span>
        </div>
        <div><b className="font-bold text-blue-500">City:</b> {station.city}</div>
        <div><b className="font-bold text-blue-500">Sub city:</b> {station.subcity}</div>
        <div className="leading-tight">{station.region}</div>
        <div className="leading-tight">{station.province}</div>
        <div className="leading-tight">{station.description}</div>
      </div>
            <div>
      <button onClick={()=>onChooseStation(station.id)} type="button" 
        className="p-3 mr-5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BsFillPlusCircleFill/></button>  </div>
    </li>
  )
};
