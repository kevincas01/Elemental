
'use client'
import { useState, useRef, useEffect, SetStateAction, Dispatch } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FileGroup } from "@/app/Types/files";
interface FileGroupSelectionProps {
  selectedGroupIndex: number;
  setSelectedGroupIndex: Dispatch<SetStateAction<number>>;
  fileGroups: FileGroup[];
}
const FileGroupSelection = ({
  selectedGroupIndex,
  setSelectedGroupIndex,
  fileGroups,
}: FileGroupSelectionProps) => {
  const [showFileGroupSelection, setShowFileGroupSelection] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowFileGroupSelection(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      <div
        className="flex justify-between items-center cursor-pointer border dark:border-darkBgBorder px-2 py-1 text-sm"
        onClick={() => setShowFileGroupSelection(!showFileGroupSelection)}
      >
        {fileGroups[selectedGroupIndex].filegroup}
        <ArrowDropDownIcon />
      </div>

      {showFileGroupSelection && (
        <div className="absolute top-full right-0 mt-1 border dark:border-darkBgBorder bg-lightBg dark:bg-darkSecondaryBg shadow-md text-sm">
          {fileGroups.map((fileGroup, index) => (
            <label
              key={fileGroup.filegroup}
              className="block p-2 cursor-pointer "
            >
              <input
                type="radio"
                value={index}
                checked={selectedGroupIndex === index}
                onChange={() => {
                  setSelectedGroupIndex(index);
                  setShowFileGroupSelection(false);
                }}
                className="hidden"
              />
              {fileGroup.filegroup}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileGroupSelection;
