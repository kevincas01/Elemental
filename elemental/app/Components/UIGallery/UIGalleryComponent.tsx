"use client";
import { File, FileGroup } from "@/app/Types/files";
import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import UITabSelection from "./UITabSelection";
import FileGroupSelection from "./FileGroupSelection";
import FileSelection from "./FileSelection";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
interface UIGalleryComponentProps {
  title: string;
  children: React.ReactNode;
  fileGroups?: FileGroup[];
}

const UIGalleryComponent = ({
  title,
  children,
  fileGroups,
}: UIGalleryComponentProps) => {
  const [activeTab, setActiveTab] = useState<"view" | "code">("view");
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (!fileGroups) return;
    setSelectedFile(fileGroups[selectedGroupIndex].files[0]);
  }, [selectedGroupIndex]);

  const syntaxTheme = anOldHope;

  const modifiedTheme = {
    ...syntaxTheme,
    hljs: {
      ...syntaxTheme.hljs,
      background: "transparent",
      padding: "0",
      color: "#6b7280",
    },
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h2 className="md:text-3xl text-lg font-semibold leading-none">
          {title}
        </h2>
        <UITabSelection activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {activeTab === "view" ? (
        <div className="bg-lightSecondaryBg dark:bg-darkSecondaryBg h-96 w-full flex flex-col justify-center items-center py-10 relative">
          {children}
        </div>
      ) : (
        <>
          {/* Code Display */}
          {fileGroups && fileGroups.length > 0 && (
            <div className=" w-full bg-lightBg dark:bg-darkSecondaryBg relative border dark:border-darkBgBorder">
              <div className="flex justify-between text-lightTextContrast dark:text-darkTextContrast bg-lightBg dark:border-b-darkBgBorder dark:bg-darkSecondaryBg border-b items-center pr-2">
                {fileGroups[selectedGroupIndex].files.length > 0 && (
                  <FileSelection
                    selectedGroupIndex={selectedGroupIndex}
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                    fileGroups={fileGroups}
                  />
                )}
                <FileGroupSelection
                  selectedGroupIndex={selectedGroupIndex}
                  setSelectedGroupIndex={setSelectedGroupIndex}
                  fileGroups={fileGroups}
                />
              </div>

              <div className="max-h-[500px] overflow-auto no-scrollbar py-2 ">
                {/* Code Display */}
                {selectedFile && (
                  <SyntaxHighlighter
                    language={selectedFile.language || "javascript"}
                    showLineNumbers
                    className={"no-scrollbar"}
                    style={modifiedTheme}
                    lineNumberStyle={{
                      justifyContent: "start",
                      paddingLeft: "5px",
                    }}
                  >
                    {selectedFile.content || "// No content available"}
                  </SyntaxHighlighter>
                )}
              </div>
              <div className="absolute bottom-4 right-4 cursor-pointer bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                <ContentCopyIcon />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UIGalleryComponent;
