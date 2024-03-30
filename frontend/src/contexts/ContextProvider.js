import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentUser, setCurrentUser] = useState(null)

  // Fetch current user information
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get("http://localhost:8001/api/User");
        setCurrentUser(response.data.name);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

  //theme setting
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  //Set theme/color to the last theme used and store it locally
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider value={{
      currentColor,
      currentMode,
      activeMenu,
      screenSize,
      setScreenSize,
      handleClick,
      isClicked,
      initialState,
      setIsClicked,
      setActiveMenu,
      setCurrentColor,
      setCurrentMode,
      setMode,
      setColor,
      themeSettings,
      setThemeSettings,
      currentUser,
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);