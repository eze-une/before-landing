import React from "react";
import LogoImage from "../../assets/Group 1896.png";
import Facebook from "../../assets/socials/Group 1931.png";
import Linkdin from "../../assets/socials/Group 1932.png";
import Youtube from "../../assets/socials/Group 1933.png";
import Twitter from "../../assets/socials/Group 1934.png";

function Footer() {
  return (
    <div className="flex flex-col snap-end" id="footer">
      <div className="flex flex-col lg:flex-row items-center justify-center text-left lg:p-20">
        <div className="w-full lg:w-[50%] text-5xl font-bold p-10">
          <p>Do you have an idea that you want to see alive?</p>
        </div>
        <div className="w-full lg:w-[50%] p-10 lg:pr-20">
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


      <div className="flex flex-col  lg:flex-row bg-[#131622]  justify-center lg:justify-around items:center lg:items-start  p-20 text-left text-[#D9DBE1] text-2xl space-y-10 lg:space-y-0">
       
        <div className="flex flex-col  lg:text-right text-center w-[30%] md:w-[7%]">
              <img
                src={LogoImage}
                className="h-20  md:h-15 lg:h-20"
                alt="Flowbite Logo"
              />
            <p className="font-bold text-2xl text-white">Ablaze</p>
            <p className="text-2xl">Labs</p>
        </div>

        <div className="flex flex-col ">
          <p className="font-bold text-white">Important Links</p>
          <p>About Us</p>
          <p>Sand Box</p>
          <p>The Studio</p>
          <p>Carrers</p>
          <p>Apply</p>
        </div>
        <div>
          <p className="font-bold text-white">Support</p>
          <p>Help center</p>
          <p>Terms of Use</p>
          <p>Legal</p>
          <p>Privacy Policy</p>
          <p>Events</p>
        </div>
        <div className=" flex flex-col font-bold text-white ">
          <p>Subscribe to our newsletter!</p>
          <div className="flex flex-row items-center">
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-[#D9D9D9] bg-opacity-[20%]  rounded-[12px] text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 h-[54px]"
              placeholder="Email"
            />
            <button className="bg-[#57BE94] h-[45px] rounded-[12px] text-md font-normal text-sm px-10 z-20  ml-[-130px] mt-[5px]">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="flex bg-[#131622] text-white items-start justify-between text-left px-20">
        <p>
          <span className="text-[#57BE94]">@ Copyright </span>Ablaze Labs - all
          right reserved 2023
        </p>
        <div className="flex mb-10 space-x-5">
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
