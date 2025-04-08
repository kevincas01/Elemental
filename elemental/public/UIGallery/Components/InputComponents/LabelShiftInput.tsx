"use client";
import React, { ChangeEvent, FocusEvent, useRef, useState } from "react";

const LabelShiftInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== "");
  };

  const handleLabelClick = () => {
    inputRef.current?.focus();
  };

  const labelClasses =
    "cursor-text text-lg absolute left-4 transition-all duration-300 bg-white px-1 -translate-y-1/2" +
    (isFocused || hasValue ? " top-0  text-sm" : " top-1/2 ");

  return (
    <div className="flex flex-col relative mt-8">
      <label
        htmlFor="username"
        onClick={handleLabelClick}
        className={labelClasses}
      >
        Username
      </label>
      <input
        id="username"
        ref={inputRef}
        type="text"
        name="username"
        required
        className="border-2 border-red-300 focus:border-main focus:outline-none p-2 rounded-md"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
    </div>
  );
};

export default LabelShiftInput;
