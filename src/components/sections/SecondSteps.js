import React, { useEffect, useState } from "react";
import { motion as m } from "framer-motion";
import curvedUnderline from "../../assets/Vector 340.png";
import { useRef } from "react";
import "../../App.css";

const list = ["IDEATE", "VALIDATE", "DESGIN", "BUILD", "SPINOUT", "SCALE"];
const list2 = [
  {
    text1: "Everything starts with an idea, spark of",
    highlitedText: "inspiration",
    text2: "that we get from different sources",
    color: "#FFAE00",
  },
  {
    text1:
      "Before we start building, we put each proposal through our tried and true",
    highlitedText: "validation",
    text2: "process",
    color: "#57BE94",
  },
  {
    text1: "We take the validated idea and",
    highlitedText: " Design an MVP",
    text2: ", After transforming the idea into a viable product",
    color: "#4F66AF",
  },
  {
    text1:
      "After gathering the full design concept we will create a dedicated team in order to ",
    highlitedText: "build out the MVP ",
    text2: "",
    color: "#FFAE00",
  },
  {
    text1: "We",
    highlitedText: "launch",
    text2:
      "implement our proposed strategies until it reaches a point where it shows market traction  ",
    color: "#57BE94",
  },
  {
    text1: "The moment the business becomes valid enough to raise funds",
    highlitedText: "we spin it off ",
    text2: "as an independent company with its own team.",
    color: "#4F66AF",
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

function SecondSteps() {
  const [scrollIndex, setscrollIndex] = useState();
  const [scrollColor, setscrollColor] = useState();
  const myref = useRef();

  return (
    <div className="flex flex-col bg-green-400 h-screen w-full">
      <div className="h-full bg-red-500 w-full flex flex-row">
        <div className="w-[50%] bg-[#131622] h-full flex  justify-center items-center">
          <div className="flex flex-col text-[#A7A9B1] space-y-10 text-left text-3xl ">
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
                <p
                  className={
                    index2 == scrollIndex
                      ? "text-white text-5xl font-bold"
                      : "text-gray-300"
                  }
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] bg-gray-300 h-full overflow-y-scroll snapping">
          {list2.map((item, index) => {
            return (
              <m.div
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{ once: false, amount: 0.7 }}
                key={index}
                transition={{ staggerChildren: 0.2 }}
                className="h-full flex items-center justify-center text-white text-3xl font-bold p-20 snapper"
                style={{ backgroundColor: item.color }}
                ref={myref}
              >
                <p>
                  <m.span
                    whileInView={() => setscrollColor(item.color)}
                    variants={textVariant}
                  >
                    {item.text1}{" "}
                  </m.span>
                  <m.span
                    variants={textVariant}
                    className="text-[#131622] inline-block"
                    whileInView={() => setscrollIndex(index)}
                  >
                    {item.highlitedText}
                    <img
                      src={curvedUnderline}
                      className="w-full h-[21.07px]"
                      alt="Flowbite Logo"
                    />
                  </m.span>{" "}
                  <m.span variants={textVariant}>{item.text2}</m.span>
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SecondSteps;
