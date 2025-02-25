import { join } from "path";
import { readFileSync } from "fs";
export const getFileContent = (filePath: string, language: string): string => {
  try {
    // Determine the base path based on language
    const basePath =
      language === "css" ? "./app/Styles/UIGallery/" : "./app/Components/UIGallery/";

    const fullPath = join(process.cwd(), basePath+"/"+ filePath);

    return readFileSync(fullPath, "utf-8");
  } catch (error) {
    console.error(`Error reading file (${filePath}):`, error);
    return `// Error loading file content: ${filePath}`;
  }
};
