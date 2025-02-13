"use client";
import React, { useRef } from "react";
import "../../styles/Envelope.css";

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
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-main">
        <button className="seal">
          HOVER
        </button>
        <div ref={toppRef} className="top"/>
        <div className="card-content">
          <p >
           Elemental
          </p>
        </div>
        <div className="side left" />
        <div className="side right" />
        <div className="bottom" />
      </div>
    </div>
  );
};

export default Envelope;
