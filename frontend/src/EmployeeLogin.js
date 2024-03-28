import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles/login.css";

const EmployeeLogin = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting with:", email, password);

    try {
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

      const data = await response.json();

      console.log("Response data:", data);

      if (response.ok) {
        if (data.success) {
          console.log("Login successful");
          setLoggedIn(true);
        } else {
          console.log("Invalid credentials");
          setErrorMessage("Incorrect email or password.");
        }
      } else {
        if (response.status === 400) {
          console.log("Bad request error (client error)");
          setErrorMessage("Incorrect email or password.");
        } else if (response.status >= 500) {
          console.log("Server error");
          setErrorMessage("Server error. Please try again later.");
        } else {
          console.log("Unknown error");
          setErrorMessage("An unknown error occurred. Please try again later.");
        }
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
      setErrorMessage("An error occurred. Please try again later."); // Display generic error
    }
  };

  if (loggedIn) {
    return <Navigate to="/ecommerce" />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="login-form-input"
          type="email"
          id="email"
          name="email"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="login-form-submit" type="submit">
          Login
        </button>
      </form>
      <p>
        Don't have an account? Click{" "}
        <a href="http://localhost:3000/signup">HERE</a>
      </p>
    </div>
  );
};

export default EmployeeLogin;
