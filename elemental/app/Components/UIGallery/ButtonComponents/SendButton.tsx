import React from "react";
import SendIcon from "@mui/icons-material/Send";
const SendButton = () => {
  return (
    <button className="group cursor-pointer py-3 text-white font-bold bg-indigo-500 rounded-2xl flex justify-center overflow-hidden w-30 gap-1">
      <div className="-rotate-45 -translate-y-0.5 group-hover:rotate-0 group-hover:translate-x-7 group-hover:translate-y-0 group-hover:scale-130 transition-all duration-300 ease-in-out">
        <SendIcon />
      </div>
      <span className="text-lg group-hover:translate-x-20 transition-all duration-300 ease-in-out">
        Send
      </span>
    </button>
  );
};

export default SendButton;
