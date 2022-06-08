import React from "react";
import iphone from "../assets/iphone.png";
import Card from "./Card";
import downloadApp from "../lottie/download-ap.json";
import choose from "../lottie/choose.json";
import clock from "../lottie/clock.json";

const HowItWorks = () => {
  return (
    <div>
      {/* Main Section */}
      <div
        id="instruction"
        className="pb-10 lg:pb-0 lg:h-screen pt-10 justify-between lg:grid lg:grid-cols-1 lg:grid-rows-7"
      >
        <div className="flex flex-col lg:row-span-1 mt-10">
          <div className="mb-10 lg:mb-0">
            {/* <h1 className="text-7xl font-semibold engraved-text tracking-wider text-black uppercase hover:tracking-widest transition-all"> */}
            <h1 className="intro-head text-white">Get started with us</h1>
          </div>
        </div>
        <div className="px-0 lg:px-52 items-center lg:items-start lg:flex justify-between lg:row-span-2">
          <Card
            animation={downloadApp}
            width={240}
            text="Step 1: Download the app"
          />
          <Card
            animation={choose}
            width={240}
            text="Step 2: Choose your favourite salon"
          />
          <Card animation={clock} width={240} text="Step 3: Pick a time slot" />
        </div>
      </div>
      {/* End Main Section */}
    </div>
  );
};

export default HowItWorks;
