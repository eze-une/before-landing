import React, { useState } from "react";
import curvedUnderline from "../../assets/Vector 336.png";
import Eyes from "../../assets/Group 1929.png";
import RobotHand from "../../assets/Group 1930.svg";
import Header from "../layouts/Header";

function Hero({ sliderRange, setsliderRange }) {
  return (
    <div className="bg-[#E7F0F5] w-full mx-5 md:w-[80%] h-[100vh] h-[105vh] flex flex-col snap-start" id="hero">
      <Header />

      <div className=" flex flex-row items-center justify-between h-[75%] ">
        {/* left */}
        <div className="w-full flex flex-col h-full w-full lg:w-[50%] items-start justify-center text-left">
          <h1 className="text-5xl md:text-8xl lg:text-7xl text-left font-bold mb-10 leading-[3.9rem] lg:leading-[5rem] xl:leading-[5.6rem]">
            We build{" "}
            <span className="inline-block relative">
              <span
                className=" text-[#E7F0F5] outline text-[3.5rem] md:text-[7rem] lg:text-[5rem] z-0"
              >
                crazy
              </span>
              <img
                src={curvedUnderline}
                className="w-[125px] h-[25.07px] md:w-[80%] lg:w-[80%] xl:w-[85%] mt-[-.7rem] md:mt-[-0.9rem] lg:mt-[-.7rem] z-5 absolute"
                alt="Flowbite Logo"
              />
            </span>
            <br />
            <span className="md:mt-[5rem]">
            ideas that l
            <span className="inline-block">
              <img
                src={Eyes}
                className="w-[36px] h-[36.5px]"
                alt="Flowbite Logo"
              />
            </span>
            <span className="inline-block ml-1">
              <img
                src={Eyes}
                className="w-[36px] h-[36.5px]"
                alt="Flowbite Logo"
              />
            </span>
            k imaginative
            </span>
          </h1>
          <h2 className="w-full md:w-[80%] text-2xl">
            The word <span className="text-[#57BE94]">ablaze</span> refers to a{" "}
            <span className="text-[#FFAE00]">flame</span> with in a field of
            vision
          </h2>
        </div>
        {/* right */}
        <div className="hidden lg:w-[50%] h-full lg:flex items-start justify-center">
          <img src={RobotHand} className="h-[100%]" alt="Flowbite Logo" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center m-2">
        <div className="rotate-[90deg]  h-[60px] w-[60px] items-center justify-center ">
          <input type="range" className="slider " min="1" max="100" value={sliderRange} onChange={e => setsliderRange(e.target.value)} />
        </div>
        <p className="text-[#57BE94] ml-5">EXPLORE MORE</p>
      </div>
    </div>
  );
}

export default Hero;
