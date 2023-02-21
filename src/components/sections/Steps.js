import React, { useState } from "react";
import { motion as m, useAnimation } from "framer-motion";
import curvedUnderline from "../../assets/Vector 340.png";

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 200 },
};

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
    highlitedText: "launch !",
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

const colorleft=["#FFAE00","#57BE94","#4F66AF","#FFAE00","#57BE94","#4F66AF"]
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
function Steps() {
  const [scrollIndex, setscrollIndex] = useState();  
  return (
    <>
    {/* <div className="w-full h-[2.5rem] flex justify-start items-center text-left mb-10">
          <div className="lg:w-[12%] w-[10%] h-full bg-[#FFAE00] mr-5 md:mr-10"></div>
          <p className="font-bold text-2xl md:text-3xl">WE TAKE SIMPLE APPROACH</p>
        </div> */}
        <div className="w-full mb-[1rem]">
        <div className="flex flex-row snap-normal">
          <div className="h-10 w-5 bg-[#FFAE00] w-[10%] lg:w-[12%] mr-5 md:mr-10"></div>
          <p className="text-2xl md:text-3xl text-left font-bold uppercase">
          WE TAKE SIMPLE APPROACH
          </p>
        </div>
        </div>
    <m.div className="flex flex-col h-screen w-full overflow-y-scroll overscroll-auto z-0  scrollbar snapping  snapped font-bold ">
      <m.div className="h-full w-full">
        {list2.map(({ color, text1, text2, highlitedText }, index1) => {
          return (
            <m.div
              className="flex flex-col lg:flex-row h-full w-full snap-always snap-center "
              key={index1}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {/* left */}
              <div className="hidden lg:flex flex-col w-full lg:w-[50%] lg:h-full bg-[#131622] space-y-10 text-3xl justify-center items-center text-[#A7A9B1] text-left"></div>
              
              {/* right */}
              <m.div
                className="w-full h-full px-[2rem] flex items-center justify-center text-left md:text-center text-white text-3xl md:text-4xl font-bold py-20 lg:w-[50%] md:px-[0rem]"
                style={{ backgroundColor: color }}
              >
                <p>
                  <m.span whileInView={() => setscrollIndex(index1)} variants={textVariant}>{text1} </m.span>
                  <m.span
                    variants={textVariant}
                    className={index1==4?" md:mx-[-0.6rem] text-[#131622]  inline-block ":"text-[#131622]  inline-block"}
                  >
                    {highlitedText}
                    <img
                      src={curvedUnderline}
                      className="md:w-[90%] h-[21.07px]"
                      alt="Flowbite Logo"
                    />
                  </m.span>{" "}
                  <m.span variants={textVariant}>{text2}</m.span>
                  <m.p></m.p>
                </p>
              </m.div>
            </m.div>
          );
        })}
      </m.div>
      
      {/* tab and desktop left */}
      <div className="absolute text-left text-[#A7A9B1] space-y-[4rem] ml-[15%] mt-[5%] text-3xl">
        {list.map((item, index2) => (
          <div className="hidden lg:flex">
          <div
              className={index2 == scrollIndex ? "w-3 mr-5" : "hidden"}
              style={{ backgroundColor: colorleft[index2] }}
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
                  ? "text-white text-5xl"
                  : "text-gray-300 font-light"
              }
            >
              {item}
            </p>
          </div>
        ))}
      </div>


      
      {/* mobile left */}
      <div className="absolute text-left text-[#A7A9B1] space-y-10 ml-[10%] mt-[10%] text-3xl">
        {list.map((item, index2) =>
          {
            if (index2 == scrollIndex) {
              return (
                <div className="flex lg:hidden">
                  <p className="text-white text-3xl font-bold mr-2">
                    0{index2 + 1}.{" "}
                  </p>
                  <p className="text-white text-3xl font-bold">{item}</p>
                </div>
              );
            }
          }
        )}
      </div>
    </m.div>
    </>
  );
}

export default Steps;