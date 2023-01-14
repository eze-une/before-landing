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

function Vision() {
  return (
    <div className="w-full flex flex-col md:w-[85%] mb-20 space-y-8">
      <div className="flex flex-col items-center justify-between text-left">
        <div className="flex bg-[#000000] text-[#FFFFFF] rounded-[25px] p-10">
          <div className=" flex flex-row w-[40%] text-4xl font-bold">
            <div className="h-full w-2 mr-5 bg-green-300"></div>
            <p>
              Our <span className="text-[#57BE94]">vision</span> <br /> lean{" "}
              <br /> towards
            </p>
          </div>
          <div className="w-[60%] flex flex-col">
            <p>
              creating several businesses from scratch using our own in-house
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

      <div className="h-full flex justify-between w-full space-x-10">
        <div className="h-[300px] w-[100%] flex flex-col justify-center items-start text-left ">
          <p className="text-3xl font-bold">
            <span className="inline-block">
              <span
                className=" text-[#E7F0F5]"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Start
              </span>
              <img
                src={curvedUnderline}
                className="w-[70px] h-[21.07px]"
                alt="Flowbite Logo"
              />
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

      <div className="h-full flex justify-between space-x-10">
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
                className=" text-[#E7F0F5]"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Scale
              </span>
              <img
                src={curvedUnderline}
                className="w-[70px] h-[21.07px]"
                alt="Flowbite Logo"
              />
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
      <div className="h-full flex justify-between w-full space-x-10">
        <div className="h-[300px] w-[100%] flex flex-col justify-center items-start text-left">
          <p className="text-3xl font-bold">
            <span className="inline-block w-[45%] ">
              <span
                className=" text-[#E7F0F5]"
                style={{ WebkitTextStroke: "1px black" }}
              >
                Monitior
              </span>
              <img
                src={curvedUnderline}
                className="w-full h-[21.07px]"
                alt="Flowbite Logo"
              />
            </span>
            a project
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
