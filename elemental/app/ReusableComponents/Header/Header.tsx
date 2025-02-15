"use client";
import React, { useState } from "react";
import ToggleThemeSwitch from "@/app/ReusableComponents/ToggleThemeSwitch";
import Link from "next/link";
import RevealText from "../TextComponents/RevealText";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [mobileToggled, setMobileToggled] = useState(false);
  return (
    <header
      className={`fixed top-0 flex justify-between w-full px-5 h-[75px] items-center z-50 bg-lightBg dark:bg-darkBg`}
    >
      <Link href={"/"} className="flex flex-col">
        <RevealText />
      </Link>

      <div className="block sm:hidden" onClick={()=>{
        setMobileToggled(prev=>!prev)
      }}>
        <MenuIcon sx={{ fontSize: "30px" }} />
      </div>
      
      <div className={` sm:flex gap-2 items-center font-normal text-sm sm:text-lg }`}>
        <Link href={"/components"} className="">
          Components
        </Link>
        <Link
          href={"/components"}
          className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-darkBg text-darkTextContrast dark:bg-lightBg dark:text-lightTextContrast gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] h-10  px-4 sm:px-5"
        >
          Get Started
        </Link>
        <ToggleThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
