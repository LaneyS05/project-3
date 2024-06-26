require("dotenv").config();
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Express Settings
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

// Import Sequelize and Models
const db = require("./models");
db.sequelize.sync();

// Route to fetch user data
const User = require("./controllers/User");
app.get("/api/User", User.getCurrentUser);
app.get("/api/User/logout", User.logoutUser);

// Controllers
const employeesRouter = require("./controllers/employees");
const authRouter = require("./controllers/auth");
const orderRouter = require("./controllers/orders");
const customerRouter = require("./controllers/customer");
const signupAuthRouter = require("./controllers/create");

// Routes
app.use("/employees", employeesRouter);
app.use("/auth", authRouter);
app.use("/orders", orderRouter);
app.use("/customers", customerRouter);
app.use("/auth/employees", signupAuthRouter);

// Listen
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
