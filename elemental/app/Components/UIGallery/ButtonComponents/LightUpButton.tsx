import React from "react";
import "@/app/Styles/UIGallery/LightUpButton.css";
const LightUpButton = () => {
  return (
    <div>
      <div className="light-wrapper">
        <div className="light-holder">
          <div className="dot"></div>
          <div className="light"></div>
        </div>
        <button className="light-button">
          <p>CLICK</p>
        </button>
      </div>
    </div>
  );
};

export default LightUpButton;
