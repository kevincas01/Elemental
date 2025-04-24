import React from "react";

const RevealText = ({ text="Elemental" }: { text?: string }) => {
  return (
    <span className="group font-extrabold text-3xl text-primary relative button uppercase tracking-wider">
      <span className="text-transparent dark:[-webkit-text-stroke:1px_var(--dark-text-contrast)] [-webkit-text-stroke:1px_var(--light-text-contrast)]">
        &nbsp;{text}&nbsp;
      </span>
      <span
        aria-hidden="true"
        className="hover-text [-webkit-text-stroke:1px_var(--primary)] absolute inset-0 box-border text-primary w-0 group-hover:w-full transition-all duration-500 border-r-[6px] border-r-primary overflow-hidden"
      >
        &nbsp;{text}&nbsp;
      </span>
    </span>
  );
};

export default RevealText;
