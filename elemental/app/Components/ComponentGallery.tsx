import React from "react";
import { listItem } from "../Constants/componentsList";
import Link from "next/link";
interface ComponentGalleryProps {
  list: listItem[];
}
const ComponentGallery = ({ list }: ComponentGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
      {list.map((listItem) => (
        <Link
          key={listItem.name}
          href={listItem.url}
          prefetch={false}
          className="relative rounded-md md:h-32 h-44  w-full flex flex-col text-center justify-center hover:text-primary hover:bg-lightSecondaryBg dark:hover:bg-darkSecondaryBg py-2 px-3 border dark:border-darkBgBorder overflow-hidden z-20"
        >
          <span className="text-primary left-1/2 md:-translate-x-1/2 opacity-25 absolute -rotate-20 scale-[5] z-0">
            {listItem.icon}
          </span>

          <h3 className="text-2xl overflow-hidden text-ellipsis whitespace-nowrap">
            {listItem.name}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default ComponentGallery;
