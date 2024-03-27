const router = require("express").Router();
const db = require("../models");

const { Customer } = db;

router.get("/", async (req, res) => {
  const customer = await Customer.findAll();
  res.json(customer);
});

module.exports = router;
