import React, { useState } from 'react';
import "./CSS/LoginSignup.css";

// LoginSignup Component
// Provides a basic login/signup functionality with form validation and error handling
const LoginSignup = () => {

  // Two state variables initialized using the useState hook
  // a) state- Manages whether the component is in "Login" or "Signup" mode
  const [state, setState] = useState("Login");

  // b) formData- Manages form data, including username, password, and email
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  // changeHandler Updates the formData state whenever change happens the input fields
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]:e.target.value });
  };

  // For Login Functionality
  const login = async () => {
    console.log("Login Function Executed", formData);
    let responseData;
    await fetch('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  // For Signup Functionality
  const signup = async () => {
    console.log("Signup Function Executed", formData);
    let responseData;
    await fetch('/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    /* Displaying Login and Signup Form */
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>

        <div className="loginsignup-fields">
          {state === "Sign Up"?(
            <input
              name="username"
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder="Your Name"
            />) : (<></>)
          }
          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Password"
          />
        </div>

        {/* Button for submitting the form */}
        <button onClick={() => {
            state === "Login"?login():signup();
        }}
        >Continue</button>

        {/*  Users can log in if they already have an account */}
        {/*  Or users can create an account if have no account*/}
        {state === "Sign Up"?(
          <p className="loginsignup-login">Already have an account?{" "}
            <span onClick={() => {
                setState("Login");
            }}>Login here</span>
          </p>
        ):(
          <p className="loginsignup-login">Create an account?{" "}
            <span onClick={() => {
                setState("Sign Up");
              }}>Click here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & private policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;