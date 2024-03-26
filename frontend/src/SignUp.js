import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles/signup.css";

const EmployeeSignup = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [employee, setEmployee] = useState({
    Employee: "",
    EmployeeID: "",
    Designation: "",
    Country: "",
    HireDate: "",
    ReportsTo: "",
    email: "",
    password_hash: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8001/auth/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      if (response.ok) {
        console.log("Employee created successfully!");
        setSignedIn(true);
      } else {
        console.error("Failed to create employee");
      }
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  };

  if (signedIn) {
    return <Navigate to="/ecommerce" />;
  }

  return (
    <div className="signup-container">
      <h2>Employee Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Employee">Employee:</label>
          <input
            type="text"
            id="Employee"
            name="Employee"
            value={employee.Employee}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="EmployeeID">EmployeeID:</label>
          <input
            type="text"
            id="EmployeeID"
            name="EmployeeID"
            value={employee.EmployeeID}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Designation">Designation:</label>
          <input
            type="text"
            id="Designation"
            name="Designation"
            value={employee.Designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="Country">Country:</label>
          <input
            type="text"
            id="Country"
            name="Country"
            value={employee.Country}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="HireDate">Hire Date:</label>
          <input
            type="date"
            id="HireDate"
            name="HireDate"
            value={employee.HireDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ReportsTo">Reports To:</label>
          <input
            type="text"
            id="ReportsTo"
            name="ReportsTo"
            value={employee.ReportsTo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password_hash">Password:</label>
          <input
            type="password"
            id="password_hash"
            name="password_hash"
            value={employee.password_hash}
            onChange={handleChange}
            required
          />
        </div>

        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
      <p>
        already have an account click{" "}
        <a className="link" href="http://localhost:3000/login">
          HERE
        </a>
      </p>
    </div>
  );
};

export default EmployeeSignup;
