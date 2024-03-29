const router = require("express").Router();
const db = require("../models");

const { Employee } = db;

// GET all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.findAll({
      attributes: [
        "EmployeeID",
        "Employee",
        "Designation",
        "Country",
        "HireDate",
        "ReportsTo",
        "Photo",
        "email",
        "password_hash",
        "createdAt",
        "updatedAt",
      ],
    });
    res.json(employees);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
});

// POST a new employee
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
    const newEmployee = await Employee.create({
      Employee,
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
