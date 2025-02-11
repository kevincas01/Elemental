import { listItem } from "@/app/constants/componentsList";
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
          key={listItem.name}
          href={listItem.url}
          className={`${
            pathname === listItem.url ? "text-primary" : ""
          } hover:bg-lightSecondaryBg dark:hover:bg-darkSecondaryBg py-2 px-4`}
        >
          <p className="font-semibold">{listItem.name}</p>{" "}
        </Link>
      ))}
    </div>
  );
};

export default SideBarList;
