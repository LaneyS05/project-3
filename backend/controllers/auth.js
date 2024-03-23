const express = require("express");
const router = express.Router();
const db = require("../models");

const { Employee } = db;

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await Employee.hashPassword(password);
    const newEmployee = await Employee.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Employee registered successfully",
      employee: newEmployee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to register employee",
      error: error.message,
    });
  }
});

module.exports = router;
