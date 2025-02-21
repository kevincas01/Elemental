import { readFileSync } from "fs";
import { join } from "path";

export const getFileContent = (filePath: string): string => {
  try {
    const fullPath = join(process.cwd(), "app/Components/UIGallery/", filePath);
    return readFileSync(fullPath, "utf-8");
  } catch (error) {
    console.error("Error reading file:", error);
    return "// Error loading file content";
  }
};
