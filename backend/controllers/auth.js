// controllers/auth.js

const express = require("express");
const router = express.Router();
const db = require("../models");

const { Employee } = db;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Received login request for:", email, password);

  try {
    const employee = await Employee.findOne({ where: { email } });

    console.log("Found employee:", employee);

    if (!employee) {
      console.log("Invalid email");
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    // For demonstration, we are comparing plain text passwords here
    // In a production environment, always use hashed passwords for comparison
    console.log("Comparing passwords...");
    console.log("Employee Password Hash:", employee.password_hash);
    console.log("Entered Password:", password);

    if (employee.password_hash === password) {
      console.log("Login successful");
      return res
        .status(200)
        .json({ success: true, message: "Login successful", employee });
    } else {
      console.log("Invalid password");
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
});

module.exports = router;

module.exports = router;
