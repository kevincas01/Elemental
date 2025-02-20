"use client";
import React, { useEffect, useRef, useState } from "react";
import ToggleThemeSwitch from "@/app/Components/Header/ToggleThemeSwitch";
import Link from "next/link";
import RevealText from "../UIGallery/TextComponents/RevealText";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [mobileToggled, setMobileToggled] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

  // Handle clicks outside of the header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileToggled(false);
      }
    };

    if (mobileToggled) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileToggled]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 flex justify-between w-full px-5 h-[75px] items-center z-50 bg-lightBg dark:bg-darkBg`}
    >
      <Link href={"/"} className="flex flex-col">
        <RevealText text="Elemental" />
      </Link>

      <div
        className="block sm:hidden"
        onClick={() => setMobileToggled((prev) => !prev)}
      >
        <MenuIcon sx={{ fontSize: "30px" }} />
      </div>

      <div
        className={`absolute sm:static sm:h-fit ${
          mobileToggled ? "h-fit p-5" : "h-0"
        } w-full sm:w-fit overflow-hidden sm:p-0 flex sm:flex-row flex-col bg-lightBg dark:bg-darkBg sm:bg-transparent top-[75px] sm:top-0 left-0 sm:flex gap-2 items-center font-normal text-sm sm:text-lg transition-[height] duration-1000`}
      >
        <Link href={"/components"}>Components</Link>
        <Link
          href={"/components"}
          className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-darkBg text-darkTextContrast dark:bg-lightBg dark:text-lightTextContrast gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] h-10 px-4 sm:px-5"
        >
          Get Started
        </Link>
        <ToggleThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
