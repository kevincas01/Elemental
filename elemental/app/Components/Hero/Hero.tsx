import React from "react";
import EastIcon from "@mui/icons-material/East";
import CodeIcon from "@mui/icons-material/Code";
const Hero = () => {
  return (
    <div className="flex flex-col gap-10 w-full text-center max-w-[600px]">
      <h1 className="sm:text-7xl text-5xl">Explore Modern UI Components</h1>
      <p className="text-xl text-grayText">
        Browse through our showcase of UI components, including live demos and
        code snippets for modern web development
      </p>
      <div className="flex gap-4 items-center justify-center flex-col sm:flex-row w-full">
        <a
          className="rounded-xl flex items-center justify-center bg-darkBg text-darkTextContrast gap-2 hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
        >
          View Live Demos <EastIcon />
        </a>
        <a
          className="rounded-xl flex items-center justify-center bg-lightBg text-lightTextContrast gap-2 hover:bg-[#f2f2f2] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 "
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          rel="noopener noreferrer"
        >
          <CodeIcon />
          Browse Code Snippets
        </a>
      </div>
    </div>
  );
};

export default Hero;
