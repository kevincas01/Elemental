import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const LinkExpandCircle = () => {
  return (
    <div className="relative group h-[90px] hover:h-[200px] aspect-square transition-all duration-500 rounded-full flex flex-col justify-center items-center text-3xl ">
      <button className="p-4 group-hover:opacity-0 transition-all duration-300 group-hover:delay-100 delay-200 absolute w-[90px] h-[90px] bg-white rounded-full  flex items-center justify-center ease-in-out">
        <span className="text-black">
          <ShareIcon fontSize="inherit" />
        </span>
      </button>

      <div
        className="absolute h-[90px] min-h-0 group-hover:h-[200px] aspect-square overflow-hidden rounded-full flex flex-col gap-0 group-hover:gap-3 justify-center items-center"
      style={{transition:"height 500ms, gap 500ms ease-in"}}
      >
        <div className="flex gap-0 group-hover:gap-3 transition-all duration-500 ease-in">
          <button className="relative box-border cursor-pointer w-[90px] pl-4 pt-4 aspect-square  bg-white rounded-tl-full  transition-all duration-600 ease-in-out origin-bottom-right scale-0 group-hover:scale-100 hover:scale-110 hover:bg-[#cc39a4] text-[#cc39a4] hover:text-white">
            <InstagramIcon fontSize="inherit" />
          </button>

          <button className=" box-border cursor-pointer w-[90px] pr-4 pt-4 aspect-square  bg-white rounded-tr-full  transition-all duration-600 ease-in-out origin-bottom-left scale-0 group-hover:scale-100 hover:scale-110 hover:bg-[#03A9F4] text-[#03A9F4] hover:text-white">
            <FacebookIcon fontSize="inherit" />
          </button>
        </div>

        <div className="flex gap-0 group-hover:gap-3 transition-all duration-500 ease-in">
          <button className="box-border cursor-pointer w-[90px] pl-4 pb-4 aspect-square  bg-white rounded-bl-full transition-all duration-600 ease-in-out origin-top-right scale-0 group-hover:scale-100 hover:scale-110 hover:bg-black text-black hover:text-white">
            <GitHubIcon fontSize="inherit" />
          </button>

          <button className="box-border cursor-pointer w-[90px] pr-4 pb-4 aspect-square  bg-white rounded-br-full  transition-all duration-600 ease-in-out origin-top-left scale-0 group-hover:scale-100 hover:scale-110 hover:bg-[#0077B5] text-[#0077B5] hover:text-white">
            <LinkedInIcon fontSize="inherit" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkExpandCircle;
