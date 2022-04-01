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
        className=" flex pt-10 justify-between grid grid-cols-7 grid-rows-5 gap-4"
      >
        <div className="flex flex-col col-span-7 row-span-2 mt-20">
          <div className="">
            {/* <h1 className="text-7xl font-semibold engraved-text tracking-wider text-black uppercase hover:tracking-widest transition-all"> */}
            <h1 className="intro-head text-white">Get started with us</h1>
          </div>
        </div>
        <div className=" px-52 items-center flex justify-between row-span-2 col-span-7 mt-5">
          <Card
            animation={downloadApp}
            text="Step 1: Download the app"
          />
          <Card
            animation={choose}
            text="Step 2: Choose your favourite salon"
          />
          <Card animation={clock} text="Step 3: Pick a time slot" />
        </div>
      </div>
      {/* End Main Section */}
    </div>
  );
};

export default HowItWorks;
