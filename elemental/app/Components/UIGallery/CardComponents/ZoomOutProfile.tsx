import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
const ZoomOutProfile = () => {
  return (
    <div className="group h-[250px] aspect-square rounded-[30px] bg-white relative box-border">
      <div className="absolute inset-0 bg-transparent rounded-[30px] group-hover:rounded-[50%] p-3 overflow-hidden box-border group-hover:top-[5%] group-hover:right-[60%] group-hover:left-[5%] group-hover:z-10 aspect-square transition-all duration-500">
        <Image
          className="group-hover:scale-200 transition-all duration-500 group-hover:delay-500"
          src={
            "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
          }
          alt="Profile image"
          fill
          objectFit="cover"
        ></Image>
      </div>
      <div className="z-5 bg-red-300 rounded-[30px] absolute top-[80%] group-hover:top-[30%] bottom-1 left-1 right-1 px-2 py-2 text-white flex flex-col text-sm box-border group-hover:rounded-tl-[70px] overflow-hidden transition-all duration-500 group-hover:delay-200 delay-0">
        <div className="flex flex-col gap-4 absolute bottom-0 left-8 right-8 h-[150px] ">
          <span className="font-bold text-2xl">My Name!</span>
          <p>This is my introduction! Take the time to get to know me!</p>
        </div>
        <div className="flex justify-between items-center absolute bottom-1.5 left-4 right-4 text-xs">
          <div className="flex gap-2">
            <GitHubIcon />
            <LinkedInIcon />
            <InstagramIcon />
          </div>
          <button className="bg-white text-red-300 rounded-[30px] p-2">
            Contact Me!
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default ZoomOutProfile;
