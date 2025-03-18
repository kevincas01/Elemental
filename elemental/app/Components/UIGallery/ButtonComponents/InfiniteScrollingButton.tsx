import React from "react";
import "@/app/Styles/UIGallery/InfiniteScrollingButton.css";
const InfiniteScrollingButton = () => {
  return (
    <button className="scrolling-button">
      <span className="scrolling-button-text">Hover</span>
      <span className="scrolling-button-marquee">Click</span>
    </button>
  );
};

export default InfiniteScrollingButton;
