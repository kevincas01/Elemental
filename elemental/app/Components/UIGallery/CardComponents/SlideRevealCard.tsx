import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const SlideRevealCard = () => {
  return (
    <div className="group relative h-68 aspect-3/4 bg-red-100 rounded-xl overflow-hidden">
      <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300 text-3xl font-bold w-full h-full z-10 transition-all duration-400 group-hover:-translate-y-20 flex flex-col justify-center items-center text-center">
        <p>Hover Me</p>
      </div>
      <ul className="absolute w-full bottom-0  flex justify-around">
        <li className="transition-all opacity-0 duration-600 group-hover:duration-300 group-hover:opacity-100 group-hover:-translate-y-25 ">
          <GitHubIcon />
        </li>
        <li className="transition-all opacity-0 duration-600 group-hover:duration-300 group-hover:opacity-100 group-hover:-translate-y-25 delay-0 group-hover:delay-50">
          <LinkedInIcon />
        </li>
      </ul>
      <div className="z-5 h-20 relative transition-all duration-400 group-hover:-translate-y-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl">Name</h1>
        <p className="font-light">Web Dev</p>
      </div>
    </div>
  );
};

export default SlideRevealCard;
