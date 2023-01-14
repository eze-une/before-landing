import React, { useState } from "react";
import { motion as m, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect } from "react";
import StepsDetails from "../elements/StepsDetails";
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
function Steps() {
  const [scrollIndex, setscrollIndex] = useState();
  const [scrollColor, setscrollColor] = useState();
  return (
    // <div>
    //   {list2.map(({ color, text1, text2, highlitedText }, index1) => {
    //     return (
    //       <div
    //         initial={"offscreen"}
    //         whileInView={"onscreen"}
    //         viewport={{ once: false, amount: 0.5 }}
    //         transition={{ staggerChildren: 0.1 }}
    //       >
    //         {/* <StepsDetails  text1={text1} text2={text2} highlitedText={highlitedText} color={color}index1={index1} list={list}/> */}
    //         <div
    //           className="flex w-full h-screen"
    //           key={text1}
    //           // initial={{ scale: 0 }}
    //           // animate={{ scale: 1 }}
    //           // animate={{y:"0%"}}

    //           // ref={ref}
    //           // initial={{ opacity: 0 }}
    //           // whileInView="onscreen"
    //           // transition={{ duration: 1, ease: "ease-out" }}
    //           // viewport={{ once: true, amount: 0.8 }}
    //           // variants={cardVariant}
    //         >
    //           <div className="h-full w-[50%] bg-[#131622] flex  justify-center items-center  ">
    //             <div className="flex flex-col text-[#A7A9B1] space-y-10 text-left text-3xl ">
    //               {list.map((item, index2) => (
    //                 <div className="flex">
    //                   <div
    //                     className={index2 == index1 ? "w-3 mr-5" : "hidden"}
    //                     style={{ backgroundColor: color }}
    //                   ></div>
    //                   <p
    //                     className={
    //                       index2 == index1
    //                         ? "text-white text-5xl font-bold mr-2"
    //                         : "hidden"
    //                     }
    //                   >
    //                     0{index2 + 1}.{" "}
    //                   </p>
    //                   <p
    //                     className={
    //                       index2 == index1
    //                         ? "text-white text-5xl font-bold"
    //                         : ""
    //                     }
    //                   >
    //                     {item}
    //                   </p>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //           <div
    //             className="h-full flex w-[50%] items-center justify-center text-white text-3xl font-bold p-20"
    //             style={{ backgroundColor: color }}
    //           >
    //             <p>
    //               {text1}{" "}
    //               <span className="text-[#131622] inline-block">
    //                 {highlitedText}
    //                 <img
    //                   src={curvedUnderline}
    //                   className="w-full h-[21.07px]"
    //                   alt="Flowbite Logo"
    //                 />
    //               </span>{" "}
    //               {text2}
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
    <m.div className="flex flex-col h-screen bg-blue-400 w-full overflow-y-scroll overscroll-auto z-0 snapping">
      <m.div className="h-full w-full">
        {list2.map(({ color, text1, text2, highlitedText }, index1) => {
          return (
            <m.div
              className="flex flex-row h-full w-full snapper"
              key={index1}
              initial={"offscreen"}
              whileInView={"onscreen"}
              viewport={{ once: false, amount: 0.7 }}
              transition={{ staggerChildren: 0.2 }}
            >
              <div className="flex flex-col w-[50%] h-full bg-[#131622] space-y-10 text-3xl justify-center items-center text-[#A7A9B1] text-left"></div>
              <m.div
                className="w-[50%] flex items-center justify-center text-white text-3xl font-bold p-20"
                whileInView={() => setscrollColor(color)}
                style={{ backgroundColor: color }}
              >
                <p>
                  <m.span
                    variants={textVariant}
                  >
                    {text1}{" "}
                  </m.span>
                  <m.span
                    variants={textVariant}
                    className="text-[#131622] inline-block"
                  >
                    {highlitedText}
                    <img
                      src={curvedUnderline}
                      className="w-full h-[21.07px]"
                      alt="Flowbite Logo"
                    />
                  </m.span>{" "}
                  <m.span
                    variants={textVariant}
                  >
                    {text2}
                  </m.span>
                  <m.p whileInView={() => setscrollIndex(index1)}></m.p>
                </p>
              </m.div>
            </m.div>
          );
        })}
      </m.div>
      {/* <div
        className={
          // show
          scrollIndex==undefined ? 
            "hidden":  "flex flex-col justify-center items-center  text-[#A7A9B1] space-y-10 text-left text-3xl min-h-screen z-20 sticky top-0 w-[50%]"
             
        }
      >
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
      </div> */}
      <div className="absolute text-left text-[#A7A9B1] space-y-10 ml-[10%] mt-[10%] text-3xl">
        {list.map((item, index2) => (
          <div className="flex">
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
    </m.div>
  );
}

export default Steps;
