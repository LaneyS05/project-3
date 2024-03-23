import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import EmployeeLogin from "./Login";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <Router>
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<EmployeeLogin />} />
        {/* Add more routes for other pages */}
      </Routes>
    </ContextProvider>
  </Router>,
  document.getElementById("root")
);
