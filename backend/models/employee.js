const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {}

    async comparePassword(password) {
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
