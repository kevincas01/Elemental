"use client";
import React, { useRef } from "react";
import "@/app/Styles/UIGallery/Envelope.css"
const Envelope = () => {
  const toppRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    setTimeout(() => {
      if (toppRef.current) toppRef.current.style.zIndex = "10";
    }, 0);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (toppRef.current) toppRef.current.style.zIndex = "20";
    }, 0);
  };
  return (
    <div
      className="envelope-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="envelope-card-main">
        <button className="envelope-seal">HOVER</button>
        <div ref={toppRef} className="envelope-top" />
        <div className="envelope-card-content">
          <p>Elemental</p>
        </div>
        <div className="envelope-side envelope-left" />
        <div className="envelope-side envelope-right" />
        <div className="envelope-bottom" />
      </div>
    </div>
  );
};

export default Envelope;
