import React, { ReactNode } from "react";
import WetPaintButton from "../UIGallery/ButtonComponents/WetPaintButton";
import LinksHoverCard from "../UIGallery/CardComponents/LinksHoverCard";
import SlideRevealCard from "../UIGallery/CardComponents/SlideRevealCard";
import RevealText from "../UIGallery/TextComponents/RevealText";
import LiftButton from "../UIGallery/ButtonComponents/LiftButton";
import LinksRevealCard from "../UIGallery/CardComponents/LinksRevealCard";
import BubbleCard from "../UIGallery/CardComponents/BubbleCard";
import FlipCard from "../UIGallery/CardComponents/FlipCard";
import SlidingText from "../UIGallery/TextComponents/SlidingText";
import ZoomOutProfile from "../UIGallery/CardComponents/ZoomOutProfile";
import LinkExpandCircle from "../UIGallery/OtherComponents/LinkExpandCircle";
import BallBounceLoader from "../UIGallery/LoaderComponents/BallBounceLoader";
import HexagonPulseLoader from "../UIGallery/LoaderComponents/HexagonPulseLoader";
import BoxGridLoader from "../UIGallery/LoaderComponents/BoxGridLoader";
import PendulumSwingLoader from "../UIGallery/LoaderComponents/PendulumSwingLoader";
import FlipTextButton from "../UIGallery/ButtonComponents/FlipTextButton";
import TabGlider from "../UIGallery/TabsComponents/TabGlider";

const ComponentsPreviewGallery = () => {
  return (
    <div className="w-full overflow-hidden flex flex-col items-center justify-center gap-4">
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
      </div>
      <div className="pl-[275px] grid-cols-[repeat(8,_275px)] grid gap-4 overflow-visible">
        <div></div>
        <GalleryComponent>
          <ZoomOutProfile />
        </GalleryComponent>
        <GalleryComponent>
          <LinksRevealCard />
        </GalleryComponent>
        <GalleryComponent>
          <BubbleCard />
        </GalleryComponent>
        <GalleryComponent>
          <SlideRevealCard />
        </GalleryComponent>
        <GalleryComponent>
          <LinkExpandCircle />
        </GalleryComponent>
      </div>
      <div className="grid-cols-[repeat(8,_275px)] grid gap-4 overflow-visible">
        <div></div>
        <GalleryComponent>
          <FlipTextButton />
        </GalleryComponent>
        <GalleryComponent>
          <PendulumSwingLoader />
        </GalleryComponent>
        <GalleryComponent>
          <HexagonPulseLoader />
        </GalleryComponent>
        <GalleryComponent>
          <BallBounceLoader />
        </GalleryComponent>
        <GalleryComponent>
         <BoxGridLoader/>
        </GalleryComponent>
        <GalleryComponent>
          <TabGlider />
        </GalleryComponent>

        <div></div>
      </div>
    </div>
  );
};

const GalleryComponent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 bg-lightSecondaryBg dark:bg-darkSecondaryBg rounded-lg flex flex-col justify-center items-center ">
      {children}
    </div>
  );
};

export default ComponentsPreviewGallery;
