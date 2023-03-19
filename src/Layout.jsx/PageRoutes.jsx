import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { TimesheetHome , LeavePortalHome } from "./HomeSheet";
import { UserLoginLeave ,ManagerLoginLeave ,UserLoginTime, ManagerLoginTime } from "../loginforms/Loginpage";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Sidebar";



function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeavePortalHome />} />
        <Route path="/timesheetHome" element={<TimesheetHome />} />
        <Route path="/user-login-leaveportal" element={<UserLoginLeave />} />
        <Route path="/user-login-timesheet" element={<UserLoginTime />} />  
        <Route path="/manager-login-leave" element={<ManagerLoginLeave />} />  
         <Route path="/manager-login-timesheet" element={<ManagerLoginTime />} />
         <Route path="/dashboard" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default PageRoutes;
