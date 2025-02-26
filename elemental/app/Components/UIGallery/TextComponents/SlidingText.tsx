import React from "react";
import "@/app/Styles/UIGallery/SlidingText.css"
const SlidingText = () => {
  return (
    <div className="sliding-container">
      <div className="sliding-loader">
        <p>I am a</p>
        <div className="sliding-words">
          <span className="sliding-word">UX designer</span>
          <span className="sliding-word">Frontend Developer</span>
          <span className="sliding-word">Backend Developer</span>
          <span className="sliding-word">UX designer</span>
        </div>
      </div>
    </div>
  );
};

export default SlidingText;
