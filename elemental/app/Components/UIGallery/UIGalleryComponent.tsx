"use client";
import { File, FileGroup } from "@/app/Types/files";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";


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
  const [selectedFile, setSelectedFile] = useState<File | null>(
    fileGroups && fileGroups.length > 0 && fileGroups[0].files.length > 0
      ? fileGroups[0].files[0]
      : null
  );

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
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>

        {/* Tabs for View & Code */}
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
      </div>

      {activeTab === "view" ? (
        <div className="bg-lightSecondaryBg dark:bg-darkSecondaryBg h-96 w-full flex flex-col justify-center items-center py-10">
          {children}
        </div>
      ) : (
        <>
          {/* Code Display */}
          {fileGroups && fileGroups.length > 0 && (
            <div className="max-h-[500px] w-full overflow-auto no-scrollbar bg-lightBg dark:bg-darkSecondaryBg relative border dark:border-darkBgBorder">
              <div className="sticky top-0 flex justify-between text-lightTextContrast dark:text-darkTextContrast bg-lightBg dark:border-b-darkBgBorder dark:bg-darkSecondaryBg border-b items-center pr-2">
                {fileGroups[selectedGroupIndex].files.length > 0 && (
                  <div className="flex w-full sticky top-0 ">
                    {fileGroups[selectedGroupIndex].files.map((file) => (
                      <button
                        key={file.path}
                        onClick={() => setSelectedFile(file)}
                        className={`p-3 ${
                          selectedFile?.path === file.path
                            ? "bg-primary"
                            : "cursor-pointer"
                        }`}
                      >
                        {file.title}
                      </button>
                    ))}
                  </div>
                )}
                {fileGroups[selectedGroupIndex].filegroup}
              </div>

              {/* Code Display */}
              {selectedFile && (
                <SyntaxHighlighter
                  language={selectedFile.language || "javascript"}
                  showLineNumbers
                  wrapLongLines
                  wrapLines
                  style={modifiedTheme}
                  lineNumberStyle={{
                    display: "flex",
                    justifyContent: "start",
                    paddingLeft: "5px",
                  }}
                >
                  {selectedFile.content || "// No content available"}
                </SyntaxHighlighter>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UIGalleryComponent;
