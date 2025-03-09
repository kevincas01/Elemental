import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const LinkExpandCircle = () => {
  return (
    <div className="relative group h-fit aspect-square transition-all duration-500 rounded-full flex flex-col justify-center items-center text-3xl ">
      <div className="absolute z-20 bg-[#ececec] rounded-full p-3">
        <button className="p-4 w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
          <span className="text-black">
            <ShareIcon fontSize="inherit" />
          </span>
        </button>
      </div>

      <div
        className="z-10 absolute h-[90px] min-h-0 group-hover:h-[200px] aspect-square overflow-hidden rounded-full flex flex-col gap-0 group-hover:gap-3 justify-center items-center delay-0"
        style={{ transition: "height 500ms, gap 600ms ease-in " }}
      >
        <div className="flex gap-0 group-hover:gap-3 transition-all duration-300 ease-in group-hover:delay-300">
          <button className="relative box-border cursor-pointer w-[90px] pl-3 pt-3 aspect-square  bg-white rounded-tl-full  transition-all duration-600 ease-in-out origin-bottom-right scale-0 group-hover:scale-100 hover:scale-110 hover:bg-[#cc39a4] text-[#cc39a4] hover:text-white">
            <InstagramIcon fontSize="inherit" />
          </button>

          <button className=" box-border cursor-pointer w-[90px] pr-3 pt-3 aspect-square  bg-white rounded-tr-full  transition-all duration-600 ease-in-out origin-bottom-left scale-0 group-hover:scale-100 hover:scale-110 hover:bg-[#03A9F4] text-[#03A9F4] hover:text-white">
            <FacebookIcon fontSize="inherit" />
          </button>
        </div>

        <div className="flex gap-0 group-hover:gap-3 transition-all duration-300 ease-in group-hover:delay-300">
          <button className="box-border cursor-pointer w-[90px] pl-3 pb-3 aspect-square  bg-white rounded-bl-full transition-all duration-600 ease-in-out origin-top-right scale-0 group-hover:scale-100 hover:scale-110 hover:bg-black text-black hover:text-white">
            <GitHubIcon fontSize="inherit" />
          </button>

          <button className="box-border cursor-pointer w-[90px] pr-3 pb-3 aspect-square  bg-white rounded-br-full  transition-all duration-600 ease-in-out origin-top-left scale-0 group-hover:scale-100 hover:scale-110 hover:bg-[#0077B5] text-[#0077B5] hover:text-white">
            <LinkedInIcon fontSize="inherit" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkExpandCircle;
