import { listItem } from "@/app/Constants/componentsList";
import Link from "next/link";
import React from "react";

interface SideBarListProps {
  list: listItem[];
  pathname: string;
}
const SideBarList = ({ list, pathname }: SideBarListProps) => {
  return (
    <div className="flex flex-col gap-1 ">
      {list.map((listItem) => (
        <Link
          prefetch={false}
          key={listItem.name}
          href={listItem.url}
          className={`${
            pathname === listItem.url
              ? "text-primary bg-darkBg dark:bg-lightBg"
              : "hover:bg-lightSecondaryBg dark:hover:bg-darkSecondaryBg"
          }  py-2 px-4 font-semibold`}
        >
          {listItem.name}
        </Link>
      ))}
    </div>
  );
};

export default SideBarList;
