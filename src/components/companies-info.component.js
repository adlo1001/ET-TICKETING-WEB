import { BiTrash,BiAddToQueue } from "react-icons/bi"


export const CompanyInfo = ({ company ,onDeleteCompany, onChooseCompany}) => {
  return (
    <li className="px-3 py-3 flex items-start">
      <button onClick={()=>onDeleteCompany(company.id)} type="button"
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiTrash /></button>
      <div className="flex-grow">
        <div className="flex items-center">
          <span className="flex-none font-medium text-2xl text-blue-500">{company.companyName}</span>
          <span className="flex-grow text-right">{company.id}</span>
        </div>
        <div><b className="font-bold text-blue-500"></b>{company.companyNumber}</div>
        <div><b className="font-bold text-blue-500">LOGO:</b>{company.companyLogo}</div>
      </div>
            <div>
      <button onClick={()=>onChooseCompany(company.id)} type="button" 
        className="p-1.5 mr-1.5 mt-1 rounded text-white bg-blue-400 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        <BiAddToQueue /></button>  </div>
    </li>
  )
};
        