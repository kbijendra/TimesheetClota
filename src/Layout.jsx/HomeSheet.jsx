import React from "react";
import { Card, Container } from "react-bootstrap";
import { Nav , Navbar } from "react-bootstrap";
import ClotaLogoo from "../images/ClotaLogoo.png";

import { Link, NavLink } from "react-router-dom";




const TimesheetHome = () => {

  
  return (
    <>

    
<div id="timesheetHome" className="container-fluid">
      
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
          <NavLink to="/contactus">Contact Us</NavLink>
        </Nav>
      </Container>
    </Navbar> 
        <Card.Body className="cardBody" > 

      <h2 className="text-center mt-5">Welcome To Clota Timesheet Portal</h2>
      <br />
    
      <div className="login">
      <h3 className="text-center">Login To Continue</h3>
        <form>
          <label for="username">
            <b>Username:</b> 
            <input type="text" name="username" placeholder="Enter Username"  />
          </label>
          <label for="password">
           <b>Password:</b> 
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
      </Card.Body>
      </Card>
      
    </div>
    </>
  );
};


const LeavePortalHome = () => {

  return (
    <div id="leaveHome" className="container-fluid">
      
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
          <NavLink  to="/timesheetHome" className="mx-3">Timesheet Portal</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
          </Nav>
        </Container>
      </Navbar> 
          <Card.Body className="" >   
        <h2 className="text-center mt-5 ">Welcome To Clota Leave Portal</h2>

        <div className="login">
        <h3 className="text-center">Login To Continue</h3>
        <form>

          <label for="username">
            <b>Username:</b> 
            <input type="text" name="username" placeholder="Enter Username"/>
          </label>
          <label for="password">
           <b>Password:</b> 
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
        </Card.Body>
        </Card>
      
      </div>

    
  );
};


export { TimesheetHome, LeavePortalHome };
