import { Metadata } from "next";
import React, { ReactNode } from "react";
import SideBar from "../ReusableComponents/SideBar/SideBar";

export const metadata: Metadata = {
  title: "Components",
  description:
    "Elemental is a showcase of reusable UI components, featuring interactive demos and code snippets for developers.",
};
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-[190px_auto] relative h-full">
      <SideBar />
      <div className="flex flex-col gap-1 sticky top-0 p-5 h-[calc(100vh_-_75px)] overflow-y-scroll no-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default Layout;
