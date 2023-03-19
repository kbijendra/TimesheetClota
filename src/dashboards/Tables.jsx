import React, { useState, useEffect } from "react";

const ClotaHolidayCalendar = () => {
  const [clotaHolidayCalendar, setClotaHolidayCalendar] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/clotaHolidays")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setClotaHolidayCalendar(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">CalenderYear</th>
            <th scope="col">Holiday Date</th>
            <th scope="col">CreatedOn</th>
            <th scope="col">CreatedBy</th>
            <th scope="col">UpdatedOn</th>
            <th scope="col">UpdatedBy</th>
          </tr>
        </thead>
        <tbody>
          {clotaHolidayCalendar.map((clotaHolidayCalendar) => {
            return (
              <tr>
                <td>{clotaHolidayCalendar.id}</td>
                <td>{clotaHolidayCalendar.calenderYear}</td>
                <td>{clotaHolidayCalendar.holiday}</td> 
                <td>{clotaHolidayCalendar.date}</td>
                <td>{clotaHolidayCalendar.createdOn}</td>
                <td>{clotaHolidayCalendar.CreatedBy}</td>
                <td>{clotaHolidayCalendar.updatedOn}</td>
                <td>{clotaHolidayCalendar.updatedBy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Department = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/employee")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDepartment(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">DepartmentID</th>
            <th scope="col">DepartmentName</th>
            <th scope="col">ServiceLine</th>
            <th scope="col">Description</th>
            <th scope="col">CreatedOn</th>
            <th scope="col">CreatedBy</th>
            <th scope="col">UpdatedOn</th>
            <th scope="col">UpdatedBy</th>
          </tr>
        </thead>
        <tbody>
          {department.map((department) => {
            return (
              <tr>
                  <td>{department.departmentId}</td>
                <td>{department.departmentName}</td>
                <td>{department.serviceline}</td> 
                <td>{department.descripton}</td>
                <td>{department.createdOn}</td>
                <td>{department.CreatedBy}</td>
                <td>{department.updatedOn}</td>
                <td>{department.updatedBy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const EmployeeLeaves = () => {
  const [employeeLeaves, setEmployeeLeaves] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/employeeLeaves")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployeeLeaves(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">EmployeeLeavesId</th>
            <th scope="col">EmployeeID</th>
            <th scope="col">LeaveId</th>
            <th scope="col">TotalLeave</th>
            <th scope="col">Applied</th>
            <th scope="col">Balance</th>
            <th scope="col">Year</th>
            <th scope="col">CreatedOn</th>
            <th scope="col">CreatedBy</th>
            <th scope="col">UpdatedOn</th>
            <th scope="col">UpdatedBy</th>
          </tr>
        </thead>
        <tbody>
          {employeeLeaves.map((employeeLeaves) => {
            return (
              <tr>
                <td>{employeeLeaves.employeeleavesId}</td>
                <td>{employeeLeaves.employeeId}</td>
                <td>{employeeLeaves.leaveId}</td> 
                 <td>{employeeLeaves.totalLeave}</td>
                <td>{employeeLeaves.applied}</td>
                <td>{employeeLeaves.balance}</td>  
                <td>{employeeLeaves.createdOn}</td>
                <td>{employeeLeaves.createdBy}</td>
                <td>{employeeLeaves.updatedOn}</td>  
                <td>{employeeLeaves.updatedBy}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const Employees = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/employee")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">EmployeeID</th>
            <th scope="col">FirstName</th>
            <th scope="col">FatherName</th>
            <th scope="col">Surname</th>
            <th scope="col">DOB</th>
            <th scope="col">DOJ</th>
            <th scope="col">Gender</th>
            <th scope="col">Title</th>
            <th scope="col">ManagerID</th>
            <th scope="col">DepartmentID</th>
            <th scope="col">MobileNumber</th>
            <th scope="col">EmailID</th>
            <th scope="col">CreatedOn</th>
            <th scope="col">CreatedBy</th>
            <th scope="col">UpdatedOn</th>
            <th scope="col">UpdatedBy</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => {
            return (
              <tr>
                <td>{employee.employeeId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.fatherName}</td>
                <td>{employee.surname}</td>
                <td>{employee.dob}</td>
                <td>{employee.doj}</td>
                <td>{employee.gender}</td>
                <td>{employee.title}</td>
                <td>{employee.managerId}</td>
                <td>{employee.departmentId}</td>
                <td>{employee.mobileNumber}</td>
                <td>{employee.emailId}</td>
                <td>{employee.createdOn}</td>
                <td>{employee.createdBy}</td>
                <td>{employee.updatedOn}</td>
                <td>{employee.updatedBy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


const LeaveMaster = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/employee")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="posts-container">
      <table class="table table-striped table-bordered table-sm">
        <thead>
          <tr>
            <th scope="col">Employee Id</th>
<th scope="col">LeaveMaster</th>
<th scope="col">LeaveId</th>
<th scope="col">LeaveType</th>
<th scope="col">LeaveCode</th>	
<th scope="col">CreatedOn</th>	
<th scope="col">CreatedBy</th>	
<th scope="col">UpdatedOn</th>	
<th scope="col">UpdatedBy</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((employee) => {
            return (
              <tr>
                <td>{employee.employeeId}</td>
                <td>{employee.leaveMaster}</td>
                <td>{employee.leaveId}</td>
                <td>{employee.leaveType}</td>
                <td>{employee.leaveCode}</td>
                <td>{employee.createdOn}</td>
                <td>{employee.createdBy}</td>
                <td>{employee.updatedOn}</td>
                <td>{employee.updatedBy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { ClotaHolidayCalendar, Department, EmployeeLeaves,  Employees, LeaveMaster };
