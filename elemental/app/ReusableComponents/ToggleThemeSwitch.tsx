"use client";
import React, { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ToggleThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative w-14 h-7 flex justify-around items-center mix-blend-difference cursor-pointer`}
      onClick={toggleTheme}
    >
      <input
        type="checkbox"
        name="darkMode"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="settings-checkbox absolute w-full h-full appearance-none rounded-full bg-lightBg dark:bg-darkBg border cursor-pointer transition-colors duration-300"
      />
      <span
        className={`absolute  top-0 left-0 h-full aspect-square rounded-full bg-darkBg dark:bg-lightBg transition-transform duration-300 ${
          isDarkMode ? "translate-x-full " : ""
        }`}
      ></span>
      <LightModeIcon
        fontSize="inherit"
        sx={{
          zIndex: 20,
          color: "white",
          opacity: isDarkMode ? 0.3 : 1,
        }}
      />
      <DarkModeIcon
        fontSize="inherit"
        sx={{
          zIndex: 20,
          color: "black",
          opacity: isDarkMode ? 1 : 0.3,
        }}
      />
    </div>
  );
};

export default ToggleThemeSwitch;
