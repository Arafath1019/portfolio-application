import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact() {
  const user = {
    Name: "Yeasin Arafath",
    Age: "null",
    Gender: "Male",
    Email: "arafath.yeasin1019@gmail.com",
    Mobile: "01760927903",
    Country: "Bangladesh",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>
        <div className="h-[400px]">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_isbiybfh.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
