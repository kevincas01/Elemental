import React from "react";
import "@/app/Styles/UIGallery/SlidingText.css"
const SlidingText = () => {
  return (
    <div className="sliding-container">
      <div className="sliding-loader">
        <p className="text-nowrap">I&rsquo;m a</p>
        <div className="sliding-words">
          <span className="sliding-word">Designer</span>
          <span className="sliding-word">Developer</span>
          <span className="sliding-word">Creator</span>
          <span className="sliding-word">Designer</span>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
