import React, { useRef, useState } from "react";
import Xarrow from "react-xarrows";
import UnitScrollableDetails from "../elements/UnitScrollableDetails";
import AnchorLink from "react-anchor-link-smooth-scroll";


function Units() {
  const textLineStart = useRef(null);
  const [scrollToSandox, setscrollToSandox] = useState(false); 
  const [scrollToEngineering, setscrollToEngineering] = useState(false); 

  // const [scrollId, setscrollId] = useState(0); 
  console.log("sargasfgadf",scrollToSandox);
  return (
    <>
      <div className="flex flex-col h-full w-full space-y-20 lg:space-y-0 snapped bg-[#F6F9FF]">
        <div className="flex flex-row snap-normal">
          <div className="h-10 w-5 bg-[#FFAE00] w-[10%] lg:w-[12%] mr-10"></div>
          <p className="text-3xl text-left font-bold uppercase">
          How Do we make these true?
          </p>
        </div>
        <div className="flex flex-col mt-10 items-center justify-center text-center  md:mx-[10%]  pb-[10rem] lg:flex-row" >
          <p
            className="text-5xl font-bold lg:py-10 lg:text-left lg:text-7xl md:w-[55%] snapped"
            ref={textLineStart} 
          >
            These Are The{" "}
            <span className="inline-block">
              <span
                className="text-transparent"
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


          <div className="py-20 flex flex-row w-full lg:flex-col ml:10 md:w-[45%] lg:ml-20 snapped">
            <div className="flex flex-row justify-center w-full px-10 lg:flex-col lg:space-x-0 lg:items-center">
              <div className="flex flex-row space-x-10  lg:space-x-0 lg:flex-col lg:space-y-5 text-3xl">
                <AnchorLink href="#units">
                  <div
                    className="flex flex-col w-[4rem] h-60 bg-white text-left items-center lg:w-[20rem] lg:justify-start lg:h-[5rem] lg:flex-row  "
                    id="labs"
                  >
                    <div className="bg-[#57BE94] w-full h-3  lg:h-full lg:w-2"></div>
                    <p className="text-[#57BE94] font-light mt- lg:mt-0 translate-y-[50%] rotate-[90deg] lg:rotate-[0deg] lg:translate-y-0 lg:mx-5">LABS</p>
                  </div>
                </AnchorLink>


                <AnchorLink href="#units">
                  <div
                    className="flex flex-col w-[4rem] h-60 bg-white text-left items-center lg:w-full lg:justify-start lg:h-[5rem] lg:flex-row"
                    id="enginnering" 
                    onClick={()=>setscrollToEngineering(true)}
                  >
                    <div className="bg-[#4F66AF] w-full h-3  lg:h-full lg:w-2"></div>
                    <p className="text-[#4F66AF] font-light mt-3 lg:mt-0 translate-y-[200%] rotate-[90deg] lg:rotate-[0deg] lg:translate-y-0 lg:mx-5">ENGINEERING</p>
                  </div>
                </AnchorLink>
                <AnchorLink href="#units">
                  <div
                    className="flex flex-col w-[4rem] h-60 bg-white text-left items-center lg:w-full  lg:justify-start lg:h-[5rem] lg:flex-row"
                    id="sandbox" onClick={()=>setscrollToSandox(true)}
                  >
                    <div className="bg-[#FFAE00] w-full h-3 lg:h-full lg:w-2"></div>
                    <p className="text-[#FFAE00] font-light mt-3 lg:mt-0 translate-y-[130%] rotate-[90deg] lg:rotate-[0deg] lg:translate-y-0 lg:mx-5">SANDBOX</p>
                  </div>
                </AnchorLink>
              </div>
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

      {/* bottom scrollable part */}
      <UnitScrollableDetails scrollToSandox={scrollToSandox} setscrollToSandox={setscrollToSandox} scrollToEngineering={scrollToEngineering} setscrollToEngineering={setscrollToEngineering}/>
    </>
  );
}

export default Units;
