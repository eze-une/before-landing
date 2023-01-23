// import React, { useState } from "react";
// import { motion, useAnimation } from "framer-motion";

// function Teams() {

//   return (
//     <div className="flex flex-col h-[500px] items-start justify-start w-full mt-10">
//       <div className="flex flex-row w-full">
//         <div className="h-10 w-5 bg-[#57BE94] w-[16%] mr-10"></div>
//         <p className="text-3xl font-bold">Who Help us to make these true?</p>
//       </div>
//       <div className="flex h-full w-full items-center justify-around">
//         <div className="flex space-x-10 h-full w-full items-center">
//           <div className="w-[400px]">
//             <p className="text-3xl font-bold text-left">
//               We would like to push the innovative Boundary of technology
//             </p>
//           </div>
//           <motion.div layout transition={spring} onClick={changeonClick} style={{ overflow: "scroll" }}>
//             <div
//               className={
//                 isClicked
//                   ? "h-[300px] w-[250px] relative z-0"
//                   : "h-[300px] w-[150px] relative z-0"
//               }
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
//                 className="h-full w-full rounded-[25px] bg-cover"
//                 alt="Flowbite Logo"
//               />
//               <div
//                 className={
//                   isClicked
//                     ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
//                     : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
//                 }
//               >
//                 <div className={isClicked ? "" : "rotate-[270deg] mb-5"}>
//                   <p className="text-2xl font-bold ">sthn</p>
//                   <p className="">sthn</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//           <motion.div layout transition={spring} onClick={changeisAnimating}>
//             <div
//               className={
//                 isAnimating
//                   ? "h-[300px] w-[250px] relative z-0"
//                   : "h-[300px] w-[150px] relative z-0"
//               }
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
//                 className="h-full w-full rounded-[25px] bg-cover"
//                 alt="Flowbite Logo"
//               />
//               <div
//                 className={
//                   isAnimating
//                     ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
//                     : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
//                 }
//               >
//                 <div className={isAnimating ? "" : "rotate-[270deg] mb-5"}>
//                   <p className="text-2xl font-bold ">sthn</p>
//                   <p className="">sthn</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Teams;

// import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { motion as m, useScroll, useAnimation } from "framer-motion";
import images from "../elements/images";

export default function Teams() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [isClicked, setisClicked] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);
  const changeisAnimating = () => setisAnimating(!isAnimating);
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const changeonClick = () => setisClicked(!isClicked);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    // <div className="w-full ">
    //   {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
    //     <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
    //     <motion.circle
    //       cx="50"
    //       cy="50"
    //       r="30"
    //       pathLength="1"
    //       className="indicator"
    //       style={{ pathLength: scrollXProgress }}
    //     />
    //   </svg> */}
    //   <div className="flex flex-row w-full mt-10">
    //     <div className="h-10 bg-[#57BE94] w-[10%] mr-10"></div>
    //     <p className="text-3xl font-bold">Who Helps us to make these true?</p>
    //   </div>
    //   <div className="flex flex-row p-20 m-5 overflow-scroll space-x-10 w-full h-full justify-center items-center">
    //     <div className="flex flex-row w-[300px] h-full text-4xl font-bold text-left ">
    //       <div className="bg-[#57BE94] w-10"></div>
    //       <p className="">
    //         We would like to push the innovative Boundary of technology{" "}
    //       </p>
    //     </div>
    //     <motion.div layout transition={spring} onClick={changeisAnimating}>
    //       <div
    //         className={
    //           isAnimating
    //             ? "h-[300px] w-[250px] relative z-0"
    //             : "h-[300px] w-[130px] relative z-0"
    //         }
    //       >
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    //           className="h-full w-full rounded-[15px] bg-cover"
    //           alt="Flowbite Logo"
    //         />
    //         <div
    //           className={
    //             isAnimating
    //               ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[10px]"
    //               : "absolute text-left w-full h-full inset-0 flex flex-col justify-end items-start z-10 rounded-[15px] text-[#ffffff] bg-black bg-opacity-50"
    //           }
    //         >
    //           <div className={isAnimating ? "" : "rotate-[270deg] w-full"}>
    //             <p className="text-2xl font-bold ">Robel Mesfin</p>
    //             <p className="">CEO at Ablaze Labs</p>
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //     <motion.div layout transition={spring} onClick={changeisAnimating}>
    //       <div
    //         className={
    //           isAnimating
    //             ? "h-[300px] w-[250px] relative z-0"
    //             : "h-[300px] w-[150px] relative z-0"
    //         }
    //       >
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    //           className="h-full w-full rounded-[25px] bg-cover"
    //           alt="Flowbite Logo"
    //         />
    //         <div
    //           className={
    //             isAnimating
    //               ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
    //               : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
    //           }
    //         >
    //           <div className={isAnimating ? "" : "rotate-[270deg] mb-5"}>
    //             <p className="text-2xl font-bold ">sthn</p>
    //             <p className="">sthn</p>
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //     <motion.div layout transition={spring} onClick={changeisAnimating}>
    //       <div
    //         className={
    //           isAnimating
    //             ? "h-[300px] w-[250px] relative z-0"
    //             : "h-[300px] w-[150px] relative z-0"
    //         }
    //       >
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    //           className="h-full w-full rounded-[25px] bg-cover"
    //           alt="Flowbite Logo"
    //         />
    //         <div
    //           className={
    //             isAnimating
    //               ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
    //               : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
    //           }
    //         >
    //           <div className={isAnimating ? "" : "rotate-[270deg] mb-5"}>
    //             <p className="text-2xl font-bold ">sthn</p>
    //             <p className="">sthn</p>
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //     <motion.div layout transition={spring} onClick={changeisAnimating}>
    //       <div
    //         className={
    //           isAnimating
    //             ? "h-[300px] w-[250px] relative z-0"
    //             : "h-[300px] w-[150px] relative z-0"
    //         }
    //       >
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    //           className="h-full w-full rounded-[25px] bg-cover"
    //           alt="Flowbite Logo"
    //         />
    //         <div
    //           className={
    //             isAnimating
    //               ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
    //               : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
    //           }
    //         >
    //           <div className={isAnimating ? "" : "rotate-[270deg] mb-5"}>
    //             <p className="text-2xl font-bold ">sthn</p>
    //             <p className="">sthn</p>
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //     <motion.div layout transition={spring} onClick={changeisAnimating}>
    //       <div
    //         className={
    //           isAnimating
    //             ? "h-[300px] w-[250px] relative z-0"
    //             : "h-[300px] w-[150px] relative z-0"
    //         }
    //       >
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    //           className="h-full w-full rounded-[25px] bg-cover"
    //           alt="Flowbite Logo"
    //         />
    //         <div
    //           className={
    //             isAnimating
    //               ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
    //               : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
    //           }
    //         >
    //           <div className={isAnimating ? "" : "rotate-[270deg] mb-5"}>
    //             <p className="text-2xl font-bold ">sthn</p>
    //             <p className="">sthn</p>
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //     <motion.div layout transition={spring} onClick={changeisAnimating}>
    //       <div
    //         className={
    //           isAnimating
    //             ? "h-[300px] w-[250px] relative z-0"
    //             : "h-[300px] w-[150px] relative z-0"
    //         }
    //       >
    //         <img
    //           src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
    //           className="h-full w-full rounded-[25px] bg-cover"
    //           alt="Flowbite Logo"
    //         />
    //         <div
    //           className={
    //             isAnimating
    //               ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
    //               : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
    //           }
    //         >
    //           <div className={isAnimating ? "" : "rotate-[270deg] mb-5"}>
    //             <p className="text-2xl font-bold ">sthn</p>
    //             <p className="">sthn</p>
    //           </div>
    //         </div>
    //       </div>
    //     </motion.div>
    //   </div>
    // </div>c:\Users\Ezana\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html
    <div className="flex flex-col w-full py-10 snapped bg-[#E7F0F5]">
      <div className="flex flex-row ">
        <div className="h-10 w-5 bg-[#57BE94] w-[10%] lg:w-[17%] mr-10"></div>
        <p className="text-3xl text-left font-bold">Who Help us to make these true?</p>
      </div>

      <m.div
        ref={carousel}
        className="carousel cursor-grab overflow-hidden items-center px-20"
      >
        <m.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="inner-carousel flex items-center justify-center"
        >
          <div className="w-[400px] flex flex-row">
            <div className="h-full w-5 bg-[#57BE94] w-[16%] m-10"></div>
            <p className="text-5xl font-bold text-left">
              We would like to push the innovative <span className="text-[#57BE94]"> Boundary</span> of technology
            </p>
          </div>

          {images.map((image, i) => {
            return (
              <m.div
                layout
                onClick={changeonClick}
                className="w-[20%] h-[30rem] p-[40px]"
                key={i}
              >
                <div
                  className={
                    isClicked
                      ? "h-full w-[250px] relative z-0"
                      : "h-full w-[150px] ml-20 relative z-0"
                  }
                >
                  <img
                    src={image}
                    className="h-full w-full rounded-[25px] bg-cover"
                    alt="Flowbite Logo"
                  />
                  <div
                    className={
                      isClicked
                        ? "absolute text-left w-full h-[25%] pl-5 inset-0 mt-[90%] text-white justify-center items-center bg-black rounded-[15px]"
                        : "absolute text-left w-full h-full pl-5 inset-0 flex flex-col justify-end items-start z-10 rounded-[25px] text-[#ffffff] bg-black bg-opacity-50"
                    }
                  >
                    <div className={isClicked ? "" : "rotate-[270deg] mb-5"}>
                      <p className="text-2xl font-bold ">sthn</p>
                      <p className="">sthn</p>
                    </div>
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>
      </m.div>
    </div>
  );
}
const spring = {
  type: "spring",
  stiffness: 150,
  damping: 20,
};
