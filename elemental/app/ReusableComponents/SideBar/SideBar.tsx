import React from "react";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import SideBarList from "./SideBarList";
import { componentsList, sectionsList } from "@/app/constants/componentsList";

const SideBar = () => {
  return (
    <div className="hidden md:flex flex-col gap-2 sticky top-0 p-5 h-[calc(100vh_-_75px)] overflow-y-scroll no-scrollbar text-sm">
      <h4 className="">
        <LayersOutlinedIcon />
        All Components
      </h4>
      <h4 className="">Sections</h4>
      <SideBarList list={sectionsList} />
      <h4 className="">
        <GridViewIcon />
        Components
      </h4>
      <SideBarList list={componentsList} />
    </div>
  );
};

export default SideBar;
