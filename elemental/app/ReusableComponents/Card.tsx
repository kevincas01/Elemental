import React from "react";

interface CardProps {
  title: string;
  body: string;
}
const Card = ({ title, body }: CardProps) => {
  return (
    <div className="border rounded-lg p-5 hover:shadow-darkCard dark:hover:shadow-lightCard dark:bg-darkBg ">
      <h2 className="text-xl">{title}</h2>
      <p className="text-grayText">{body}</p>
    </div>
  );
};

export default Card;
