import React from "react";
import WetPaintButton from "./ButtonComponents/WetPaintButton";

import BubbleCard from "./CardComponents/BubbleCard";
import Envelope from "./CardComponents/Envelope";
import LinksHoverCard from "./CardComponents/LinksHoverCard";
import LinksRevealCard from "./CardComponents/LinksRevealCard";
import SlideRevealCard from "./CardComponents/SlideRevealCard";

const ComponentsPreviewGallery = () => {
  return (
    <div className="w-full">
      <div className="grid-cols-[repeat(10,_274px)] grid grid-flow-col content-stretch auto-cols-auto gap-3.5 justify-center items-stretch mb-3.5 overflow-visible">
        <div></div>
        <div></div>
        <div></div>
        <div className=" bg-lightSecondaryBg dark:bg-darkSecondaryBg  p-10 rounded-lg grid place-content-center">
          <WetPaintButton />
        </div>
        <div className=" bg-lightSecondaryBg dark:bg-darkSecondaryBg  rounded-lg grid place-content-center">
          <LinksHoverCard />
        </div>
        <div className=" bg-lightSecondaryBg dark:bg-darkSecondaryBg  p-10 rounded-lg grid place-content-center">
          <SlideRevealCard />
        </div>
        <div className=" bg-lightSecondaryBg dark:bg-darkSecondaryBg  p-10 rounded-lg grid place-content-center">
          <BubbleCard />
        </div>
      </div>
    </div>
  );
};

export default ComponentsPreviewGallery;
