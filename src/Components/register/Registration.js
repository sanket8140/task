import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../login/Login";
import './Registration.css'

function Registration() {
  const [fname, fsetName] = useState("");
  const [lname, lsetName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, rsetPassword] = useState("");


  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);



  function handleFormSubmit(e) {
    e.preventDefault();

    if (!fname || !lname || !email || !password || !rpassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem(
        "Password",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }




  return (
    <>
    
                {" "}
                {login ? (
                  <form onSubmit={handleFormSubmit}>
                      <div id='Registration'>
                        <div className="container">
        <div className='row'>
          <div className='col'>
            <div className='form-containt'>
              <div className='form-detail'></div>
                     <div className='form-heading'>
                <h2 className='title-text'>Create account</h2>
                <p className='sub-text' onClick={handleClick}>Already have an account? <a href='#'>Log in</a></p>
              </div>
                    <input
                      onChange={(event) => setEmail(event.target.value)}
                      type='email'
                      placeholder='Email' /><br />

                    <div className='name-detail'>
                      <input
                        name="name"
                        onChange={(event) => fsetName(event.target.value)}
                        type='text'
                        placeholder='First name'
                        className='firstname ' />

                      <input
                        name="name"
                        onChange={(event) => lsetName(event.target.value)}
                        type='text'
                        placeholder='Last name'
                        className='lastname ' /><br />

                    </div>
                    <input
                      className=""
                      onChange={(event) => setPassword(event.target.value)}
                      type='password'
                      placeholder='Password' /><br />

                    <input
                      onChange={(event) => rsetPassword(event.target.value)}
                      type='password'
                      placeholder='Repeat Password' /><br />
                      
                    <button className='btn btn-primary'>Sign up <i class="fa-solid fa-arrow-right icon"></i></button>
                    {flag && (
                      <Alert color="primary" variant="danger">
                        please fill All field
                      </Alert>
                    )}
                       </div>
                       </div>
            </div>
          </div>
        </div>
   
                  </form>
                ) : (
                  <Login />
                )}
           
    </>
  );
}

export default Registration;
