import { listItem } from "@/app/constants/componentsList";
import Link from "next/link";
import React from "react";

interface SideBarListProps {
  list: listItem[];
}
const SideBarList = ({ list }: SideBarListProps) => {
  return (
    <div className="flex flex-col gap-1 ">
      {list.map((listItem) => (
        <Link
          key={listItem.name}
          href={listItem.url}
          className="hover:bg-lightSecondaryBg dark:hover:bg-darkSecondaryBg py-2 px-3"
        >
          <p>{listItem.name}</p>{" "}
        </Link>
      ))}
    </div>
  );
};

export default SideBarList;
