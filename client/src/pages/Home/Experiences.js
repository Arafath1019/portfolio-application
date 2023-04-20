import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const {portfolioData} = useSelector(state => state.root);
  const {experiences} = portfolioData;
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => {
            return (
              <div
                onClick={() => setSelectedItemIndex(index)}
                className="cursor-pointer"
              >
                <h1
                  className={`text-xl px-5 ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3"
                      : "text-white"
                  }`}
                >
                  {experience.period}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-5">
          {experiences.map((experience, index) => {
            return (
              <>
                {selectedItemIndex === index && (
                  <>
                    <h1 className="text-secondary text-xl">
                      {experience.title}
                    </h1>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://bjitgroup.com/"
                      className="text-tertiary text-xl inline-block hover:underline transition-all duration-500 ease-in-out"
                    >
                      {experience.company}
                    </a>
                    <p className="text-white">
                      {experience.description}
                    </p>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
