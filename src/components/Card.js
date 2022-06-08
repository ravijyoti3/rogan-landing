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
<<<<<<< HEAD
    <div className="flex flex-col items-center mb-10 lg:mb-0">
      <div className=" grid grid-rows-6 rounded p-3 iso-shadow card-container ">
        <div className="row-span-6 container items-center flex flex-col justify-between">
=======
    <div>
      <div className=" grid grid-rows-6 w-1/3 rounded p-3 iso-shadow card-container">
        <div className="row-span-6 container items-center flex flex-col justify-between items-center">
>>>>>>> e50de37a665b8a7cd01e9c610f9272a698a7f2d7
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
