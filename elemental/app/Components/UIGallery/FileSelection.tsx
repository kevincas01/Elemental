import { File, FileGroup } from "@/app/Types/files";
import React, { Dispatch, SetStateAction } from "react";
interface FileSelectionProps {
  selectedGroupIndex: number;
  selectedFile: File | null;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  fileGroups: FileGroup[];
}
const FileSelection = ({
  selectedGroupIndex,
  selectedFile,
  setSelectedFile,
  fileGroups,
}: FileSelectionProps) => {
  return (
    <div className="flex w-full sticky top-0">
      {fileGroups[selectedGroupIndex].files.map((file) => (
        <button
          key={file.path}
          onClick={() => setSelectedFile(file)}
          className={`p-3 ${
            selectedFile?.path === file.path ? "bg-primary" : "cursor-pointer"
          }`}
        >
          {file.title}
        </button>
      ))}
    </div>
  );
};

export default FileSelection;
