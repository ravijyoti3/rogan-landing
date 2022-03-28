import React, { useState } from "react";
import NavBar from "./NavBar";
import iphone from "../assets/iphone.png";

const Intro = () => {
  const Line1 = ["Meet your", "मिलिए अपने बेहतर"];
  const Line2 = ["upgraded stylist", "नए स्टाइलिस्ट से"];

  const [text1, setText1] = useState(Line1[0]);
  const [text2, setText2] = useState(Line2[0]);

  return (
    <div>
      {/* Main Section */}
      <div
        id="intro"
        className="flex items-center pt-10 justify-between px-20 grid grid-cols-12 gap-4"
      >
        <div className="col-span-2"></div>
        <div className="col-span-3">
          <img className="" src={iphone} />
        </div>
        <div className="flex flex-col col-span-6 ">
          <div className="intro-head animate-pulse ">
            <h1 className="text-white">{text1}</h1>
            <h1 className="text-white">{text2}</h1>
          </div>
          <div className="mt-5">
            <p id="intro-helper-text">Content team is still working </p>
          </div>
        </div>
      </div>
      {/* End Main Section */}
    </div>
  );
};
export default Intro;
