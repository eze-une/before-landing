import React from "react";
import VisionCards from "../elements/VisionImageCard";
import visionsData from "../../data/visionsData";
import VisionDescriptionCard from "../elements/VisionDescriptionCard";
import curvedUnderline from "../../assets/Vector 336.png";
import VisionImageCard from "../elements/VisionImageCard";

const row1 = [
  {
    image:
      "https://img.freepik.com/free-photo/man-wearing-smart-glasses-touching-virtual-screen-futuristic-technology-digital-remix_53876-104247.jpg?w=1060&t=st=1672987515~exp=1672988115~hmac=26a8a8fe709cbafc599df21b449d3e5f5d7f6e06a8ef6b211cd4c7b8c802f776",
    top: "Put",
    bottom: "Investment",
  },
  {
    image:
      "https://img.freepik.com/free-photo/medium-shot-man-wearing-vr-glasses_23-2149126949.jpg?w=2000",
    top: "Start",
    bottom: "Project",
  },
];
const row2 = [
  {
    image:
      "https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?w=1060&t=st=1672987368~exp=1672987968~hmac=f88259dd36b561c786be919d12377feb562f467d0c25ddfa744d5bf094c8ac25",
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

function Vision({myref}) {
  // console.log({myref});
  return (
    <div className="w-full flex flex-col md:w-[80%] mb-20  pt-20 space-y-8 snap-nm mt-20" ref={myref}>
      <div className="flex flex-col items-center justify-between text-left ">
        <div className="flex flex-col justify-center items-center lg:justify-start h-[100vh] lg:h-full lg:text-1xl px-10 py-10 space-y-10 lg:space-y-5 lg:flex-row bg-[#000000] text-[#FFFFFF] rounded-0 md:rounded-[25px]">
          <div className=" flex  w-full lg:w-[40%] text-4xl font-bold items-center">
            <div className=" w-5 w-2 mr-5 bg-[#57BE94]"></div>
            <p className="text-5xl">
              Our <span className="text-[#57BE94]">vision</span> lean{" "}
              towards
            </p>
          </div>
          <div className="w-full text-1xl lg:text-1xl lg:w-[60%] flex flex-col space-y-10 lg:space-y-0 items-center ">
            <p>
              creating several businesses from <span className="text-[#57BE94]">scratch</span> using our own in-house
              technical and business teams as well as special operational and
              management methodologies.
            </p>{" "}
            <p>
              By 2023, we want to establish Enterprice as a company capable of
              creating cutting-edge solutions that challenge conventional wisdom
              and push the boundaries of innovation in Africa's fast evolving
              technological environment.
            </p>
          </div>
        </div>
      </div>
      
      <div className="hidden h-full md:flex justify-between w-full space-x-10">
        <div className="h-[300px] w-[100%] flex flex-col justify-center items-start text-left ">
          <p className="text-3xl font-bold">
            <span className="inline-block">
              <span
                className=" text-transparent"
                style={{ WebkitTextStroke: "1px #57BE94" }}
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
          <p>
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
        
      <div className="h-full flex flex-col md:hidden justify-center items-center w-[90%] space-y-10 mx-auto">
        <div className="w-[80%] md:w-full flex flex-col justify-center items-start text-left mt-10 lg:mt-0">
          <p className="text-3xl font-bold">
            <span className="inline-block">
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #57BE94" }}
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
          <p>
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
            className="w-full"
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
        <div className="h-[300px] w-[100%] flex flex-col justify-center items-start text-left ">
          <p className="text-3xl font-bold">
            <span className="inline-block">
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #FFAE00" }}
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="h-full flex flex-col md:hidden justify-center items-center w-[90%] space-y-10 mx-auto">
      <div className="w-[80%] md:w-full flex flex-col justify-center items-start text-left ">
          <p className="text-3xl font-bold">
            <span className="inline-block">
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px #FFAE00" }}
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
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
      <div className="hidden h-full md:flex hidden justify-between w-full space-x-10">
        <div className="h-[300px] w-[100%] flex flex-col justify-center items-start text-left">
          <p className="text-3xl font-bold">
            <span className="inline-block w-[45%] ">
              <span
                className="text-transparent mr-5"
                style={{ WebkitTextStroke: "1px #4F66AF" }}
              >
                Monitior {" "}
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
            </span>
            {" "}a project
          </p>
          <p>
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

      <div className="h-full flex flex-col md:hidden justify-center items-center w-[90%] space-y-10 mx-auto">
        <div className="w-[80%] md:w-full flex flex-col justify-center items-start text-left ">
          <p className="text-3xl font-bold">
            <span className="inline-block w-[45%] ">
              <span
                className="text-transparent mr-5"
                style={{ WebkitTextStroke: "1px #4F66AF" }}
              >
                Monitior
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
            </span>
             {"  "} {"  "} a project
          </p>
          <p>
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
    </div>
  );
}

export default Vision;
