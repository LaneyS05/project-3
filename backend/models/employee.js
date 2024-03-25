// models/employee.js
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
    }

    async comparePassword(password) {
      // For now, compare passwords directly without hashing
      return this.password_hash === password;
    }
  }

  Employee.init(
    {
      EmployeeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Employee: DataTypes.STRING,
      Designation: DataTypes.STRING,
      Country: DataTypes.STRING,
      HireDate: DataTypes.DATE,
      ReportsTo: DataTypes.INTEGER,
      Photo: DataTypes.BLOB,
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );

  return Employee;
};
