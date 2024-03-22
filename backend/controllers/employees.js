const router = require("express").Router();
const db = require("../models");

const { Employee } = db;

router.get("/", async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

module.exports = router;
