import React from "react";

interface UIGalleryComponentProps {
  title: string;
  children: React.ReactNode;
}

const UIGalleryComponent = ({ title, children }: UIGalleryComponentProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="bg-lightSecondaryBg dark:bg-darkSecondaryBg h-96 w-full flex flex-col justify-center items-center py-10">{children}</div>
    </div>
  );
};

export default UIGalleryComponent;
