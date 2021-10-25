import { BiTrash,BiAddToQueue } from "react-icons/bi"


export const UserInfo = ({ user ,onDeleteUser, onChooseUser}) => {
  const address_ = user.addresses;
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeleteUser(user.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{user.userId}</span>
          <span className="flex-grow text-right">{user.id}</span>
        </div>
        <div><b className="font-bold text-blue-500">First Name:</b> {user.firstName}</div>
        <div className="leading-tight"><b className="text-blue-500">Second Name:</b>{user.middleName}</div>
        <div className="leading-tight"><b className="text-blue-500">Last Name:</b>{user.lastName}</div>
        <div className="leading-tight"><b className="text-blue-500">ROLE</b>{user._role}</div>

        {
        address_.map((data) => 
        
        <div>
        
        <div className="leading-tight"><b className="text-blue-500">E-Mail: </b>{data.email}</div>
        <div className="leading-tight"><b className="text-blue-500">Phone 1:</b> {data.phone1}</div>
        <div className="leading-tight"><b className="text-blue-500">Phone 2:</b> {data.phone2}</div>
        <div className="leading-tight"><b className="text-blue-500">Phone 3:</b> {data.phone3}</div>
        <div className="leading-tight"><b className="text-blue-500">House No.:</b>{data.houseNumber}</div>
        <div className="leading-tight"><b className="text-blue-500">Street:</b>{data.streetAddress}    
</div>
        </div>
        
        
        )
        }
      </div>
            <div>
      <button onClick={()=>onChooseUser(user.id)} type="button" 
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiAddToQueue /></button>  </div>
    </li>
  )
};
        