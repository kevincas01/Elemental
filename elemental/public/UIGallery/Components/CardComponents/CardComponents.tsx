
import UIGalleryComponent from "../UIGalleryComponent";
import BubbleCard from "./BubbleCard";
import FlipCard from "./FlipCard";
import LinksHoverCard from "./LinksHoverCard";


const CardComponents = () => {
  return (
    <>
      <UIGalleryComponent title="Bubble Card">
        <BubbleCard />
      </UIGalleryComponent>
      <UIGalleryComponent title="Flip Card">
        <FlipCard />
      </UIGalleryComponent>
      <UIGalleryComponent title="Links Hover Card">
        <LinksHoverCard />
      </UIGalleryComponent>
    </>
  );
};

export default CardComponents;
