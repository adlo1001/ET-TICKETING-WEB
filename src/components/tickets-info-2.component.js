import { BiTrash,BiCartAlt } from "react-icons/bi";
import {BsFillCreditCard2BackFill} from "react-icons/bs";



export const TicketsInfo = ({ ticket , onChooseTicket}) => {
  const pack =ticket.trip.tripPackage;
  return (
    <li className="px-3 py-3 flex items-start">
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500"></span>
          <span className="flex-grow text-right"></span>
          
        </div>
        <div><b className="font-bold text-blue-500">Trip Period:</b> {ticket.trip.tripPeriod} hr</div>
        <div><b className="font-bold text-blue-500">Price:</b> {ticket.grossPriceAmnt}</div>
        <div className="leading-tight"><b className="text-blue-500">BUS:</b>{ticket.trip.trans.owner.companyName}</div>
        <div className="leading-tight"><b className="text-blue-500">Route:</b>{ticket.trip.route.description}</div>
        <div className="leading-tight"><b className="text-blue-500">Initial Station:</b>{ticket.trip.route.initialStation.stationName}/{ticket.trip.route.initialStation.city}</div>
        <div className="leading-tight"><b className="text-blue-500">Final Station: </b>{ticket.trip.route.finalStation.stationName}/{ticket.trip.route.finalStation.city}</div>
        <div className="leading-tight"><b className="text-blue-500">Boarding Time:</b>{ticket.trip.initialTime}</div>
        <div className="leading-tight"><b className="text-blue-500">Arrival Time:</b> {ticket.trip.finalTime}</div>
        <div><b className="font-bold text-blue-500">Package:</b></div>
       {
        pack.map((data) => 
        <div>
        <div className="leading-tight"><b className="text-blue-500">{data.itemCategory}:</b>{data.itemName}</div>
        </div>)
        }
      

      </div>
      {(ticket.trip.trans.owner.id==11001)&&<img src="/images/buses/selam_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11002)&&<img src="/images/buses/abay_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11003)&&<img src="/images/buses/geda_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11004)&&<img src="/images/buses/golden_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11005)&&<img src="/images/buses/habesha_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11006)&&<img src="/images/buses/oda_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11007)&&<img src="/images/buses/selam_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11008)&&<img src="/images/buses/yegna_bus.jpg" class="img-fluid" alt="bus"/>}
      {(ticket.trip.trans.owner.id==11009)&&<img src="/images/buses/zemen_bus.jpg" class="img-fluid" alt="bus"/>}
  
            <div class="p-5">
      <button onClick={()=>onChooseTicket(ticket.id)} type="button" 
        className="p-2 mr-2 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <p>Book</p></button>  </div>
        
    </li>
  )
};
        