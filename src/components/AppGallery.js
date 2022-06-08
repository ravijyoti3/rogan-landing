import React, { useEffect, useState } from "react";
import splash from "../assets/Splash Screen (6).png";
import splash1 from "../assets/3. Profile.png";
import splash2 from "../assets/3.1 Shop Details.png";
import splash3 from "../assets/3.3 Statistics.png";
import splash4 from "../assets/Frame 1.png";
import splash5 from "../assets/Frame 3.png";
import splash6 from "../assets/Frame 5.png";
import splash7 from "../assets/Home.png";
import splash8 from "../assets/Login.png";
import splash9 from "../assets/2.1 Select Service.png";
import splash10 from "../assets/2.2 Add Service.png";
import splash11 from "../assets/3.4 Premium Features.png";
import splash12 from "../assets/SignUp.png";

const AppGallery = () => {
  const [pos1, setpos1] = useState(0);
  const [pos2, setpos2] = useState(0);
  const [pos3, setpos3] = useState(0);
  const [pos4, setpos4] = useState(0);
  const [secNo, setSecNo] = useState(0);

  const handleScroll = (e) => {
    setSecNo(
      parseFloat(e.target.scrollingElement.scrollTop) /
        parseFloat(window.innerHeight)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      handleScroll(e);
    });
  }, []);

  useEffect(() => {
    setpos1(secNo * 200);
    setpos2(secNo * 80);
    setpos3(secNo * 80);
    setpos4(secNo * 200);
  }, [secNo]);
  return (
    <section id="appGallery" style={{ background: "#cecece" }}>
      <div className="grid grid-rows-4">
        <div
          className="mt-60 intro-head row-span-2"
          style={{
            color: "#333",
            fontWeight: 500,
          }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl">
            Level up your haircut experience.
          </h1>
          <p className="text-3xl font-normal mt-5 tracking-normal">
            Quit the hassle of waititng for your turn, confusion for discovering
            new salons.
          </p>
        </div>
        <div>
          <a href="https://play.google.com/store/apps/details?id=com.styleoutindia.styleoutindia">
            <button
              className="text-gray-300 text-lg lg:text-3xl font-regular lg:font-thin mt-16 pt-3 px-5 pb-4 rounded-full"
              style={{ background: "#333" }}
            >
              <p>Discover the app</p>
            </button>
          </a>
        </div>
      </div>
      <div className="h-screen lg:h-auto -mt-60 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5  px-10 lg:px-20 gallery-animate pb-0 mb-0">
        <div
          className="lg:flex hidden flex-col"
          style={{ transform: `translateX(-50px)`, marginTop: "12rem" }}
        >
          <img src={splash1} className="rounded-xl gallery-image" />
          <img src={splash2} className="rounded-xl gallery-image" />
        </div>
        <div
          className="gallery-animate flex  flex-col "
          style={{
            transform: `translate(-50px,-${pos1}px)`,
            marginTop: "35rem",
          }}
        >
          <img src={splash3} className="rounded-xl gallery-image" />
          <img src={splash4} className="rounded-xl gallery-image" />
        </div>
        <div
          className="lg:flex md:flex flex-col hidden gallery-animate"
          style={{
            transform: `translate(-50px,-${pos2}px)`,
            marginTop: "20rem",
          }}
        >
          <img src={splash5} className="rounded-xl gallery-image" />
          <img src={splash6} className="rounded-xl gallery-image" />
        </div>
        <div className="lg:flex flex-col col-span-2 hidden neomorph-phone h-min p-3 pb-6">
          <img
            src={splash}
            className="rounded-3xl "
            style={{ zIndex: 5, borderRadius: 50 }}
          />
        </div>
        <div
          className="lg:flex md:flex hidden flex-col gallery-animate"
          style={{
            transform: `translate(50px,-${pos3}px)`,
            marginTop: "16rem",
          }}
        >
          <img src={splash7} className="rounded-xl gallery-image" />
          <img src={splash8} className="rounded-xl gallery-image" />
        </div>
        <div
          className="flex  flex-col gallery-animate"
          style={{
            transform: `translate(50px,-${pos4}px)`,
            marginTop: "34rem",
          }}
        >
          <img src={splash9} className="rounded-xl gallery-image" />
          <img src={splash10} className="rounded-xl gallery-image" />
        </div>
        <div
          className="lg:flex hidden flex-col "
          style={{ transform: `translateX(50px)`, marginTop: "10rem" }}
        >
          <img src={splash11} className="rounded-xl gallery-image" />
          <img src={splash12} className="rounded-xl gallery-image" />
        </div>
      </div>
    </section>
  );
};

export default AppGallery;
