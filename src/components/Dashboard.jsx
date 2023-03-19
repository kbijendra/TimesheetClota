import React from "react";

import { Outlet, Link } from "react-router-dom";

const Dashboard = () =>{

    return(
        <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
           <li className="nav-item active">
             <a className="nav-link" href="/"> <b>My Dashboard</b></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/addEmployee"><b>Time & Attendance</b></a>
           </li>
            <li className="nav-item">
             <a className="nav-link" href="/addDepartment"><b>Leave Approval Form</b></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/inputSalary"><b>Reports</b></a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="/employee" ><b>Downloads</b></a>
           {/* </li>
            <li className="nav-item">
             <a className="nav-link" href="/salary">Salary List</a>
           </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div> */}
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
        </>
    )

}

export {Dashboard};