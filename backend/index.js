require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Express Settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Import Sequelize and Models
const db = require("./models");
db.sequelize.sync(); // Sync models with database

// Controllers
const employeesRouter = require("./controllers/employees");
const authRouter = require("./controllers/auth");

// Routes
app.use("/employees", employeesRouter);
app.use("/auth", authRouter); // Use auth router for authentication

// Listen for Connections
app.listen(process.env.PORT, () => {
  console.log(`Listening on ${process.env.PORT}`);
});
