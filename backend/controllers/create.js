const express = require("express");
const router = express.Router();
const db = require("../models");

const { Employee: EmployeeModel } = db;

router.post("/", async (req, res) => {
  const {
    Employee,
    Designation,
    Country,
    HireDate,
    ReportsTo,
    email,
    password_hash,
  } = req.body;

  try {
    console.log("Received Employee Data:", req.body);
    const newEmployee = await EmployeeModel.create({
      Employee,
      Designation,
      Country,
      HireDate,
      ReportsTo,
      email,
      password_hash,
    });

    console.log("New Employee Created:", newEmployee);
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
