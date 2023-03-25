import React from "react";

function Intro() {
  return (
    <div className="flex sm:flex-col">
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
        <h1 className="text-white text-2xl">
          {"𝐇𝐞𝐥𝐥𝐨 𝐭𝐡𝐞𝐫𝐞, 𝐟𝐞𝐥𝐥𝐨𝐰 <𝚍𝚎𝚟𝚎𝚕𝚘𝚙𝚎𝚛𝚜 />"}
        </h1>
        <h1 className="text-6xl sm:text-3xl text-secondary font-semibold">
          I'm Yeasin Arafath
        </h1>
        <h1 className="text-5xl sm:text-3xl text-white font-semibold">
          Building things for the INTERNET!
        </h1>
        <p className="text-white w-2/3">
          Software Engineer at&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://bjitgroup.com/"
            class="font-medium text-rose-300 hover:underline transition-all duration-500 ease-in-out"
          >
            BJIT Group&nbsp;
          </a>
          & Bachelor of Science in Computer Science and Engineering from&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.cuet.ac.bd/"
            class="font-medium text-rose-300 hover:underline transition-all duration-500 ease-in-out"
          >
            Chittagong University of Engineering & Technology(CUET)
          </a>
          .
        </p>
        <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded hover:bg-white hover:text-black hover:border-primary transition-all duration-500 ease-in-out">
          Get Started
        </button>
      </div>
      <div className="w-[70vh] sm:w-[50vh]">
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_dopee6e0.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default Intro;
