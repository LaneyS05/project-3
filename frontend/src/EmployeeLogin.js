import React, { useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import "./styles/login.css";

const EmployeeLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Logging in with email:", email); // Check the email being sent
      const response = await fetch("http://localhost:8001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      //console.log("Response status:", response.status);

      const data = await response.json();

      if (response.ok) {
        if (data.success) {
          console.log("Login successful");
          setLoggedIn(true);
        } else {
          console.log("Invalid credentials");
        }
      } else {
        console.log(`HTTP Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  // Redirect to /ecommerce if loggedIn state is true
  if (loggedIn) {
    return <Navigate to="/ecommerce" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form-label" htmlFor="username">
          Email:
        </label>
        <input
          className="login-form-input"
          type="text"
          id="username"
          name="username"
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="login-form-label" htmlFor="password">
          Password:
        </label>
        <input
          className="login-form-input"
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-form-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
