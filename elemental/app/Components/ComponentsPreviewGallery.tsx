import React, { ReactNode } from "react";
import WetPaintButton from "./UIGallery/ButtonComponents/WetPaintButton";

import LinksHoverCard from "./UIGallery/CardComponents/LinksHoverCard";
import SlideRevealCard from "./UIGallery/CardComponents/SlideRevealCard";
import RevealText from "./UIGallery/TextComponents/RevealText";
import LiftButton from "./UIGallery/ButtonComponents/LiftButton";
import LinksRevealCard from "./UIGallery/CardComponents/LinksRevealCard";
import BubbleCard from "./UIGallery/CardComponents/BubbleCard";
import FlipCard from "./UIGallery/CardComponents/FlipCard";
import SlidingText from "./UIGallery/TextComponents/SlidingText";

const ComponentsPreviewGallery = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center">
      <div className="grid-cols-[repeat(8,_275px)] grid gap-4 overflow-visible">
        <div></div>
        <GalleryComponent>
          <SlidingText />
        </GalleryComponent>
        <GalleryComponent>
          <WetPaintButton />
        </GalleryComponent>
        <GalleryComponent>
          <LinksHoverCard />
        </GalleryComponent>
        <GalleryComponent>
          <LiftButton />
        </GalleryComponent>
        <GalleryComponent>
          <RevealText text={"Elemental"} />
        </GalleryComponent>
        <GalleryComponent>
          <FlipCard />
        </GalleryComponent>

        <div></div>
        <div></div>
      </div>
      <div className="pl-[275px] grid-cols-[repeat(8,_275px)] grid gap-4 overflow-visible">
        <div></div>
        <div></div>
        <GalleryComponent>
          <LinksRevealCard />
        </GalleryComponent>
        <GalleryComponent>
          <BubbleCard />
        </GalleryComponent>
        <GalleryComponent>
          <SlideRevealCard />
        </GalleryComponent>
      </div>
    </div>
  );
};

const GalleryComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-5 bg-lightSecondaryBg dark:bg-darkSecondaryBg rounded-lg flex flex-col justify-center items-center ">
      {children}
    </div>
  );
};

export default ComponentsPreviewGallery;
