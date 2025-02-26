"use client";
import React, { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleDarkSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div
        className={`relative w-14 h-7 flex justify-around items-center cursor-pointer `}
        onClick={toggleTheme}
      >
        <input
          type="checkbox"
          name="darkMode"
          checked={isDarkMode}
          onChange={toggleTheme}
          className={` absolute w-full h-full rounded-full mix-blend-difference bg-white border-2 ${isDarkMode ? "border-white" : "border-white"} cursor-pointer transition-colors duration-400`}
        />
        <span
          className={`absolute top-0 left-0 h-full aspect-square rounded-full ${
            isDarkMode ? "bg-black" : "bg-white"
          } transition-transform duration-200 ${
            isDarkMode ? "translate-x-full " : ""
          }`}
        ></span>
        <LightModeIcon
          fontSize="inherit"
          sx={{
            zIndex: 20,
            color: "black",
            opacity: isDarkMode ? 0.3 : 1,
          }}
        />
        <DarkModeIcon
          fontSize="inherit"
          sx={{
            zIndex: 20,
            color: "white",
            opacity: isDarkMode ? 1 : 0.3,
          }}
        />
      </div>
    </div>
  );
};

export default ToggleDarkSwitch;
