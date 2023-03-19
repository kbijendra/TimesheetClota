import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { TimesheetHome , LeavePortalHome } from "./HomeSheet";
import Contactus from "../loginforms/Contactus";
import { DashboardEmployeeLeave, DashboardManagerLeave } from "../dashboards/DashboardLeave";
import { ClotaHolidayCalendar, Department, EmployeeLeaves, Employees, LeaveMaster } from "../dashboards/Tables";
import { Dashboard } from "../components/Dashboard";
import LeaveCalendar from "../components/calendar";
import LeaveApplicationForm from "../components/LeaveApplicationForm";




function PageRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeavePortalHome />} />
        <Route path="/timesheetHome" element={<TimesheetHome />} />
         <Route path="/dashboard-employee-leave" element={<DashboardEmployeeLeave />} />
         <Route path="/dashboard-manager-leave" element={<DashboardManagerLeave />} />
         <Route path="/contactus" element={<Contactus />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/EmployeeLeaves" element={<EmployeeLeaves />} />
         <Route path="/Employees" element={<Employees />} />
         <Route path="/Department" element={<Department />} />
         <Route path="/ClotaHolidayCalendar" element={<ClotaHolidayCalendar />} />
         <Route path="/LeaveMaster" element={<LeaveMaster />} />
         <Route path="/Calendar" element={<LeaveCalendar/>} /> 
         <Route path="/leaveapplicatioform" element={<LeaveApplicationForm/>} />     
      </Routes>
    </Router>
  );
}

export default PageRoutes;
