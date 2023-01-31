import React, { useState } from "react";
import LogoImage from "../../assets/Group 1894.png";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion as m } from "framer-motion";

const showside = {
  opacity: 1,
  x: 0,
  display: "block",
};

const hide = {
  opacity: 0,
  x: 100,
  transitionEnd: {
    display: "none",
  },
};
const showMenu={
  opacity: 1,
  display: "block",
}
function Header() {
  const [show, setshow] = useState(false);
  return (
    <div className="w-full flex flex-row items-center justify-between mx-auto py-5 overflow-hidden">
      <div className="flex items-center ">
        <img
          src={LogoImage}
          className="h-full h-10 lg:h-30 "
          alt="Flowbite Logo"
        />
        <div className="flex flex-col ml-5 text-right">
          <p className="font-bold text-1xl">Ablaze</p>
          <p>Labs</p>
        </div>
      </div>
      <m.div
        animate={show ? hide : showMenu}
        className="md:block md:w-auto hover:cursor-pointer"
      >
        <GrMenu
          className="h-6 sm:h-5 lg:h-5 text-5xl font-bold text-black"
          onClick={() => setshow(true)}
        />
      </m.div>

      {/* sidebar */}
      <m.div
        animate={show ? showside : hide}
        className="z-10 absolute right-0 top-0 h-full w-full  md:h-[100vh] md:w-[30%] bg-white sidebar"
      >
        <m.div className="flex flex-col items-center text-left justify-left">
          <div className="w-full text-2xl flex justify-end items-end text-right p-10 hover:cursor-pointer">
            <AiOutlineClose className="" onClick={() => setshow(false)} />
          </div>
          <m.div className="flex flex-col items-start justify-center text-left  space-y-20 text text-2xl w-full">
            <AnchorLink
              href="#hero"
              className="w-full text-center"
              onClick={() => setshow(false)}
            >
              <p className="hover:bg-black hover:text-white w-full py-5">
                About us
              </p>
            </AnchorLink>
            <AnchorLink
              href="#vision"
              className="w-full text-center"
              onClick={() => setshow(false)}
            >
              <p className="hover:bg-black hover:text-white w-full py-5 ">
                Our Vision
              </p>
            </AnchorLink>
            <AnchorLink
              href="#teams"
              className="w-full text-center"
              onClick={() => setshow(false)}
            >
              <p className="hover:bg-black hover:text-white w-full py-5 ">
                Team
              </p>
            </AnchorLink>
            <AnchorLink
              href="#footer"
              className="w-full text-center"
              onClick={() => setshow(false)}
            >
              <p className="hover:bg-black hover:text-white w-full py-5">
                Contact
              </p>
            </AnchorLink>
          </m.div>
        </m.div>
      </m.div>
    </div>
  );
}

export default Header;
