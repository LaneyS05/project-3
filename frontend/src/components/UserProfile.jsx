import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const { currentUser } = useStateContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8001/api/User/logout");

      navigate("/login");
      console.log("Logout successful");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h2>Welcome, {currentUser || "Guest"}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
