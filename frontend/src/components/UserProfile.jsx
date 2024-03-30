import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = async () => {
    try {
      const response = await axios.get('/api/user');
      setCurrentUser(response.data.name);
    } catch (error) {
      console.error('Error fetching current user:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('/api/user/logout');
      // Redirect to login page after logout
      window.location.href = '/Employeelogin'; // Redirect to your login page
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div>
      <h2>Welcome, {currentUser || 'Guest'}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
