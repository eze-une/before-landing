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

function Units() {
  const [scrollIndex, setscrollIndex] = useState();
  const [scrollColor, setscrollColor] = useState();
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
                className="h-full flex flex-col items-center justify-center text-white items-center p-20 snapper"
                style={{ backgroundColor: item.color }}
              >
                <m.div
                  className="flex "
                  variants={textVariant}
                  whileInView={() => setscrollColor(item.color)}
                >
                  <div className="h-full w-3 bg-white mr-5"></div>
                  <m.p variants={textVariant} className="text-left ">
                    {item.text1}
                  </m.p>
                </m.div>
                <br />
                <m.p
                  whileInView={() => setscrollIndex(index)}
                  variants={textVariant}
                  className="text-left "
                >
                  {item.text2}
                </m.p>
                <br />
                <m.p variants={textVariant} className="text-left ">
                  {item.text3}
                </m.p>
              </m.div>
            );
          })}
        </div>
      </div>
    </div>

    // <>
    //   {list2.map(({ color, text1, text2,text3, }, index1) => {
    //     return (
    //       <div className="flex w-full h-screen" key={text1}>
    //         <div className="h-full w-[50%] bg-[#131622] flex  justify-center items-center  ">
    //           <div className="flex flex-col text-[#A7A9B1] space-y-10 text-left text-3xl ">
    //             {list.map((item, index2) => (
    //               <div className="flex" key={index2}>
    //                 <div
    //                   className={index2 == index1 ? "w-3 mr-5" : "hidden"}
    //                   style={{ backgroundColor: color }}
    //                 ></div>
    //                 <p
    //                   className={
    //                     index2 == index1
    //                       ? "text-5xl font-bold mr-2 text-white"
    //                       : "hidden"
    //                   }
    //                 >
    //                   {" "}
    //                   0{index2 + 1}.{" "}
    //                 </p>
    //                 {/* <p
    //                   className={
    //                     index2 == index1 ? "text-5xl font-bold"  : "text-[#A7A9B1]"
    //                   } */}
    //                 {/* //   style={{ color: color }} */}
    //                 {/* > */}
    //                   {index2==index1? <p className='text-5xl font-bold' style={{ color: color }}>{item} </p>:<p>{item} </p>}
    //                 {/* </p> */}
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //         <div
    //           className="h-full flex flex-col w-[50%] items-center justify-center text-white  p-20"
    //           style={{ backgroundColor: color }}
    //         >
    //             <div className='flex '>
    //                 <div className="h-full w-3 bg-white mr-5    "></div>
    //             <p className='text-left '>
    //             {text1}
    //           </p>
    //             </div>

    //           <br />
    //           <p className='text-left '>
    //             {text2}
    //           </p>
    //           <br />
    //           <p className='text-left '>
    //             {text3}
    //           </p>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </>
  );
}

export default Units;
