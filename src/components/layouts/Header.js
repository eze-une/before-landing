import React, { useState } from "react";
import LogoImage from "../../assets/Group 1894.png";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion as m } from "framer-motion";
import { MenuItem } from "../elements/MenuItem";

const showside = {
  clipPath:'circle(1000px at 90% 0%)',
  transition: {
    type: "spring",
    stiffness: 100,
    restDelta: 2
  }

};

const hide = {
  clipPath:"circle (0px at 90% 0%)",
  transition: {
    delay: 0.5,
    type: "spring",
    stiffness: 400,
    damping: 40
  }
};
const hideMenu = {
  transitionEnd: {
    display: "none",
  },
};
const showMenu = {
  opacity: 1,
  x: 0,
  display: "block",
};

const variants = {
  show: {
    transition: { staggerChildren: 0.7, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.5, staggerDirection: -1 }
  }
};

function Header() {
  const [show, setshow] = useState(false);
  return (
    <div className="w-full flex flex-row items-center justify-between mx-auto py-5 overflow-hidden">
      {/* Logo */}
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

      {/* Menu */}
      <m.div
        animate={show ? hideMenu : showMenu}
        ///add the transition animation here
        className="md:block md:w-auto  hover:cursor-pointer"
        
      >
        <GrMenu
          className="h-6 sm:h-5 lg:h-5 text-5xl font-bold text-black"
          onClick={() => setshow(true)}
        />
      </m.div>

      {/* sidebar */}
      <div className={show ? "flex" : "hidden"}>
        <m.div
          animate={show ? showside : hide}
          className="z-10 absolute right-0 top-0 h-full w-full  md:h-[100vh] md:w-[30%] bg-white sidebar"
        >
          <m.div className="flex flex-col items-center text-left justify-left" >
            <div className="w-full text-2xl flex justify-end items-end text-right p-10 hover:cursor-pointer">
              <AiOutlineClose className="" onClick={() => setshow(false)} />
            </div>
            <m.div className="flex flex-col items-center justify-center text-left  space-y-20 text text-2xl w-full">
              <div className="w-full h-full flex flex-col justify-end items-center">
                <m.ul
                  variants={variants}
                  className="flex flex-col justify-center items-start ml-[40%] w-[80%] space-y-[9rem]  "
                >
                  {itemIds.map((i) => (
                    <MenuItem i={i} key={i} />
                  ))}
                </m.ul>
              </div>
            </m.div>
          </m.div>
        </m.div>
      </div>
    </div>
  );
}
const itemIds = [0, 1, 2, 3, 4];
export default Header;
