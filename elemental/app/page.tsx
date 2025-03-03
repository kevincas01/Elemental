import Card from "./Components/Card";
import ComponentsPreviewGallery from "./Components/Home/ComponentsPreviewGallery";
import Hero from "./Components/Hero/Hero";

import TouchAppOutlinedIcon from "@mui/icons-material/TouchAppOutlined";
import CodeIcon from "@mui/icons-material/Code";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex justify-center bg-lightSecondaryBg dark:bg-darkSecondaryBg px-24 py-36">
        <Hero />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-5 dark:bg-darkBg">
        <Card
          icon={<TouchAppOutlinedIcon fontSize="inherit" />}
          title={"Interactive Examples"}
          body="Explore fully interactive UI components in action. See how each element behaves and interacts in real-world scenarios."
        />
        <Card
          icon={<CodeIcon fontSize="inherit" />}
          title={"Code Snippets"}
          body="Gain access to clean, reusable code examples for every component. Quickly implement them into your own projects."
        />
        <Card
          icon={<GridViewOutlinedIcon fontSize="inherit" />}
          title={"Component Showcase"}
          body="Discover a curated collection of essential UI elements, from buttons to cards, designed for seamless integration."
        />
      </div>
      <ComponentsPreviewGallery />
    </div>
  );
}
