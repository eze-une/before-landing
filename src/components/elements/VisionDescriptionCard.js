import React from "react";
import curvedUnderline from '../../assets/Vector 336.png'

function VisionDescriptionCard({top,bottom}) {
  return (
    <div className="h-[300px] w-[300px] flex flex-col justify-center items-start text-left">
        <p className="text-3xl font-bold"><span className="inline-block">
              <span
                className=" text-[#E7F0F5]"
                style={{ "WebkitTextStroke": "1px black" }}
              >
                Start
              </span>
              <img
                src={curvedUnderline}
                className="w-[70px] h-[21.07px]"
                alt="Flowbite Logo"
              />
            </span> a project</p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </div>
  );
}

export default VisionDescriptionCard;
