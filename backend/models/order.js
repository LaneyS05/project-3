const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Order = sequelize.define("Order", {
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Order;
