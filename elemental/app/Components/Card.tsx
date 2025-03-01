import React, { ReactNode } from "react";

interface CardProps {
  title: string;
  body: string;
  icon?: ReactNode;
}
const Card = ({ title, body, icon }: CardProps) => {
  return (
    <div className="border rounded-lg p-5 hover:-translate-y-2 hover:shadow-darkCard dark:hover:shadow-lightCard dark:bg-darkBg dark:border-darkBgBorder transition-all duration-300">
      <h2 className="text-2xl">
        {title} {icon && <span className="text-primary">{icon}</span>}
      </h2>
      <p className="text-grayText">{body}</p>
    </div>
  );
};

export default Card;
