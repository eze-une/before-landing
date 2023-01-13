import React, { useEffect } from "react";
import { motion as m, useAnimation, Variants } from "framer-motion";

import { useInView } from "react-intersection-observer";

const cardVariant = {
  offscreen: {
    y: "0",
    opacity: 0.5,
  },
  onscreen: {
    opacity: 1,
    y:"0",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
};

const textVariant={
  offscreen:{x:"-100vh",opacity:0},
  onscreen:{
    opacity: 1,
    y:0,
    x:0,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 2,
    },
  }
}
function StepsDetails({ text1, text2, color, highlitedText, list, index1 }) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: "100vw",
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8,
        },
      });
    }
    if(!inView){
      animation.start({
             x:'0'
            }); 
    }
  });

  return (
    <div
      className="flex w-full h-screen"
      key={text1}
      // initial={{ scale: 0 }}
      // animate={{ scale: 1 }}
      // animate={{y:"0%"}}

      // ref={ref}
      // initial={{ opacity: 0 }}
      // whileInView="onscreen"
      // transition={{ duration: 1, ease: "ease-out" }}
      // viewport={{ once: true, amount: 0.8 }}
      // variants={cardVariant}
    >
      <div className="h-full w-[50%] bg-[#131622] flex  justify-center items-center  ">
        <div className="flex flex-col text-[#A7A9B1] space-y-10 text-left text-3xl ">
          {list.map(
            (
              item,
              index2
            ) => (
              <div className="flex">
                <div
                  className={index2 == index1 ? "w-3 mr-5" : "hidden"}
                  style={{ backgroundColor: color }}
                ></div>
                <m.p  variants={textVariant}
                  className={
                    index2 == index1
                      ? "text-white text-5xl font-bold mr-2"
                      : "hidden"
                  }
                >
                  0{index2 + 1}.{" "}
                </m.p>
                <m.p variants={textVariant}
                  className={
                    index2 == index1 ? "text-white text-5xl font-bold" : ""
                  }
                >
                  {item}
                </m.p>
              </div>
            )
          )}
        </div>
      </div>
      <div
        className="h-full flex w-[50%] items-center justify-center text-white text-3xl font-bold p-20"
        style={{ backgroundColor: color }}
      >
        <m.p variants={textVariant}>
          {text1}{" "}
          <m.span variants={textVariant} className="text-[#131622] inline-block">
            {highlitedText}
            <img
              // src={curvedUnderline}
              className="w-full h-[21.07px]"
              alt="Flowbite Logo"
            />
          </m.span>{" "}
          {text2}
        </m.p>
      </div>
    </div>
  );
}

export default StepsDetails;
