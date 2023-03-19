import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Firebase",
    "Python",
  ];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_pwohahvd.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            Hello! My name is Yeasin Arafath. I enjoy creating things that live
            on the internet. My interest in web development started back in 2019
            when I decided to try editing custom Tumblr themes - turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS.
          </p>

          <p className="text-white">
            Fast-forward to today, and I've had the privilege of working at a
            software company. My main focus these days is building accessible,
            inclusive products and digital experiences. Here are a few
            technologies I've been working with recently. Here are a few
            technologies I've been working with recently.
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className="border border-tertiary py-3 px-10 rounded hover:bg-white hover:border-primary transition-all duration-500 ease-in-out">
              <h1 className="text-tertiary hover:text-black transition-all duration-500 ease-in-out">
                {skill}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
