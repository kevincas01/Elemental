import { join, resolve } from "path";
import { readFileSync } from "fs";
export const getFileContent = (filePath: string, language: string): string => {
  try {
    // Determine the base path based on language
    const basePath =
      "/public/UIGallery/" + (language === "css" ? "Styles" : "Components");

    const fullPath = join(process.cwd(), basePath, filePath);

    return readFileSync(resolve(fullPath), "utf-8");
  } catch (error) {
    console.error(`Error reading file (${filePath}):`, error);
    return `// Error loading file content: ${filePath}`;
  }
};
