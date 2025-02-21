"use client";
import React, { Dispatch, SetStateAction, useRef, useState } from "react";

const TABS = ["Home", "Docs", "Templates", "Code"];

type Position = {
  left: number;
  width: number;
  opacity: number;
};

export const SlidingTabSelector = () => (
  <div className="h-48 w-full flex flex-col justify-center items-center">
    <SlideTabs />
  </div>
);

const SlideTabs = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => setPosition((prev) => ({ ...prev, opacity: 0 }))}
      className="relative mx-auto flex w-fit rounded-full border border-black bg-primary p-1"
    >
      {TABS.map((tab) => (
        <Tab key={tab} label={tab} setPosition={setPosition} />
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({
  label,
  setPosition,
}: {
  label: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const handleMouseEnter = () => {
    if (!ref.current) return;
    const { width } = ref.current.getBoundingClientRect();
    setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
  };

  return (
    <li
      ref={ref}
      onMouseEnter={handleMouseEnter}
      className="relative z-10 block mix-blend-difference cursor-pointer px-3 py-1.5 uppercase text-primary md:px-5 md:py-3 md:text-lg font-normal text-nowrap"
    >
      {label}
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => (
  <div
    className="absolute z-0 h-9 rounded-full top-1/2 -translate-y-1/2 bg-black md:h-12 transition-all duration-300 ease-in-out"
    style={{
      left: `${position.left}px`,
      width: `${position.width}px`,
      opacity: position.opacity,
    }}
  />
);
