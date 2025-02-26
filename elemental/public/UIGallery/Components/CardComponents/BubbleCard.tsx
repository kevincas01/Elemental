import React from "react";

const BubbleCard = () => {
  return (
    <div className="group w-60 aspect-3/4 bg-black rounded-3xl relative overflow-hidden ">
      <div className="z-5 rounded-full w-32 h-44 bg-red-200 group-hover:h-[150%] group-hover:w-[150%] absolute -top-28 -left-14 transition-all duration-500"></div>
      <div className="z-5 text-2xl rounded-full rounded-b-3xl w-full h-full aspect-square bg-red-200 absolute -bottom-[80%] -right-[65%] group-hover:bottom-0 group-hover:right-0 transition-all duration-600 flex justify-center items-center text-center origin-bottom-right">
        <p className="text-red-400 font-semibold">Welcome To Elemental</p>
      </div>

      <div className="w-full h-full bg-black uppercase z-5 font-bold text-6xl flex justify-center items-center text-center">
        <p className="text-red-200">Hover Me</p>
      </div>
    </div>
  );
};

export default BubbleCard;
