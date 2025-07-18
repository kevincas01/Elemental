"use client";
import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
const FAQList = [
  {
    title: "What is Elemental?",
    description:
      "Elemental is a portfolio project that showcases reusable UI components I've built using modern web technologies like Next.js and Tailwind CSS. It lets users interact with the components and view the code behind them in real time.",
  },
  {
    title: "Who is Elemental for?",
    description:
      "Elemental is built for developers, designers, and potential clients who want to see examples of clean, responsive UI components. It’s especially helpful for anyone looking to understand how components are structured and styled.",
  },
  {
    title: "What technologies does Elemental use?",
    description:
      "All components are built with React, Tailwind CSS, and vanilla JavaScript or CSS, ensuring a lightweight and simple approach.",
  },
];

const DropdownAccordion = () => {
  return (
    <div className="bg-white p-5 max-w-150">
      <div className="w-full flex flex-col justify-center items-center ">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="flex flex-col gap-5 mt-4">
        {FAQList.map((faq) => (
          <AccordionItem
            key={faq.title}
            title={faq.title}
            description={faq.description}
          />
        ))}
      </div>
    </div>
  );
};

interface AccordionItemProps {
  title: string;
  description: string;
}

const AccordionItem = ({ title, description }: AccordionItemProps) => {
  const [itemToggled, setItemToggled] = useState(false);

  const handleItemToggle = () => {
    setItemToggled((prev) => !prev);
  };
  return (
    <div className="rounded-md shadow-[0_1px_4px_rgba(0,0,0,0.16)] p-4">
      <div
        className="cursor-pointer flex items-center justify-between gap-10"
        onClick={handleItemToggle}
      >
        <p className="font-semibold">{title}</p>
        <span
          className={`transition-all duration-300 ${
            itemToggled ? "rotate-180" : "rotate-0"
          }`}
        >
          <KeyboardArrowDownOutlinedIcon />
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          itemToggled ? "max-h-50 " : "max-h-0"
        }`}
      >
        <p className="mt-5">{description}</p>
      </div>
    </div>
  );
};

export default DropdownAccordion;
