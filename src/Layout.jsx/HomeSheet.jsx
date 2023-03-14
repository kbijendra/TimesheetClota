import React from "react";
import { Card, Container } from "react-bootstrap";
import { Nav , Navbar } from "react-bootstrap";
import ClotaLogoo from "../images/ClotaLogoo.png";

import { Link, NavLink } from "react-router-dom";


const TimesheetHome = () => {
  return (
    <>

    
<div id="timesheetHome" class="container-fluid">
      
      <Card className="shadow homeCard "> 
      <Navbar bg="light" variant="light" className="shadow" >
      <Container>
        <Navbar.Brand className="tittle" to="/timesheetHome">
        <img
            src={ClotaLogoo}
            width="70"
            height="60"
            className="d-inline-block align-top"
            alt="Clota logo"
          />
        </Navbar.Brand>
<Navbar.Brand>
<Link to="/timesheetHome">
  <h1>
Timesheet</h1>
</Link>

</Navbar.Brand>

        <Nav className="ms-auto tab-links">
          <NavLink to="/">Leave Portal</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </Nav>
      </Container>
    </Navbar> 
        <Card.Body >   
      <h1>Welcome To Clota Timesheet Portal</h1>
      <br />
      <h3>Login To Continue</h3>
      <h5>Login As</h5>
      <Link to="/manager-login-timesheet" className="btn btn-primary submitbtn">Manager</Link>
      <Link to="/user-login-timesheet" className="btn btn-success submitbt">Employee</Link>
      </Card.Body>
      </Card>
    
    </div>
    </>
  );
};

const LeavePortalHome = () => {

  return (
    <div id="leaveHome" class="container-fluid">
      
        <Card className="shadow homeCard "> 
        <Navbar bg="light" variant="light" className="shadow" >
        <Container>
          <Navbar.Brand className="tittle" to="#home">
            <Link to="/">
          <img
              src={ClotaLogoo}
              width="70"
              height="60"
              className="d-inline-block align-top"
              alt="Clota logo"
            />
</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/">
              <h1>Leave Portal</h1>
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto tab-links">
          <NavLink  to="/timesheetHome">Timesheet Portal</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar> 
          <Card.Body >   
        <h2>Welcome To Clota Leave Portal</h2>
        <br />
        <h3>Login To Continue</h3>
        <h5>Login As</h5>
        <Link to="/manager-login-leaveportal" className="btn btn-primary submitbtn">Manager</Link>
        <Link to="/user-login-leaveportal" className="btn btn-success submitbt">Employee</Link>
        </Card.Body>
        </Card>
      
      </div>

    
  );
};

export { TimesheetHome, LeavePortalHome };
