import React, { useRef, useState } from "react";
import curvedUnderline from "../../assets/Vector 340.png";
import { motion as m } from "framer-motion";
import Xarrow from "react-xarrows";

const list = ["LABS", "ENGINEERING", "SANDBOX"];
const list2 = [
  {
    text1:
      "We are exceedingly focusing on high quality and cost effective implementation of services. We are advancing at a tremendous pace, with the involvement of skilled and experienced team working on organization",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    text3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "#57BE94",
  },
  {
    text1:
      "We are exceedingly focusing on high quality and cost effective implementation of services. We are advancing at a tremendous pace, with the involvement of skilled and experienced team working on organization",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    text3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "#4F66AF",
  },
  {
    text1:
      "We are exceedingly focusing on high quality and cost effective implementation of services. We are advancing at a tremendous pace, with the involvement of skilled and experienced team working on organization",
    text2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    text3:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "#FFAE00",
  },
];

const textVariant = {
  offscreen: { y: "100%", opacity: 0, scale: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

function Units() {
  const [scrollIndex, setscrollIndex] = useState();
  const [scrollColor, setscrollColor] = useState();
  const textLineStart = useRef(null);
  return (
    <>
      <div className="flex  flex-col h-[100vh] lg:h-[70vh] w-full space-y-20 lg:space-y-0 bg-[#E7F0F5]">
        <div className="w-full flex justify-start items-start text-left">
          <div className="lg:w-[17%] w-[10%] h-full bg-orange-600 mr-10"></div>
          <p className="font-bold text-3xl">How Do We Make This True?</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center text-center">
          <p className="text-5xl font-bold w-[90%] lg:w-[40%] lg:py-20 lg:text-left lg:text-7xl" ref={textLineStart}>
            These Are The{" "}
            <span className="inline-block" >
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
            <div
              className="flex flex-row space-x-10 bg-white w-full h-[4rem] text-center items-center "
              id="labs"
            >
              <div className="bg-[#57BE94] h-full w-4"></div>
              <p className="text-2xl text-[#57BE94]">LABS</p>
            </div>
            <div
              className="flex flex-row space-x-10 bg-white w-full h-[4rem] text-center items-center"
              id="enginnering"
            >
              <div className="bg-[#4F66AF] h-full w-4"></div>
              <p className="text-2xl text-[#4F66AF]">ENGINEERING</p>
            </div>
            <div
              className="flex flex-row space-x-10 bg-white w-full h-[4rem] text-center items-center"
              id="sandbox"
            >
              <div className="bg-[#FFAE00] h-full w-4"></div>
              <p className="text-2xl text-[#FFAE00]">SANDBOX</p>
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

      <m.div className="flex flex-col h-screen bg-blue-400 w-full overflow-y-scroll overscroll-auto z-0 snapping scrollbar snapper">
        <m.div className="h-full w-full">
          {list2.map(({ color, text1, text2, text3 }, index1) => {
            return (
              <m.div
                className="flex flex-col lg:flex-row h-full w-full snapper"
                key={index1}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.7 }}
                transition={{ staggerChildren: 0.2 }}
              >
                <div className="hidden lg:flex flex-col w-[50%] h-full bg-[#131622] space-y-10 text-3xl justify-center items-center text-[#A7A9B1] text-left"></div>
                <m.div
                  className="w-full h-full lg:w-[50%] flex flex-col items-center justify-center text-white p-20"
                  whileInView={() => setscrollColor(color)}
                  style={{ backgroundColor: color }}
                >
                  <m.div
                    className="flex "
                    variants={textVariant}
                    whileInView={() => setscrollColor(color)}
                  >
                    <div className="h-full w-3 bg-white mr-5"></div>
                    <m.p variants={textVariant} className="text-left ">
                      {text1}
                    </m.p>
                  </m.div>
                  <br />
                  <m.p
                    whileInView={() => setscrollIndex(index1)}
                    variants={textVariant}
                    className="text-left hidden lg:block "
                  >
                    {text2}
                  </m.p>
                  <br />
                  <m.p variants={textVariant} className="text-left ">
                    {text3}
                  </m.p>
                </m.div>
              </m.div>
            );
          })}
        </m.div>
        <div className="hidden lg:block absolute text-left text-[#A7A9B1] space-y-10 ml-[10%] mt-[20%] text-3xl">
          {list.map((item, index2) => (
            <div className="flex" key={index2}>
              <div
                className={index2 == scrollIndex ? "w-3 mr-5" : "hidden"}
                style={{ backgroundColor: scrollColor }}
              ></div>
              <p
                className={
                  index2 == scrollIndex
                    ? "text-white text-5xl font-bold mr-2"
                    : "hidden"
                }
              >
                0{index2 + 1}.{" "}
              </p>
              {index2 == scrollIndex ? (
                <p
                  className="text-5xl font-bold"
                  style={{ color: scrollColor }}
                >
                  {item}
                </p>
              ) : (
                <p>{item} </p>
              )}
            </div>
          ))}
        </div>
        <div className="absolute text-left text-[#A7A9B1] space-y-10 ml-[10%] mt-[10%] text-3xl">
          {list.map((item, index2) => {
            if (index2 == scrollIndex) {
              return (
                <div className="flex lg:hidden">
                  <p className="text-white text-5xl font-bold mr-2">
                    0{index2 + 1}.{" "}
                  </p>
                  <p className="text-white text-5xl font-bold">{item}</p>
                </div>
              );
            }
          })}
        </div>
      </m.div>
    </>
  );
}

export default Units;
