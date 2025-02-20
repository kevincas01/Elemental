import React from "react";

const WetPaintButton = () => {
  return (
    <div className="relative rounded-md bg-primary px-5 py-2 font-extrabold text-white">
      <span>Wet Paint Button</span>
      <DrippingPaint animationDelay={5} yOffset={1} leftOffset={20} />
      <DrippingPaint animationDelay={2} yOffset={3} leftOffset={40} />
      <DrippingPaint animationDelay={0} yOffset={0} leftOffset={60} />
      <DrippingPaint animationDelay={3} yOffset={2} leftOffset={80} />
    </div>
  );
};

const DrippingPaint = ({
  animationDelay,
  yOffset = 1,
  leftOffset = 1,
}: {
  animationDelay: number;
  yOffset: number;
  leftOffset: number;
}) => {
  return (
    <div
      className={`group absolute box-border origin-top`}
      style={{
        left: `${leftOffset}%`,
        bottom: `${yOffset}px`,
      }}
    >
      <div className={`absolute origin-top top-${yOffset} -left-[10px]`}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 50 0 L 100 0 L 100 50 A 50 50 0 0 0 50 0" fill="#f55aa8" />
        </svg>
      </div>
      <div
        style={{ animationDelay: `${animationDelay}s` }}
        className="absolute box-border w-2 h-5 bg-primary rounded-b-full origin-top animate-drip"
      />
      <div
        style={{ animationDelay: `${animationDelay}s` }}
        className="absolute box-border w-2 aspect-square bg-primary rounded-full origin-top animate-dripBubbleDown"
      />
      <div className={`absolute origin-top top-${yOffset} left-[8px]`}>
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
  );
};
export default WetPaintButton;
