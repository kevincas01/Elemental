"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface FileInfo {
  title: string;
  path: string;
  language: string; // Added language property
  content: string; // Preloaded file content
}

interface UIGalleryComponentProps {
  title: string;
  children: React.ReactNode;
  files?: FileInfo[];
}

const UIGalleryComponent = ({
  title,
  children,
  files,
}: UIGalleryComponentProps) => {
  const [activeTab, setActiveTab] = useState<"view" | "code">("view");
  const [selectedFile, setSelectedFile] = useState<FileInfo | null>(
    files && files.length > 0 ? files[0] : null
  );
  const syntaxTheme = googlecode;

  const modifiedTheme = {
    ...syntaxTheme,
    hljs: {
      ...syntaxTheme.hljs,
      background: "transparent",
      padding: "0",
    },
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">{title}</h2>

        {/* Tabs */}
        <div className="flex ">
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
          {selectedFile && (
            <div className="max-h-[500px] w-full overflow-auto no-scrollbar bg-lightBg relative border">
              {files && files.length > 1 && (
                <div className="flex border-b w-full sticky top-0 bg-lightBg">
                  {files.map((file) => (
                    <button
                      key={file.path}
                      onClick={() => setSelectedFile(file)}
                      className={`cursor-pointer p-3 ${
                        selectedFile?.path === file.path
                          ? "bg-primary text-lightTextContrast"
                          : "text-lightTextContrast"
                      }`}
                    >
                      {file.title}
                    </button>
                  ))}
                </div>
              )}

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
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UIGalleryComponent;
