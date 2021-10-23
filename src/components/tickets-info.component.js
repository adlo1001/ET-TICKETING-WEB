import { BiTrash,BiAddToQueue } from "react-icons/bi"


export const TicketsInfo = ({ ticket ,onDeleteStation, onChooseTicket}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeleteStation(ticket.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{ticket.ticketNumber}</span>
          <span className="flex-grow text-right">{ticket.refNum}</span>
        </div>
        <div><b className="font-bold text-blue-500">City:</b> ADULTS:{ticket.numberOfAdults}</div>
        <div className="leading-tight"><b className="text-blue-500">KIDS:</b>{ticket.numberOfKids}</div>
        <div className="leading-tight"><b className="text-blue-500">ISSUE DATE:</b>{ticket.issueDate}</div>
        <div className="leading-tight"><b className="text-blue-500">EXPIRY DATE:</b>{ticket.expiry_date}</div>
        <div className="leading-tight"><b className="text-blue-500">STATUS: </b>{ticket.status}</div>
        <div className="leading-tight"><b className="text-blue-500">PRICE:</b> {ticket.grossPriceAmnt}</div>
        <div className="leading-tight"><b className="text-blue-500">TRIP-ID:</b>{ticket.trip.id}</div>
      </div>
            <div>
      <button onClick={()=>onChooseTicket(ticket.id)} type="button" 
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiAddToQueue /></button>  </div>
    </li>
  )
};
        