import React from "react";
import LogoImage from "../../assets/Group 1896.png";
import Facebook from "../../assets/socials/Social Icons.png";
import Linkdin from "../../assets/socials/Group 1932.png";
import Youtube from "../../assets/socials/Group 1933.png";
import Twitter from "../../assets/socials/Group 1934.png";

function Footer() {
  return (
    <div className="flex flex-col snap-end">
      <div className="flex flex-col lg:flex-row  text-left h-full  ">
        <div className="flex flex-col md:flex-row h-[30rem] sm:px-[3rem] sm:items-end sm:justify-end md:py-20 ">
          <div className="flex justify-center h-[50%] md:h-full md:items-center items-end w-full h-full  px-5  md:w-[50%] text-4xl lg:text-[3rem] lg:px-10 font-bold py-0 xl:px-[5rem]">
            <p>Do you have an idea that you want to see alive?</p>
          </div>
          <div className="flex flex-col px-10 py-5 h-full items-center  h-full md:w-[50%]  md:p-10  font-light snapped flex justify-center items-center">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <br />
            <button className="bg-[#57BE94] rounded-[10px] text-white w-full p-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>


      <div className="sm:hidden flex md:flex flex-col pt-10  sm:space-x-10 sm:flex-row bg-[#131622]  justify-center lg:justify-around items:center lg:items-start pl-5 sm:p-10  text-left text-[#D9DBE1] text-2xl space-y-10 lg:space-y-0 " id="footer">
        <div className="flex flex-col sm:justify-start sm:mt-[3rem] lg:mt-0  md:items-center md:text-right text-left md:text-left  snap-normal">
          <img
            src={LogoImage}
            className="h-20 w-20  md:h-15 lg:h-full"
            alt="Flowbite Logo"
          />
          <p className="font-bold text-2xl text-white">Ablaze</p>
          <p className="text-2xl">Labs</p>
        </div>

        <div className="flex flex-col text-2xl">
          <p className="font-bold text-white">Important Links</p>
          <div className="font-light text-[17px]">
            <p>About Us</p>
            <p>Sand Box</p>
            <p>The Studio</p>
            <p>Carrers</p>
            <p>Apply</p>
          </div>
        </div>
        <div className="  ">
          <p className="font-bold text-white">Support</p>
          <div className="font-light text-[17px]">
            <p>Help center</p>
            <p>Terms of Use</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Events</p></div>
        </div>
        <div className=" flex flex-col font-bold text-white pb-10 w-[80%] sm:w-[40%] md:w-[40%] lg:w-[30%]">
          <p>Subscribe to our newsletter!</p>
          <div className="flex flex-row items-center w-[90%] sm:w-full">
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-[#D9D9D9] bg-opacity-[20%]  rounded-[12px] text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-[54px]"
              placeholder="Email"
            />
            <button className="bg-[#57BE94] h-[45px] rounded-[12px] text-md font-normal text-sm px-10 z-20  ml-[-130px] mt-[5px]">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex md:hidden w-full flex-col justify-start items-between bg-[#131622] text-white w-full px-10 py-10 space-y-10">
        <div className=" flex  ">
          <div className="w-[50%] justify-start items-center  h-full flex flex-col snap-normal mx-0">
            <div className="flex flex-col justify-start items-left">
              <img
                src={LogoImage}
                className="h-20 w-20  md:h-15 lg:h-full"
                alt="Flowbite Logo"
              />
              <p className="font-bold text-2xl text-white">Ablaze</p>
              <p className="text-2xl">Labs</p>
            </div>
          </div>
          <div className="flex flex-col font-bold items-left text-2xl w-[50%] ">
            <div className="flex flex-col text-left">
              <p className="font-bold text-white">Important Links</p>
              <div className="font-light text-[17px]">
                <p>About Us</p>
                <p>Sand Box</p>
                <p>The Studio</p>
                <p>Carrers</p>
                <p>Apply</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-left">
          <div className="  flex flex-col justify-left items-left w-full w-[50%]">
            <div className="flex flex-col items-center  ">
              <p className="font-bold text-2xl text-white">Support</p>
              <div className="text-left font-light text-[17px]">
                <p>Help center</p>
                <p>Terms of Use</p>
                <p>Legal</p>
                <p>Privacy Policy</p>
                <p>Events</p></div>
            </div>
          </div>
          <div className=" flex flex-col font-bold text-white pb-10 w-full w-[50%] text-2xl text-left">
            <p>Subscribe to our newsletter!</p>
            <div className="flex flex-row items-center w-[90%] sm:w-full">
              <input
                type="text"
                className="mt-1 block w-full px-3 py-2 bg-[#D9D9D9] bg-opacity-[20%]  rounded-[12px] text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-[54px]"
                placeholder="Email"
              />
              <button className="bg-[#57BE94] h-[45px] rounded-[12px] text-md font-normal text-sm px-10 z-20  ml-[-130px] mt-[5px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Copyright */}
      <div className="flex flex-col py-5 space-y-5 md:space-y-0 md:py-10 md:flex-row bg-[#131622] text-white items-start justify-between text-left pl-5 md:px-[10%] border-t-[1px] border-gray-500">
        <p >
          <span className="text-[#57BE94]">@ Copyright </span>Ablaze Labs - all
          right reserved 2023
        </p>
        <div className="flex mb-10 space-x-3">
          <img src={Facebook} className="h-7 lg:h-7 " alt="Flowbite Logo" />
          <img src={Linkdin} className="h-7 lg:h-7 " alt="Flowbite Logo" />
          <img src={Youtube} className="h-7 lg:h-7 " alt="Flowbite Logo" />
          <img src={Twitter} className="h-7 lg:h-7 " alt="Flowbite Logo" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
