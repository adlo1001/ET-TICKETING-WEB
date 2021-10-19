
  export const DashboardScreen = () => {
 
    return (
      <div className="flex justify-center">
      
  
            <div className="pt-5">
            <div className="flex justify-center"><h1>WELCOME TO ADMIN DASHBOARD</h1></div>
            <div className="flex justify-center">
            <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/manageusers">
            Users     
          </a>
          <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/managestations">
            Stations
          </a> <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/manageroutes">
            Routes     
          </a>
          </div><br/>
     
          <div className="flex justify-center">
          <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/managetickets">
          Tickets
          </a> <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/managetrips">
            Trips     
          </a>   <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/managetransportations">
            Transportations
          </a>
          </div><br/>
      
          <div className="flex justify-center">
          <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/managecompanies">
            Bus Companies
          </a>    <a className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400" href="/managepassengers">
            Passangers      
          </a>
          </div><br/>          
          </div>
          </div>
      
      
      
     
    );
  };