const express = require("express");
const router = express.Router();
const db = require("../models");

const { Employee } = db;

router.post("/", async (req, res) => {
  const {
    Employee: employeeName,
    Designation,
    Country,
    HireDate,
    ReportsTo,
    email,
    password_hash,
  } = req.body;

  try {
    const newEmployee = await Employee.create({
      Employee: employeeName,
      Designation,
      Country,
      HireDate,
      ReportsTo,
      email,
      password_hash,
    });

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    console.error("Error creating employee:", error);
    res.status(400).json({
      success: false,
      message: "Failed to create employee",
      error: error.message,
    });
  }
});

module.exports = router;
