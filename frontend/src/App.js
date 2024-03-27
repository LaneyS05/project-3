import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Line,
  Customers,
  Kanban,
  Area,
  Pie,
  Financial,
} from "./pages";
import EmployeeLogin from "./EmployeeLogin";
import EmployeeSignup from "./SignUp";
import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  const location = useLocation();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/signup";
  const showNavbar = !(isLoginPage || isSignupPage);

  // Setting activeMenu based on showNavbar
  const activeMenu = showNavbar ? true : false;

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : null}

        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          {showNavbar && (
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar className="navbar" />
            </div>
          )}
          <div>
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Route for login/signup */}
              <Route path="/" element={<EmployeeLogin />} />
              <Route path="/login" element={<EmployeeLogin />} />
              <Route path="/signup" element={<EmployeeSignup />} />

              {/* dashboard  */}
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/calendar" element={<Calendar />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
            </Routes>
          </div>
          <Footer className="footer" />
        </div>
      </div>
    </div>
  );
};

export default App;
