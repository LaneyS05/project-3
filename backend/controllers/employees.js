// controllers/employees.js
const router = require("express").Router();
const db = require("../models");

const { Employee } = db;

router.get("/", async (req, res) => {
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
      "password_hash", // Updated column name
      "createdAt",
      "updatedAt",
    ],
  });
  res.json(employees);
});

module.exports = router;
