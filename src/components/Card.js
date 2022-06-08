import React from "react";
import Lottie from "react-lottie";

const Card = ({ text, animation, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="flex flex-col items-center mb-10 lg:mb-0">
      <div className=" grid grid-rows-6 rounded p-3 iso-shadow card-container ">
        <div className="row-span-6 container items-center flex flex-col justify-between">
          <Lottie
            style={{
              borderRadius: 10,
            }}
            options={defaultOptions}
          />
        </div>
      </div>
      <div className="mt-10">
        <h1 id="intro-helper-text">{text}</h1>
      </div>
    </div>
  );
};

export default Card;
