import React from "react";
import VisionCards from "../elements/VisionImageCard";
import visionsData from "../../data/visionsData";
import VisionDescriptionCard from "../elements/VisionDescriptionCard";
import curvedUnderline from "../../assets/Vector 336.png";
import VisionImageCard from "../elements/VisionImageCard";

const row1 = [
  {
    image:"https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1380&t=st=1677054523~exp=1677055123~hmac=01009dfb8aeafb017bc0bf88daef1641be141119b3b6f8bef54074225dbc05ba",
    // top: "Put",
    // bottom: "Investment",
    top: "Ideate",
    bottom: "Startup",
  },
  {
    image:
    "https://img.freepik.com/free-photo/ai-nuclear-energy-background-future-innovation-disruptive-technology_53876-129783.jpg",      
    top: "Make",
    bottom: "Research",
  },
];
const row2 = [
  {
    image:"https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-104247.jpg?w=1380&t=st=1677054647~exp=1677055247~hmac=66e55a6cec5229ffb3d23666c9a92e5b62ceec20375a09e8fe601cad8ba6d061",
    top: "Put",
      bottom: "Investment",
  },
  {
    image:"https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=1480&t=st=1677054722~exp=1677055322~hmac=3276b08300f08d6e736c13f8ef983cfb7244d96a9f43ec104df3df65c1fe9eef",
    top: "Start",
    bottom: "Project",
  },
];
const row3 = [
  {
    image:
      "https://me.devoteam.com/wp-content/uploads/sites/10/2021/04/thisisengineering-raeng-sbVu5zitZt0-unsplash-scaled.jpg",
    top: "Become",
    bottom: "Partner",
  },
  {
    image:
      "https://www.ai-expo.net/wp-content/uploads/2019/11/alex-knight-2EJCSULRwC8-unsplash.jpg",
    top: "Make",
    bottom: "Consultation",
  },
];

function Vision({ myref }) {
  // console.log({myref});
  return (
    <div
      className="w-full flex flex-col  mb-20 space-y-8 md:w-[90%] lg:w-[80%] md:pt-10 lg:mt-15"
      ref={myref}
      id="vision"
    >
      <div className="flex flex-col items-center justify-between text-left ">
        <div className="flex flex-col justify-center items-center h-[100vh]   px-5 md:px-10 py-10 space-y-10 text-[#FFFFFF] rounded-0 lg:space-y-5 md:h-full lg:flex-row bg-[#000000]  md:rounded-[25px] lg:text-1xl lg:justify-start snapped">
          <div className=" flex w-full lg:w-[40%] text-4xl font-bold items-center">
            <div className="w-3 h-full md:h-[4rem] lg:h-[6rem] mr-5 bg-[#57BE94]"></div>
            <p className="text-3xl md:text-5xl ">
              Our <span className="text-[#57BE94]">vision</span> lean towards
            </p>
          </div>
          <div className="w-full text-[1.3rem] lg:text-1xl lg:w-[60%] flex flex-col space-y-10 lg:space-y-0 items-center snapped">
            <p>
              creating several businesses from{" "}
              <span className="text-[#57BE94]">scratch</span> using our own
              in-house technical and business teams as well as special
              operational and management methodologies.
            </p>{" "}
            <p>
              By <span className="text-[#57BE94]">2023</span>, we want to establish Enterprice as a company capable of
              creating cutting-edge solutions that challenge conventional wisdom
              and push the boundaries of innovation in Africa's fast evolving
              technological environment.
            </p>
          </div>
        </div>
      </div>
    
      <div className="hidden h-full md:flex justify-between w-full space-x-10 snapped">
        <div className="h-[300px] w-[100%] flex flex-col justify-center items-start text-left lg:space-y-10 ">
          <p className="text-3xl font-bold">
            <span className="inline-block">
              <span
                className=" text-[#ffffff] text-[1.9rem] outlined-start"
              >
                Start
              </span>
              <svg
                width="70px"
                height="21.07px"
                viewBox="0 0 91 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.86439C17.7216 4.24063 55.332 -3.20552 88 12"
                  stroke="#57BE94"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </span>{" "}
            a project
          </p>
          <p className="font-light ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {row1.map((row, index) => (
          <VisionImageCard
            key={index}
            image={row.image}
            top={row.top}
            bottom={row.bottom}
            className="w-[30%]"
          />
        ))}
      </div>

      <div className="hidden h-full md:flex justify-between space-x-10">
        {row2.map((row, index) => (
          <VisionImageCard
            key={index}
            image={row.image}
            top={row.top}
            bottom={row.bottom}
            className="w-[30%]"
          />
        ))}
        <div className="h-[300px] w-[100%] flex flex-col justify-center items-start text-left lg:space-y-10 snapped">
          <p className="text-3xl font-bold">
            <span className="inline-block">
              <span
                className="text-[#ffffff] text-3xl outlined-scale"              >
                Scale
              </span>
              <svg
                width="70px"
                height="21.07px"
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
            a project
          </p>
          <p className="font-light"> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="hidden h-full md:flex hidden justify-between w-full space-x-10 snapped">
        <div className="h-[300px] w-full flex flex-col justify-center items-start text-left lg:space-y-10 md:mr-[-1.3rem]">
          <p className="text-3xl font-bold">
            <span className="inline-block w-[45%] ">
              <span
                className="text-[#ffffff] md:mr-[8.1rem] lg:mr-0 xl:mr-0 outlined-monitor"
              >
                Monitor{" "}
              </span>
              <svg
                width="full"
                height="21.07px"
                viewBox="0 0 91 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.86439C17.7216 4.24063 55.332 -3.20552 88 12"
                  stroke="#4F66AF"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </span>{" "}
            a project
          </p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {row3.map((row, index) => (
          <VisionImageCard
            key={index}
            image={row.image}
            top={row.top}
            bottom={row.bottom}
          />
        ))}
      </div>

        {/* smaller screen */}
      <div className="h-full flex flex-col md:hidden justify-center items-center w-[90%] space-y-10 mx-auto ">
        <div className="w-full xsm:w-[90%]  sm:w-[80%] flex flex-col justify-center items-start text-left mt-10 lg:mt-0 space-y-5">
          <p className="text-3xl font-bold">
            <span className="inline-block snap-normal">
              <span
                className="text-[#ffffff] outlined-start"
              >
                Start
              </span>
              <svg
                width="70px"
                height="21.07px"
                viewBox="0 0 91 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.86439C17.7216 4.24063 55.332 -3.20552 88 12"
                  stroke="#57BE94"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </span>{" "}
            a project
          </p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="snapped space-y-5">
        {row1.map((row, index) => (
          <VisionImageCard
            key={index}
            image={row.image}
            top={row.top}
            bottom={row.bottom}
            className="w-full"
          />
        ))}
        </div>
      </div>
      
      <div className="h-full flex flex-col md:hidden justify-center items-center w-[90%] space-y-10 mx-auto snap-normal">
        <div className="w-full xsm:w-[90%] sm:w-[80%] md:w-full flex flex-col justify-center items-start text-left space-y-5">
          <p className="text-3xl font-bold">
            <span className="inline-block snap-normal">
              <span
                className="text-[#ffffff] outlined-scale"
              >
                Scale
              </span>
              <svg
                width="70px"
                height="21.07px"
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
            a project
          </p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="snapped space-y-5">
        {row2.map((row, index) => (
          <VisionImageCard
            key={index}
            image={row.image}
            top={row.top}
            bottom={row.bottom}
            className="w-[30%]"
          />
        ))}
        </div>
      </div>


      <div className="h-full flex flex-col md:hidden justify-center items-center w-[90%] space-y-10 mx-auto snapped">
        <div className="w-full xsm:w-[90%] sm:w-[80%] md:w-full flex flex-col justify-center items-start text-left space-y-5">
          <p className="text-3xl font-bold">
            <span className="inline-block w-[45%] snap-normal">
              <span
                className="text-[#ffffff] mr-5 outlined-monitor"
                // style={{ WebkitTextStroke: "1px #4F66AF" }}
              >
                Monitor
              </span>
              <svg
                width="full"
                height="21.07px"
                viewBox="0 0 91 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.86439C17.7216 4.24063 55.332 -3.20552 88 12"
                  stroke="#4F66AF"
                  stroke-width="5"
                  stroke-linecap="round"
                />
              </svg>
            </span> {"  "}
             <span className="">a project</span>
          </p>
          <p className="font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="snapped space-y-5">
        {row3.map((row, index) => (
          <VisionImageCard
            key={index}
            image={row.image}
            top={row.top}
            bottom={row.bottom}
          />
        ))}
        </div>
      </div>
    </div>
  );
}

export default Vision;
