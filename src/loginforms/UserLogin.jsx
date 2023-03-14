import React from "react";
import Login from "../images/Login.svg";


const LoginTimeTwo = () => {
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content d-flex">
            <div className="signin-image">
              <figure>
                <img src={Login} alt="" width={500} />
              </figure>
            </div>
            <div className="singin-form">
              <h2 className="form-tittle">
                <form action="" className="login-form">
                  <div className="form-group">
                    <label htmlFor="UserName">
                    <i class="bi bi-person-workspace"></i>
                      <input
                        type="text"
                        name="UserName"
                        id="UserName"
                        autoComplete="off"
                        placeholder="UserName"
                        autoCorrect=""
                        spellCheck="false"
                      />
                    </label>
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">
                    <i class="bi bi-lock-fill"></i>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="off"
                        placeholder="your password"
                      />
                    </label>
                  </div>
                  <button id="submitbtn">Submit</button>
                </form>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="container">
        <div className="row">
          <div className="col-6">
            <figure>
              <img src={Login} alt="" width={500} />
            </figure>
          </div>
          <div className="col-6 mt-5 ">
            <form
              className="needs-validation"
              autoCorrect="off"
              autoComplete="off"
              spellCheck="false"
            >
              <div className="userid ">
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
      </div> */}
    </>
  );
};

export default LoginTimeTwo;
