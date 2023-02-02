import React, { useState } from "react";
import curvedUnderline from "../../assets/Vector 336.png";
import Eyes from "../../assets/Group 1929.png";
import RobotHand from "../../assets/Group 1930.png";
import Header from "../layouts/Header";

function Hero({sliderRange,setsliderRange}) {
  return (
    <div className="bg-[#E7F0F5] w-full w-[95%] h-[100vh] flex flex-col md:w-[80%] snap-normal" id="hero">
      <Header />
      
      <div className=" flex flex-row items-center justify-between h-[75%] ">
        {/* left */}
        <div className="w-full flex flex-col h-full lg:w-[50%] items-start justify-center text-left">
          <h1 className="text-7xl  text-left text-[56px] font-bold mb-10">
            We build{" "}
            <span className="inline-block">
              <span
                className=" text-[#E7F0F5]"
                style={{ WebkitTextStroke: "1px black" }}
              >
                crazy
              </span>
              <img
                src={curvedUnderline}
                className="w-[125px] h-[21.07px]"
                alt="Flowbite Logo"
              />
            </span>
            <br />
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
            k imaginatve
          </h1>
          <h2 className="  w-full md:w-[80%]">
            The word <span className="text-[#57BE94]">ablaze</span> refers to a{" "}
            <span className="text-[#FFAE00]">flame</span> with in a feild of
            vision
          </h2>
        </div>
        {/* right */}
        <div className="hidden w-[50%] h-full md:flex items-end justify-end">
          <img src={RobotHand} className="h-[100%]" alt="Flowbite Logo" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center m-2">
        <div className="rotate-[90deg]  h-[60px] w-[60px] items-center justify-center ">
          <input type="range" className="slider " min="1" max="100" value={sliderRange} onChange={e => setsliderRange (e.target.value)}/>
        </div>
        <p className="text-[#57BE94] ml-5">EXPLORE MORE</p>
      </div>
    </div>
  );
}

export default Hero;
