import ComponentGallery from "@/app/Components/ComponentGallery";
import { componentsList, sectionsList } from "@/app/Constants/componentsList";
import React from "react";

const page = () => {
  return (
    <div className="space-y-4">
      <h1 className="">All Components</h1>
      <p>
        All components are built with React, Tailwind CSS, and vanilla
        JavaScript or CSS, ensuring a lightweight and simple approach. We focus
        on delivering code that doesn't rely on any extra packages or libraries,
        so you can easily integrate components into your project without
        additional dependencies. Everything is designed to be intuitive and
        customizable, keeping up with the latest versions of React and Tailwind.
      </p>
      <h2 className="text-2xl">Sections</h2>
      <ComponentGallery list={sectionsList} />
      <h2 className="text-2xl">Components</h2>
      <ComponentGallery list={componentsList} />
    </div>
  );
};

export default page;
