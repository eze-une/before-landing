import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";
import UnitScrollableDetails from "../elements/UnitScrollableDetails";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Units() {
  const textLineStart = useRef(null);
  return (
    <>
      <div className="flex flex-col h-full lg:h-[70vh] w-full space-y-20 lg:space-y-0 bg-[#E7F0F5] snapped">
        <div className="flex flex-row ">
          <div className="h-10 w-5 bg-[#57BE94] w-[10%] lg:w-[12%] mr-10"></div>
          <p className="text-3xl text-left font-bold">
            Who Help us to make these true?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center  md:mx-[10%] mt-10">
          <p
            className="text-5xl font-bold lg:py-20 lg:text-left lg:text-7xl md:w-[55%]"
            ref={textLineStart}
          >
            These Are The{" "}
            <span className="inline-block">
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Units
              </span>

              <svg
                width="full"
                height="15"
                viewBox="0 0 91 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.86439C17.7216 4.24063 55.332 -3.20552 88 12"
                  stroke="#FFAE00"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </span>{" "}
            That Help Us Get There
          </p>


          <div className="py-20 flex w-full lg:flex-col ml:10 md:w-[30%] lg:w-[45%] lg:ml-20">
            <div className="flex flex-row justify-center lg:flex-col w-full px-10 space-x-10 lg:space-x-0 lg:space-y-10 lg:justify-end">
            <AnchorLink href="#units">
              <div
                className="flex flex-col w-[3rem] h-60 bg-white text-left items-center lg:w-[60%] lg:justify-start lg:h-[4rem] lg:flex-row  "
                id="labs"
              >
                <div className="bg-[#57BE94] w-full h-4  lg:h-full lg:w-4"></div>
                <p className="text-2xl text-[#57BE94] translate-y-[50%] rotate-[90deg] lg:rotate-[0deg] lg:translate-y-0 lg:ml-5">LABS</p>
              </div>
            </AnchorLink>
            <AnchorLink href="#units">
              <div
                className="flex flex-col w-[3rem] h-60 bg-white text-left items-center lg:w-[60%] lg:justify-start lg:h-[4rem] lg:flex-row"
                id="enginnering"
              >
                <div className="bg-[#4F66AF] w-full h-4  lg:h-full lg:w-4"></div>
                <p className="text-2xl text-[#4F66AF] translate-y-[200%] rotate-[90deg] lg:rotate-[0deg] lg:translate-y-0 lg:ml-5">ENGINEERING</p>
              </div>
            </AnchorLink>
            <AnchorLink href="#units">
              <div
                className="flex flex-col w-[3rem] h-60 bg-white text-left items-center lg:w-[60%] lg:justify-start lg:h-[4rem] lg:flex-row"
                id="sandbox"
              >
                <div className="bg-[#FFAE00] w-full h-4 lg:h-full lg:w-4"></div>
                <p className="text-2xl text-[#FFAE00] translate-y-[130%] rotate-[90deg] lg:rotate-[0deg] lg:translate-y-0 lg:ml-5">SANDBOX</p>
              </div>
            </AnchorLink>
            </div>
          </div>
        </div>
      </div>
      <Xarrow
        start={textLineStart}
        end="labs"
        color="#FFAE00"
        showHead={false}
      />
      <Xarrow
        start={textLineStart}
        end="enginnering"
        color="#FFAE00"
        showHead={false}
      />
      <Xarrow
        start={textLineStart}
        end="sandbox"
        color="#FFAE00"
        showHead={false}
      />

      {/* bottom scrollable part */}
      <UnitScrollableDetails />
    </>
  );
}

export default Units;
