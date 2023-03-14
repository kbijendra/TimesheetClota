import React from "react";
import { Card } from "react-bootstrap";

const LoginTimeThree = () => {
  return (
    <div id="loginTimeThree" className="container">
      <div className="row mt-5">
        <div className="col-6 mt-3">
          <h1 className="mt-3">Welcome To Timesheet Portal</h1> 
          <h3 className="mt-4">Plese Login To Continue</h3>
          <h4 className="mt-2">Login As</h4>
      <button id="userLoginbtn" className=" btn btn-primary ">User</button>
      <button id="adminLoginbtn" className=" btn btn-success ">Admin</button>
        </div>
        <div className="col-6">
          
        <form
              className="needs-validation"
              autoCorrect="off"
              autoComplete="off"
              spellCheck="false"
            >
              <div className="userid ">
                <label for="uid" className="form-label">
                  <b>User Name:</b>
                </label>
                <input
                  type="text"
                  className="placeholdars form-control form-control-md w-75"
                  id="UserName"
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
                <b>Password:</b>
                </label>
                <input
                  type="password"
                  className="placeholdars form-control form-control-md w-75"
                  id="password"
                  placeholder="Enter Your password"
                  name=" password "
                  required
                />
                <div className="valid-feedback"> Valid data. </div>
                <div className="invalid-feedback">
                  Please fill the password.
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-info submitbtn mt-2 justify-content-center text-center align-items-center"
                id="submitButton"
                href="/hometimeOne"
              >
                Submit
              </button>
            </form>
           
        </div>
      </div>
    </div>
  );
};

export default LoginTimeThree;
