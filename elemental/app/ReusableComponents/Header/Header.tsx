import ToggleThemeSwitch from "@/app/ReusableComponents/ToggleThemeSwitch";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 flex justify-between w-full px-10 h-[75px] items-center bg-lightBg dark:bg-darkBg z-50">
      <Link href={"/"} className="">
        <p className="font-extrabold text-2xl text-primary">Elemental</p>
      </Link>

      <div className="flex gap-5 items-center">
        <Link href={"/components"} className="">
          Components
        </Link>
        <Link
          href={"/components"}
          className="rounded-xl border border-solid border-transparent transition-colors flex items-center justify-center bg-darkBg text-darkTextContrast dark:bg-lightBg  dark:text-lightTextContrast gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Get Started
        </Link>
        <ToggleThemeSwitch />
      </div>
    </header>
  );
};

export default Header;
