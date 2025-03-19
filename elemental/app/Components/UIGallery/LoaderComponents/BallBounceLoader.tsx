import React from "react";

import "@/app/Styles/UIGallery/BallBounceLoader.css";
const BallBounceLoader = () => {
  return (
    <div className="ball-bounce-loader">
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>
    </div>
  );
};

export default BallBounceLoader;
