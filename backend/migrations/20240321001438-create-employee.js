"use strict";
//migration
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Employees", {
      EmployeeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Employee: {
        type: Sequelize.STRING,
      },
      Designation: {
        type: Sequelize.STRING,
      },
      Country: {
        type: Sequelize.STRING,
      },
      HireDate: {
        type: Sequelize.DATE,
      },
      ReportsTo: {
        type: Sequelize.INTEGER,
      },
      Photo: {
        type: Sequelize.BLOB,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Employees");
  },
};
