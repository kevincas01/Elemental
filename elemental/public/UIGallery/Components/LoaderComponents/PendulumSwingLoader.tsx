import React from "react";
import "@/app/Styles/UIGallery/PendulumSwingLoader.css";

const PendulumSwingLoader = () => {
  return (
    <div className="pendulum-swing-loader">
      <div className="pendulum">
        <div className="pendulum-ball"></div>
      </div>
      <div className="pendulum">
        <div className="pendulum-ball"></div>
      </div>
      <div className="pendulum">
        <div className="pendulum-ball"></div>
      </div>
      <div className="pendulum">
        <div className="pendulum-ball"></div>
      </div>
      <div className="pendulum">
        <div className="pendulum-ball"></div>
      </div>
    </div>
  );
};

export default PendulumSwingLoader;
