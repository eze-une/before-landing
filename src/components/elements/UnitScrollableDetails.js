import React, { useState } from "react";
import curvedUnderline from "../../assets/Vector 340.png";
import { motion as m } from "framer-motion";

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

function UnitScrollableDetails() {
  const [scrollIndex, setscrollIndex] = useState();
  const [scrollColor, setscrollColor] = useState();
  return (
    <m.div
      className="flex flex-col h-screen bg-blue-400 w-full overflow-y-scroll overscroll-auto z-0 snapping scrollbar snapper"
      id="units"
    >
      <m.div className="h-full w-full">
        {/* right sidebar scroll */}
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
                  className="text-left hidden md:block "
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
                index2 == scrollIndex ? "text-white font-bold mr-2" : "hidden"
              }
            >
              0{index2 + 1}.{" "}
            </p>
            {index2 == scrollIndex ? (
              <p className="text-3xl font-bold" style={{ color: scrollColor }}>
                {item}
              </p>
            ) : (
              <p>{item} </p>
            )}
          </div>
        ))}
      </div>

      <div className="absolute text-left text-[#A7A9B1] space-y-10 ml-[10%] mt-[10%] text-3xl">
        {list.map((item, index) => {
          if (index == scrollIndex) {
            return (
              <div className="flex lg:hidden items-end text-3xl md:text-5xl">
                <p className="text-white text-3xl md:text-5xl font-bold mr-2">
                  0{index + 1}.{" "}
                </p>
                <p className="text-white font-bold">{item}</p>
              </div>
            );
          }
        })}
      </div>
    </m.div>
  );
}

export default UnitScrollableDetails;
