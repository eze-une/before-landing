import React from "react";

function VisionImageCard({ image, top, bottom }) {
  return (
    <div className="h-[300px] xsm:w-[30rem] sm:w-[32rem]  md:w-full  flex justify-center items-end">
      <div className=" h-full w-full relative z-0">
        <img
          src={image}
          className="h-full w-full rounded-[25px] md:rounded-[15px] bg-cover"
          alt="Flowbite Logo"
        />
        <div className="absolute mt-[200px] m-3 pl-5 inset-0 flex flex-col justify-center items-start bg-[#000000] h-[30%] z-10 bg-opacity-50 rounded-[15px] text-[#ffffff] bg-black  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
          <p className="">{top}</p>
          <p className="text-3xl md:text-3xl lg:texxt-4xl font-bold">{bottom}</p>
        </div>
      </div>
    </div>
  );
}

export default VisionImageCard;
