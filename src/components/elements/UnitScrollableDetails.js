import React, { useRef, useState } from "react";
import curvedUnderline from "../../assets/Vector 340.png";
import { calcLength, motion as m } from "framer-motion";

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
const colors = ["#57BE94", "#4F66AF", "#FFAE00"];
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

function UnitScrollableDetails({ scrollToSandox, setscrollToSandox, scrollToEngineering, setscrollToEngineering }) {
  const [scrollIndex, setscrollIndex] = useState();
  const EngineeringRef = useRef(null);
  const SandboxRef = useRef(null);

  if (scrollToEngineering) {
    EngineeringRef.current?.scrollIntoView(({ behavior: 'smooth' }));
    setscrollToSandox(false);
  }
  if (scrollToSandox) {
    SandboxRef.current?.scrollIntoView(({ behavior: 'smooth' }));
    setscrollToEngineering(false);
  }

  return (
    <>
      <m.div
        className="flex flex-col h-screen bg-blue-400 w-full overflow-y-scroll overscroll-auto z-0 snapping scrollbar snapper "
        id="units"
      >
        <m.div className="h-full w-full">
          <m.div
            className="flex flex-col lg:flex-row h-full w-full snapper"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <div className="hidden lg:flex flex-col w-[50%] h-full bg-[#131622] space-y-10  justify-center items-center text-[#A7A9B1] text-left text-3xl"></div>
            <m.div
              className="w-full h-full lg:w-[50%] md:text-2xl font-light flex flex-col items-center justify-center text-white px-3 py-10 md:p-20"
              style={{ backgroundColor: "#57BE94" }}
            >
              <m.div className="flex" variants={textVariant}>
                <div className="h-full w-10 md:w-3 bg-white mr-5"></div>
                <m.p
                  variants={textVariant}
                  className="text-left font-bold"
                  whileInView={() => setscrollIndex(0)}
                >
                  "We are exceedingly focusing on high quality and cost effective implementation of services. We are advancing at a tremendous pace, with the involvement of skilled and experienced team working on organization",

                </m.p>
              </m.div>
              <br />
              <m.p
                variants={textVariant}
                className="text-left "
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              </m.p>
              <br />
              <m.p variants={textVariant} className="text-left  hidden md:block">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              </m.p>
            </m.div>
          </m.div>


          
          <m.div
            className="flex flex-col lg:flex-row h-full w-full snapper"
            ref={EngineeringRef}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <div className="hidden lg:flex flex-col w-[50%] h-full bg-[#131622] space-y-10  justify-center items-center text-[#A7A9B1] text-left text-3xl"></div>
            <m.div
              className="w-full h-full lg:w-[50%] md:text-2xl font-light flex flex-col items-center justify-center text-white px-3 py-10 md:p-20"
              style={{ backgroundColor: "#4F66AF" }}
            >
              <m.div className="flex" variants={textVariant}>
                <div className="h-full w-10 md:w-3 bg-white mr-5"></div>
                <m.p
                  variants={textVariant}
                  className="text-left font-bold"
                  whileInView={() => setscrollIndex(1)}
                >
                  "We are exceedingly focusing on high quality and cost effective implementation of services. We are advancing at a tremendous pace, with the involvement of skilled and experienced team working on organization",

                </m.p>
              </m.div>
              <br />
              <m.p
                variants={textVariant}
                className="text-left "
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              </m.p>
              <br />
              <m.p variants={textVariant} className="text-left hidden md:block ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              </m.p>
            </m.div>

          {/* snadbox */}
          </m.div>
          <m.div
            className="flex flex-col lg:flex-row h-full w-full snapper"
            ref={SandboxRef}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: false, amount: 0.7 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <div className="hidden lg:flex flex-col w-[50%] h-full bg-[#131622] space-y-10  justify-center items-center text-[#A7A9B1] text-left text-3xl"></div>
            <m.div
              className="w-full h-full lg:w-[50%] md:text-2xl font-light flex flex-col items-center justify-center text-white px-3 py-10 md:p-20"
              style={{ backgroundColor: "#FFAE00" }}
            >
              <m.div className="flex" variants={textVariant}>
                <div className="h-full w-10 md:w-3 bg-white mr-5"></div>
                <m.p
                  variants={textVariant}
                  className="text-left font-bold"
                  whileInView={() => setscrollIndex(2)}
                >
                  "We are exceedingly focusing on high quality and cost effective implementation of services. We are advancing at a tremendous pace, with the involvement of skilled and experienced team working on organization",

                </m.p>
              </m.div>
              <br />
              <m.p
                variants={textVariant}
                className="text-left "
              >
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
              </m.p>
              <br />
              <m.p variants={textVariant} className="text-left  hidden md:block ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              </m.p>
            </m.div>
          </m.div>
          {/* //   );
        // })} */}
        </m.div>

        {/* tab and dektop */}
        <div className="hidden lg:block absolute text-left text-[#A7A9B1] space-y-10 ml-[12%] mt-[20%] text-3xl">
          {list.map((item, index2) => (
            <div className="flex" key={index2}>
              <div
                className={index2 == scrollIndex ? "w-3 mr-5" : "hidden"}
                style={{ backgroundColor: colors[index2] }}
              ></div>
              <p
                className={
                  index2 == scrollIndex
                    ? "text-white font-bold mr-2 text-5xl"
                    : "hidden"
                }
              >
                0{index2 + 1}.{" "}
              </p>
              {index2 == scrollIndex ? (
                <p
                  className="text-5xl font-bold"
                  style={{ color: colors[index2] }}
                >
                  {item}
                </p>
              ) : (
                <p className="font-light">{item} </p>
              )}
            </div>
          ))}
        </div>

        {/* mobile view        */}
        <div className="absolute text-left text-[#A7A9B1] space-y-10 ml-[5%] mt-[5%] text-3xl">
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
    </>
  );
}

export default UnitScrollableDetails;
