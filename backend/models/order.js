'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    OrderID: DataTypes.INTEGER,
    CustomerID: DataTypes.INTEGER,
    EmployeeID: DataTypes.INTEGER,
    Image: DataTypes.BLOB,
    Item: DataTypes.STRING,
    TotalAmount: DataTypes.DECIMAL,
    Status: DataTypes.STRING,
    Location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};