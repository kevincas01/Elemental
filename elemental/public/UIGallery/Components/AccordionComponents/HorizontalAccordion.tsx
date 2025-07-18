"use client";
import React, { useState } from "react";
import clsx from "clsx";

const values = [
  {
    title: "Lorem 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In leo nibh, porttitor vitae pulvinar imperdiet, ornare at augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas suscipit nisi lacus, lacinia interdum eros dignissim a. Sed a consectetur purus, non porta nulla. ",
  },
  {
    title: "Lorem 2",
    description:
      "Donec sed nisi ultricies, fermentum lorem id, aliquam dui. Praesent justo ante, laoreet non tellus non, congue viverra ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis posuere congue volutpat. Proin suscipit libero quam, vel eleifend eros sagittis at. ",
  },
  {
    title: "Lorem 3",
    description:
      "Curabitur eleifend quam nibh, quis maximus sapien maximus at. Nulla ut velit ante. Maecenas sed consequat nisl, id faucibus orci. Morbi vitae porttitor risus.",
  },
];

const HorizontalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-[800px]">
        <h2 className="main-title ">What We Stand For</h2>
        <p className="subtitle mb-10">
          Behind every solution we build is a set of core principles that guide
          how we work and who we work with. These aren&rsquo;t just buzzwords —
          they&rsquo;re the foundation of our partnerships, our process, and our
          product.
        </p>

        <div className="flex flex-col sm:flex-row">
          {values.map((value, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                className={clsx(
                  "transition-all  duration-400 ease-in-out border sm:h-96 relative w-full overflow-hidden",
                  isActive
                    ? "sm:flex-4 h-100 p-4 bg-purple-300"
                    : "sm:flex-1 h-32 p-4 cursor-pointer",
                  index === values.length - 1
                    ? "border-b sm:border-r border-gray-500"
                    : "border-b-0 sm:border-b sm:border-r-0 border-gray-500"
                )}
              >
                {/* Content */}
                {!isActive ? (
                  <div className="flex flex-col justify-between h-full w-full">
                    <h3 className="text-4xl font-semibold sm:text-right">
                      0{index + 1}.
                    </h3>
                    <h3 className="text-lg font-semibold tracking-widest uppercase writing-mode-responsive">
                      {value.title}
                    </h3>
                  </div>
                ) : (
                  <div className="flex flex-col justify-center h-full text-left w-full text-black">
                    <h3 className="text-4xl font-semibold mb-3 ">
                      0{index + 1}.
                      <br />
                      {value.title}
                    </h3>
                    <p className="sm:max-h-[80%] sm:w-50 lg:w-100 text-black/60">
                      {value.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HorizontalAccordion;
