import React, { useRef, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const ExpandableInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchable, setSearchable] = useState(false);

  const handleClick = () => {
    if (searchable) {
      if (searchInput) return;
      setSearchable(false);
    } else {
      setSearchable(true);
      inputRef.current?.focus();
    }
  };
  return (
    <div className="rounded-full bg-black text-white p-2 max-w-[200px]">
      <input
        ref={inputRef}
        className={`${
          !searchable ? "w-0" : " pl-2 w-[100px]"
        } text-white transition-all duration-200`}
        placeholder="Search"
        type="text"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <span onClick={handleClick} className="cursor-pointer">
        <SearchIcon />
      </span>
    </div>
  );
};

export default ExpandableInput;
