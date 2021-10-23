import { BiTrash,BiAddToQueue } from "react-icons/bi"


export const TransportationInfo = ({ _trans ,onDeleteRoute, onChooseRoute}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeleteRoute(_trans.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{_trans.vehicle}</span>
          <span className="flex-grow text-right">{_trans.id}</span>
        </div>
    
        <div><b className="font-bold text-blue-500">NO Seat:</b> {_trans.numberOfSeat}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">Class:</b> {_trans.transporationClass}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">MODE:</b> {_trans._mode}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">Alcohol:</b> {_trans.drinkingAllowed}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">Smoking:</b> {_trans.smokingAllowed} </div>
       <div className="leading-tight"><b className="font-bold text-blue-500">Pets:</b> {_trans.petAllowed}</div>
       <div className="leading-tight"><b className="font-bold text-blue-500">Owner:</b> {_trans.owner.id}/{_trans.owner.companyName}</div>
        
      
      </div>
            <div>
      <button onClick={()=>onChooseRoute(_trans.id)} type="button" 
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiAddToQueue /></button>  </div>
    </li>
  )
};
