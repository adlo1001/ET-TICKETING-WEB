import { BiTrash,BiAddToQueue } from "react-icons/bi"


export const RouteInfo = ({ _route ,onDeleteRoute, onChooseRoute}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeleteRoute(_route.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{_route.routeName}</span>
          <span className="flex-grow text-right">{_route.id}</span>
        </div>
        <div><b className="font-bold text-blue-500">Boarding Station :</b> {_route.initialStation.id}/{_route.initialStation.stationName}/{_route.initialStation.city}
        </div>
        <div><b className="font-bold text-blue-500">1st Station:</b> {_route.subStation1.id} {_route.subStation1.stationName} / {_route.subStation1.city}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">2nd Station:</b> {_route.subStation2.id} {_route.subStation2.stationName}/{_route.subStation2.city}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">3rd Station:</b> {_route.subStation3.id}/{_route.subStation3.city}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">4rd Station:</b> {_route.subStation4.id}/ {_route.subStation4.city}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">5rd Station:</b> {_route.subStation5.id} / {_route.subStation5.city}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500">Destination Station:</b> {_route.finalStation.id}/{_route.finalStation.city}</div>
        <div className="leading-tight"><b className="font-bold text-blue-500"></b> {_route.description}</div>
      </div>
            <div>
      <button onClick={()=>onChooseRoute(_route.id)} type="button" 
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiAddToQueue /></button>  </div>
    </li>
  )
};
