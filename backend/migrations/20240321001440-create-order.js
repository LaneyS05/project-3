"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      OrderID: {
        type: Sequelize.INTEGER,
      },
      CustomerID: {
        type: Sequelize.INTEGER,
      },
      EmployeeID: {
        type: Sequelize.INTEGER,
      },
      Image: {
        type: Sequelize.BLOB,
      },
      Item: {
        type: Sequelize.STRING,
      },
      TotalAmount: {
        type: Sequelize.DECIMAL,
      },
      Status: {
        type: Sequelize.STRING,
      },
      Location: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
