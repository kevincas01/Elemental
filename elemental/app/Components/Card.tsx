import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  body: string;
  icon?: ReactNode;
}
const Card = ({ title, body, icon }: CardProps) => {
  return (
    <div className="relative border rounded-lg p-5 hover:-translate-y-2 hover:scale-102 hover:shadow-darkCard dark:hover:shadow-lightCard dark:bg-darkBg dark:border-darkBgBorder transition-all duration-300 overflow-hidden">
      <h2 className="text-2xl">{title}</h2>
      <p className="text-grayText">{body}</p>
      <span className="text-primary opacity-15 absolute scale-[5] top-1/2 left-3/4 -translate-x-3/4 -translate-y-1/2 -rotate-20 z-0 text-5xl ">
        {icon}
      </span>
    </div>
  );
};

export default Card;
