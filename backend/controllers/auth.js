// controllers/auth.js
const express = require("express");
const router = express.Router();
const db = require("../models");

const { Employee } = db;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Received login request for email:", email);

    const employee = await Employee.findOne({ where: { email } });

    if (!employee) {
      console.log("Employee not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Found employee:", employee.EmployeeID);

    const passwordMatch = await employee.comparePassword(password);

    if (!passwordMatch) {
      console.log("Password does not match");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("Login successful for employee:", employee.EmployeeID);

    res.status(200).json({
      success: true,
      message: "Login successful",
      employee,
    });
  } catch (error) {
    console.error("An error occurred during login:", error.message);
    res.status(500).json({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
});

module.exports = router;
