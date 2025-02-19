import Card from "./ReusableComponents/Card";
import ComponentsPreviewGallery from "./ReusableComponents/ComponentsPreviewGallery";
import Hero from "./ReusableComponents/Hero/Hero";

export default function Home() {
  return (
    <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex justify-center bg-lightSecondaryBg dark:bg-darkSecondaryBg p-18">
        <Hero />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 p-5 gap-5 dark:bg-darkBg">
        <Card
          title={"Interactive Examples"}
          body="Explore fully interactive UI components in action. See how each element behaves and interacts in real-world scenarios."
        />
        <Card
          title={"Code Snippets"}
          body="Gain access to clean, reusable code examples for every component. Quickly implement them into your own projects."
        />
        <Card
          title={"Component Showcase"}
          body="Discover a curated collection of essential UI elements, from buttons to cards, designed for seamless integration."
        />
      </div>
      <ComponentsPreviewGallery />
    </div>
  );
}
