import React from "react";
import { Link } from "react-router-dom";

const DashboardEmployeeLeave =() =>{

    return(

     <>

<div id="dashboardManager" className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light shadow">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <h3 className="text-black mt-5">Leave Portal</h3>
                <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                    <li className="nav-item ">
                        <Link to="#" className="nav-link align-middle px-0">
                            {/* <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span> */}
                        </Link>
                    </li>
                    <li>
                        <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Profile</span> </Link>
                            </li>
                            <li>
                                <Link to="manager-leave" className="nav-link px-0"> <span className="d-none d-sm-inline">Leaves</span>  </Link>
                            </li>
                        </ul>
                    </li>
                 
                    <li>
                        <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Tables</span></Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/ClotaHolidayCalendar" className="nav-link px-0"> <span className="d-none d-sm-inline">Clota Holiday Calender</span></Link>
                            </li>
                            <li>
                                <Link to="/Department" className="nav-link px-0"> <span className="d-none d-sm-inline">Department</span></Link>
                            </li>                            <li className="w-100">
                                <Link to="/EmployeeLeaves" className="nav-link px-0"> <span className="d-none d-sm-inline">Employee Leaves</span></Link>
                            </li>
                            <li>
                                <Link to="/Employees" className="nav-link px-0"> <span className="d-none d-sm-inline">Employees</span></Link>
                            </li>                            <li className="w-100">
                                <Link to="/LeaveMaster" className="nav-link px-0"> <span className="d-none d-sm-inline">Leave Master</span></Link>
                            </li>
                        </ul>
                    </li>
                    
                    <li>
                 <Link to="#" className="nav-link px-0 align-middle"><i className="fs-4 bi-people"></i>
                 <span className="ms-1 d-none d-sm-inline">Reports</span>
                 </Link>
                    </li>

                    <li>
                 <Link to="#" className="nav-link px-0 align-middle"><i className="fs-4 bi-people"></i>
                 <span className="ms-1 d-none d-sm-inline">Contact Us</span>
                 </Link>
                    </li>
                              
                  
                       
                </ul>
                <hr/>
                <div className="dropdown pb-4">
                    <Link to="#" className="d-flex align-items-center text-black text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                        <span className="d-none d-sm-inline mx-1">User Name</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
        <table className="table">
  <thead>
    {/* <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr> */}
    <h1 className="text-center">Welcome To Clota Leave Portal</h1>
  </thead>
  <tbody>
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>



        </div>
    </div>
</div>

</>

)


}






const DashboardManagerLeave =() =>{

    return(

        <>
        
        
        </>

    )


}


export {DashboardEmployeeLeave ,DashboardManagerLeave};