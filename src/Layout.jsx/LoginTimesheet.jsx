import React from "react";
import Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const LoginTimesheet= () => {
 return(
<>
    <div  className="container" id="homeContainer">
        <div className="box">

        <form action="" className="needs-validation">
                      <div className="userid">
                        <label for="uid" className="form-label">   
                          User Name:
                        </label>
                        <input
                          type="text"
                          className="placeholdars form-control form-control-md w-75"
                          id="userid"
                          placeholder="Enter Full Name"
                          name=" userid "
                          required
                        />
                        <div className="valid-feedback"> Valid data. </div>
                        <div className="invalid-feedback">   
                          Please fill the user name.
                        </div>
                      </div>
                      <div className="Password">
                        <label for="password" className="form-label">       
                          Password:
                        </label>
                        <input
                          type="password"
                          className="placeholdars form-control form-control-md w-75"
                          id=" password "
                          placeholder="Enter Your password"
                          name=" password "
                          required
                        />
                        <div className="valid-feedback"> Valid data. </div>
                        <div className="invalid-feedback">  
                          Enter Your Password.
                        </div>
                      </div>
                
                      <button type="submit" className="btn btn-primary submitbtn mt-2" >
                        Submit
                      </button>
                    </form>  

        </div>

    </div>

    <div>
      <Container>

    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col md={8} lg={6} xs={12}>
        <div className="border border-3 border-primary"></div>
      <Card className="shadow"> 
        <Card.Body>
          <div className="md-3 mt-3-md-4">
          <h2 className="fw-bold mb-2 text-uppercase">
    Login to Timesheet
          </h2>
          <p className="mb-5">
            Welcome User Please Login to your Timesheet Accout
          </p>
        <div className="mb-3">
          <div className="d-grid align-items-center justify-content-center">
          
<form  className="needs-validation">
                      <div className="userid">
                        <label for="uid" className="form-label">   
                          User Name:
                        </label>
                        <input
                          type="text"
                          className="placeholdars form-control form-control-md w-75"
                          id="uid"
                          placeholder="Enter User Name"
                          name=" uid "
                          required
                        />
                        <div className="valid-feedback"> Valid data. </div>
                        <div className="invalid-feedback">   
                          Please fill the user name.
                        </div>
                      </div>
                      <div className="password">
                        <label for="password" className="form-label">       
                          Password:
                        </label>
                        <input
                          type="password"
                          className="placeholdars form-control form-control-md w-75"
                          id=" password "
                          placeholder="Enter Your password"
                          name=" password "
                          required
                        />
                        <div className="valid-feedback"> Valid data. </div>
                        <div className="invalid-feedback">  
                          Please fill the password.
                        </div>
                      </div>

                      
                      <button type="submit" className="btn btn-info submitbtn mt-2" >
                        Submit
                      </button>
                    </form>  
          </div>
        </div>
          </div>
        </Card.Body>
      </Card>
      </Col>
    </Row>



        
      </Container>
      
    </div>
    </>
 )
    
}

export default LoginTimesheet;

<form  className="needs-validation">
                      <div className="userid">
                        <label for="uid" className="form-label">   
                          Your Name:
                        </label>
                        <input
                          type="text"
                          className="placeholdars form-control form-control-md w-75"
                          id="uid"
                          placeholder="Enter Full Name"
                          name=" uid "
                          required
                        />
                        <div className="valid-feedback"> Valid data. </div>
                        <div className="invalid-feedback">   
                          Please fill the user name.
                        </div>
                      </div>
                      <div className="password">
                        <label for="password" className="form-label">       
                          Password:
                        </label>
                        <input
                          type="password"
                          className="placeholdars form-control form-control-md w-75"
                          id=" password "
                          placeholder="Enter Your password"
                          name=" password "
                          required
                        />
                        <div className="valid-feedback"> Valid data. </div>
                        <div className="invalid-feedback">  
                          Please fill the password.
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Checked"
                          name="remembers"
                          required
                        />
                        <label className="form-check-label" for="Checked">   
                          I agree on form validation.
                        </label>
                        <div className="valid-feedback"> </div>
                        <div className="invalid-feedback"> </div>
                      </div>
                      <button type="submit" className="btn btn-info submitbtn mt-2" value="send">
                        Submit
                      </button>
                    </form>  