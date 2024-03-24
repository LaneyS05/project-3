// models/employees.js
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      // define association here
    }

    static async hashPassword(password) {
      const saltRounds = 10;
      return await bcrypt.hash(password, saltRounds);
    }

    async comparePassword(password) {
      return await bcrypt.compare(password, this.password_hash);
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
      hooks: {
        beforeCreate: async (employee) => {
          if (employee.password_hash) {
            employee.password_hash = await Employee.hashPassword(
              employee.password_hash
            );
          }
        },
        beforeUpdate: async (employee) => {
          if (employee.password_hash) {
            employee.password_hash = await Employee.hashPassword(
              employee.password_hash
            );
          }
        },
      },
    }
  );

  return Employee;
};
