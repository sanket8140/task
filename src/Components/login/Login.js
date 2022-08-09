import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Home from "../home/Home";
import './Login.css'

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("Password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
    }
  }

  return (
    <div>
    {home ? (
      <form onSubmit={handleLogin}>
        <div id="Login">
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='form-containt'>
                <div className='form-detail'>
                  <div className='form-heading'>
                    <h2 className='title-text'>Login account</h2>
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={(event) => setEmaillog(event.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(event) => setPasswordlog(event.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>

                  {flag && (
                    <Alert color="primary" variant="danger">
                     Fill all correct information
                    </Alert>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </form>
    ) : (
      <Home />

    )}
  </div>

  );
}

export default Login;
