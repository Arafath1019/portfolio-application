import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="flex">
        <lottie-player
          src="https://assets9.lottiefiles.com/datafiles/oXJaXGcR6nvGGTR/data.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default Loader;
