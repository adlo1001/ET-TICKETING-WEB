import { BiTrash,BiAddToQueue } from "react-icons/bi"


export const PassengerInfo = ({ passe ,onDeletePass, onChoosePass}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeletePass(passe.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{passe.ticket.ticketNumber}</span>
          <span className="flex-grow text-right">{passe.id}</span>
        </div>
        <div><b className="font-bold text-blue-500">First Name:</b> {passe.firstName}</div>
        <div className="leading-tight"><b className="text-blue-500">Second Name:</b>{passe.middleName}</div>
        <div className="leading-tight"><b className="text-blue-500">Last Name:</b>{passe.lastName}</div>
        <div className="leading-tight"><b className="text-blue-500">ROLE</b>user{passe._role}</div>

        <div className="leading-tight"><b className="text-blue-500">: </b>{passe.address.email}</div>
        <div className="leading-tight"><b className="text-blue-500">Phone:</b> {passe.address.phone1}</div>
        <div className="leading-tight"><b className="text-blue-500">Phone:</b> {passe.address.phone2}</div>
        <div className="leading-tight"><b className="text-blue-500">Phone:</b> {passe.address.phone3}</div>
        <div className="leading-tight"><b className="text-blue-500">House No.:</b>{passe.address.houseNumber}</div>
        <div className="leading-tight"><b className="text-blue-500">Street.:</b>{passe.address.streetAddress}                "streetAddress": "Bole",
</div>
      </div>
            <div>
      <button onClick={()=>onChoosePass(passe.id)} type="button" 
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiAddToQueue /></button>  </div>
    </li>
  )
};
        