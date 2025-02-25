import React, { Dispatch, SetStateAction } from "react";

interface UITabSelectionProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<"view" | "code">>;
}
const UITabSelection = ({ activeTab, setActiveTab }: UITabSelectionProps) => {
  return (
    <div className="flex">
      <button
        className={`px-4 py-2 cursor-pointer ${
          activeTab === "view"
            ? "border-b-3 border-primary text-primary"
            : "text-grayText"
        }`}
        onClick={() => setActiveTab("view")}
      >
        View
      </button>
      <button
        className={`px-4 py-2 cursor-pointer ${
          activeTab === "code"
            ? "border-b-3 border-primary text-primary"
            : "text-grayText"
        }`}
        onClick={() => setActiveTab("code")}
      >
        Code
      </button>
    </div>
  );
};

export default UITabSelection;
