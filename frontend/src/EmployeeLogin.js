import React, { useState } from "react";
import { Navigate } from "react-router-dom"; // Import Navigate correctly
import "./styles/login.css";

const EmployeeLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, set loggedIn to true on form submit
    setLoggedIn(true);
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
