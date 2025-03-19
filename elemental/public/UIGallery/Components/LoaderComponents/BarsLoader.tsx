import React from "react";

const BarsLoader = () => {
  const animationStyleDelay1 = {
    animation: "barShrinkAndGrow 1s 250ms linear infinite",
  };
  const animationStyleDelay2 = {
    animation: "barShrinkAndGrow 1s linear infinite",
  };

  return (
    <div className="flex gap-1 items-center h-15">
      <style>
        {`
          @keyframes barShrinkAndGrow {
            0% { height:100% }
            50%  { height:0px }
            100%  { height:100% }
          }
        `}
      </style>
      <div
        className="w-2 h-9 bg-blue-300 rounded-full"
        style={animationStyleDelay2}
      ></div>
      <div
        className="w-2 h-12 bg-blue-300 rounded-full"
        style={animationStyleDelay1}
      ></div>
      <div 
        className="w-2 h-15 bg-blue-300 rounded-full"
        style={animationStyleDelay2}
      ></div>
      <div
        className="w-2 h-12 bg-blue-300 rounded-full"
        style={animationStyleDelay1}
      ></div>
      <div
        className="w-2 h-9 bg-blue-300 rounded-full"
        style={animationStyleDelay2}
      ></div>
    </div>
  );
};

export default BarsLoader;
