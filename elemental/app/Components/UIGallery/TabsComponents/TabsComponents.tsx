import React from "react";
import UIGalleryComponent from "@/app/Components/UIGallery/UIGalleryComponent";
import { SlidingTabSelector } from "./SlidingTabSelector";

const TabsComponent = () => {
  return (
    <>
      <UIGalleryComponent title="Sliding Tab Selector">
        <SlidingTabSelector />
      </UIGalleryComponent>
    </>
  );
};

export default TabsComponent;
