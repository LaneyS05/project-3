import React, { useState, useEffect } from "react";
import axios from "axios";
const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  // Function to fetch current user's name
  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get("/api/user/current");
      setCurrentUser(response.data.user.name);
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };
  // Function to handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/user/logout");
      // Redirect to login page or perform any necessary action after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  useEffect(() => {
    // Fetch current user's name when the component mounts
    fetchCurrentUser();
  }, []);
  return (
    <div>
      <h2>Welcome, {currentUser || "Guest"}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default UserProfile;
