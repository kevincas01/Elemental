import React from "react";
import RestaurantIcon from "@mui/icons-material/Restaurant";
const FlipCard = () => {
  return (
    <div className="group w-48 h-60 cursor-pointer">
      <div className="h-full w-full rounded-md transform transform-3d group-hover:rotate-y-180 transition-all duration-500 shadow-[0px_0px_10px_1px_#000000ee]">
        <div className="bg-[#151515] absolute w-full h-full backface-hidden [-webkit-backface-visibility:hidden] rounded-md overflow-hidden flex justify-center items-center text-center">
          <div className="absolute block w-[80%] h-[160%] bg-linear-to-r from-transparent via-[#ff8866] to-[transparent] animate-cardRotate"></div>
          <div className="absolute w-[97%] h-[97%] bg-[#151515] text-white flex flex-col justify-center items-center gap-5 text-lg">
            <RestaurantIcon sx={{ fontSize: "60px" }} />
            <strong>Hover Me</strong>
          </div>
        </div>
        <div className="text-white bg-[#151515] absolute w-full h-full backface-hidden [-webkit-backface-visibility:hidden] rotate-y-180 rounded-md overflow-hidden">
          <div className="absolute w-full h-full object-cover">
            <div className="relative w-20 left-0 top-0 aspect-square rounded-full bg-amber-200 filter blur-lg animate-floatUp delay-1000"></div>
            <div className="relative w-32 left-16 top-0 aspect-square rounded-full bg-[#ff8866] filter blur-lg animate-floatUp "></div>
            <div className="relative w-10 left-5 top-0 aspect-square rounded-full bg-[#ff2233] filter blur-lg animate-floatUp"></div>
          </div>
          <div className="absolute w-full h-full flex flex-col justify-between p-3">
            <small className="bg-[#00000055] backdrop-blur-sm w-fit px-5 py-1 rounded-full ">
              Pasta
            </small>
            <div className="p-3 border border-gray-600 rounded-md">
              <div className="justify-between">
                <p className="text-sm">
                  <strong>Spagetti Bolognese</strong>
                </p>
              </div>
              <p className="text-xs mt-2 text-[#ffffff88]">
                30 Mins &nbsp; | &nbsp; 1 Serving
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
