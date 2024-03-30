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
    EmployeeID,
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
      EmployeeID,
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

// DELETE an employee
router.delete("/", async (req, res) => {
  const { EmployeeID } = req.body;
  console.log("Deleting employee with ID:", EmployeeID);

  try {
    if (!EmployeeID) {
      throw new Error("EmployeeID is required for deletion");
    }

    await Employee.destroy({
      where: {
        EmployeeID: EmployeeID,
      },
    });

    console.log("Employee deleted successfully");
    res.status(204).send();
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete employee",
      error: error.message,
    });
  }
});

// PUT/UPDATE an employee
router.put("/", async (req, res) => {
  const { EmployeeID, field, value } = req.body;

  console.log("Updating employee with ID:", EmployeeID);

  if (!EmployeeID || !field || value === undefined) {
    return res.status(400).json({
      success: false,
      message: "Invalid request data for update",
    });
  }

  try {
    let updatedEmployee = await Employee.findOne({
      where: {
        EmployeeID: EmployeeID,
      },
    });

    if (!updatedEmployee) {
      return res.status(404).json({
        success: false,
        message: `Employee with ID ${EmployeeID} not found`,
      });
    }

    updatedEmployee[field] = value;

    updatedEmployee = await updatedEmployee.save();

    console.log("Employee updated successfully");
    return res.status(200).json({
      success: true,
      message: "Employee updated successfully",
      updatedEmployee: updatedEmployee,
    });
  } catch (error) {
    console.error("Error updating employee:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update employee",
      error: error.message,
    });
  }
});

module.exports = router;
