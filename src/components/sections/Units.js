import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";
import UnitScrollableDetails from "../elements/UnitScrollableDetails";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Units() {
  const textLineStart = useRef(null);
  return (
    <>
      <div className="flex  flex-col h-[100vh] lg:h-[70vh] w-full space-y-20 lg:space-y-0 bg-[#E7F0F5] snapped">
        <div className="w-full flex justify-start items-start text-left">
          <div className="lg:w-[17%] w-[10%] h-full bg-orange-600 mr-10"></div>
          <p className="font-bold text-3xl">How Do We Make This True?</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center">
          <p
            className="text-5xl font-bold w-[90%] lg:w-[40%] lg:py-20 lg:text-left lg:text-7xl"
            ref={textLineStart}
          >
            These Are The{" "}
            <span className="inline-block">
              <span
                className=" text-transparent"
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
          <div className="flex flex-col rotate-[90deg] lg:rotate-0 mt-40 lg:mt-0 w-[40%] lg:w-[20%] space-y-5 lg:ml-20">
            <AnchorLink href="#units">
              <div
                className="flex flex-row space-x-10 bg-white w-full h-[4rem] text-center items-center "
                id="labs"
              >
                <div className="bg-[#57BE94] h-full w-4"></div>
                <p className="text-2xl text-[#57BE94]">LABS</p>
              </div>
            </AnchorLink>

            <AnchorLink href="#units">
              <div
                className="flex flex-row space-x-10 bg-white w-full h-[4rem] text-center items-center"
                id="enginnering"
              >
                <div className="bg-[#4F66AF] h-full w-4"></div>
                <p className="text-2xl text-[#4F66AF]">ENGINEERING</p>
              </div>
            </AnchorLink>
            <AnchorLink href="#units">
              <div
                className="flex flex-row space-x-10 bg-white w-full h-[4rem] text-center items-center"
                id="sandbox"
              >
                <div className="bg-[#FFAE00] h-full w-4"></div>
                <p className="text-2xl text-[#FFAE00]">SANDBOX</p>
              </div>
            </AnchorLink>
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
