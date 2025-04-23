import { File, FileGroup } from "@/app/Types/files";
import React, { Dispatch, SetStateAction } from "react";
interface FileSelectionProps {
  selectedFileGroupIndex: number;
  selectedFileIndex: number;
  setSelectedFileIndex: Dispatch<SetStateAction<number>>;
  fileGroups: FileGroup[];
}
const FileSelection = ({
  selectedFileGroupIndex,
  selectedFileIndex,
  setSelectedFileIndex,
  fileGroups,
}: FileSelectionProps) => {
  return (
    <div className="flex w-full sticky top-0">
      {fileGroups[selectedFileGroupIndex].files.map((file, index) => (
        <button
          key={file.path}
          onClick={() => setSelectedFileIndex(index)}
          className={`p-3 ${
            selectedFileIndex === index ? "bg-primary" : "cursor-pointer"
          }`}
        >
          {file.title}
        </button>
      ))}
    </div>
  );
};

export default FileSelection;
