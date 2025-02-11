"use client";
import React from "react";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import SideBarList from "./SideBarList";
import { componentsList, sectionsList } from "@/app/constants/componentsList";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex flex-col gap-5 sticky top-0 p-5 h-[calc(100vh_-_75px)] overflow-y-scroll no-scrollbar text-sm">
      <Link href="/components">
        <h4 className={pathname === "/components" ? "text-primary" : ""}>
          <LayersOutlinedIcon />
          All Components
        </h4>
      </Link>
      <div>
        <h4 className="text-grayText">Sections</h4>
        <SideBarList list={sectionsList} pathname={pathname} />
      </div>
      <div>
        <h4 className="text-grayText">Components</h4>
        <SideBarList list={componentsList} pathname={pathname} />
      </div>
    </div>
  );
};

export default SideBar;
