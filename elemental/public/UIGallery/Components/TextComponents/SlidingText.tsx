import React from "react";
import "@/app/Styles/UIGallery/SlidingText.css"
const SlidingText = () => {
  return (
    <div className="sliding-container">
      <div className="sliding-loader">
        <p>loading</p>
        <div className="sliding-words">
          <span className="sliding-word">buttons</span>
          <span className="sliding-word">forms</span>
          <span className="sliding-word">switches</span>
          <span className="sliding-word">cards</span>
          <span className="sliding-word">buttons</span>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
