"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }

  Order.init(
    {
      OrderID: DataTypes.INTEGER,
      CustomerID: DataTypes.INTEGER,
      EmployeeID: DataTypes.INTEGER,
      Image: DataTypes.BLOB,
      Item: DataTypes.STRING,
      TotalAmount: DataTypes.DECIMAL,
      Status: DataTypes.STRING,
      Location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );

  return Order;
};
