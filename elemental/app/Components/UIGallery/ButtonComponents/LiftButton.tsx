import React from "react";

const LiftButton = () => {
  return (
    <a
      className="block border-2 border-black w-1/2 p-5 text-center font-semibold uppercase text-primary bg-lightBg transition-all duration-200 transform hover:translate-x-[10px] hover:-translate-y-[10px] hover:[box-shadow:-10px_10px_0_#000] "
      href="#"
    >
      Hover Me!
    </a>
  );
};

export default LiftButton;
