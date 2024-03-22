const router = require("express").Router();
const db = require("../models");

const { Order } = db;

router.get("/", async (req, res) => {
  const order = await Order.findAll();
  res.json(order);
});

module.exports = router;
