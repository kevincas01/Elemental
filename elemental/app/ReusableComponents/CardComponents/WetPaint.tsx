import React from "react";

const WetPaint = () => {
  return (
    <div className="relative rounded-md bg-primary px-5 py-2 font-extrabold text-white">
      <span className="z-30">Wet Paint Button</span>
      <div className="z-20 absolute box-border left-[20%] rounded-b-full origin-top bottom-1 ">
        <div className="absolute origin-top top-1 -left-[10px]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 0 L 100 0 L 100 50 A 50 50 0 0 0 50 0"
              fill="#f55aa8"
            />
          </svg>
        </div>
        <div
          style={{ animationDelay: "3s" }}
          className="absolute box-border w-2 h-5 bg-primary rounded-full origin-top animate-drip"
        />
        <div
          style={{ animationDelay: "3s" }}
          className="absolute box-border w-2 aspect-square bg-primary rounded-full origin-top animate-dripBubbleDown"
        />
        <div className="absolute origin-top top-1 left-[8px]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 0 L 0 0 L 0 50 A 50 50 0 0 1 50 0" fill="#f55aa8" />
          </svg>
        </div>
      </div>
      <div className="z-20 absolute box-border left-[40%] rounded-b-full origin-top bottom-3 ">
        <div className="absolute origin-top top-3 -left-[10px]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 0 L 100 0 L 100 50 A 50 50 0 0 0 50 0"
              fill="#f55aa8"
            />
          </svg>
        </div>
        <div
          style={{ animationDelay: "2s" }}
          className="absolute box-border w-2 h-5 bg-primary rounded-full origin-top animate-drip"
        />
        <div
          style={{ animationDelay: "2s" }}
          className="absolute box-border w-2 aspect-square bg-primary rounded-full origin-top animate-dripBubbleDown"
        />
        <div className="absolute origin-top top-3 left-[8px]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 0 L 0 0 L 0 50 A 50 50 0 0 1 50 0" fill="#f55aa8" />
          </svg>
        </div>
      </div>
     
      <div className="z-20 absolute box-border left-[60%] rounded-full origin-top bottom-0  ">
        <div className="absolute origin-top  -left-[10px]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 0 L 100 0 L 100 50 A 50 50 0 0 0 50 0"
              fill="#f55aa8"
            />
          </svg>
        </div>
        <div  style={{ animationDelay: "0s" }} className="absolute box-border w-2 h-5 bg-primary rounded-b-full origin-top animate-drip" />
        <div  style={{ animationDelay: "0s" }} className="absolute box-border w-2 aspect-square bg-primary rounded-full origin-top animate-dripBubbleDown" />
        <div className="absolute origin-top  left-[8px]">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 0 L 0 0 L 0 50 A 50 50 0 0 1 50 0" fill="#f55aa8" />
          </svg>
        </div>
      </div>

      <div className="z-20 absolute box-border left-[80%] rounded-full origin-top bottom-2  ">
        <div className="absolute origin-top -left-[10px] top-2">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 0 L 100 0 L 100 50 A 50 50 0 0 0 50 0"
              fill="#f55aa8"
            />
          </svg>
        </div>
        <div  style={{ animationDelay: "4s" }} className="absolute box-border w-2 h-5 bg-primary rounded-b-full origin-top animate-drip" />
        <div  style={{ animationDelay: "4s" }} className="absolute box-border w-2 aspect-square bg-primary rounded-full origin-top animate-dripBubbleDown" />
        <div className="absolute origin-top left-[8px] top-2">
          <svg
            width="10"
            height="10"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 50 0 L 0 0 L 0 50 A 50 50 0 0 1 50 0" fill="#f55aa8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WetPaint;
