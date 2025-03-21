import React from "react";
import "@/app/Styles/UIGallery/LoadingTextBounce.css";

const LoadingTextBounce = () => {
  return (
    <div className="loading-bounce-loader">
      {Array.from("LOADING").map((char, index) => (
        <span
          key={index}
          className="loading-text-letter"
          style={{ animationDelay: `${(index+1) * 70}ms` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default LoadingTextBounce;
