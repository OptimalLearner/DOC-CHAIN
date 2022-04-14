import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
   
  const ASignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangepassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
      e.preventDefault()
    console.log("..submitting the file");
  };
  var data = {};
  var tempdata = {
    "email": email,
    "pass:": password,
  };

  data = tempdata;
  console.log(data);
  
  const options = [
    'one', 'two', 'three'
    ];
    const defaultOption = options[0];
  return (
   
    
    <>
      <Header />
      
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Student Login</h3>
                  <form onSubmit={handleSubmit}>
                    <label className="form-label" for="emailAddress">
                      Select Institute
                    </label>
                    <div className="row">
                      <div className="col-md-12 mb-4 pb-2">
                      <div className="form-outline">
                      
                     
                        
                        <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />;
                      
                       </div>
                      </div>
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <label className="form-label" for="password">
                              Password
                            </label>

                            <input
                              type="password"
                              id="password"
                              className="form-control form-control-lg"
                              onChange={() =>handleChangepassword()}
                            />
                          </div>
                        </div>
                      </div>

                    <div className="text-center fs-12">
                      {" "}
                      Don't Have an Account?{" "}
                      <a href="/signup">Sign up</a>{" "}
                    </div>
                    <div className="mt-4 pt-2" align="center">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ASignIn;
