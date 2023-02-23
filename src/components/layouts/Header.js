import React, { useRef, useState } from "react";
import LogoImage from "../../assets/Group 1894.png";
import { GrMenu } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion as m } from "framer-motion";
import { MenuItem } from "../elements/MenuItem";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../data/use-dimensions";
import { MenuToggle } from "../elements/MenuToggle";

const showside = {
  clipPath: "circle(1000px at 90% 0%)",
  transition: {
    type: "spring",
    stiffness: 100,
    restDelta: 2,
  },
};

const hide = {
  clipPath: "circle (0px at 90% 0%)",
  transition: {
    delay: 0.5,
    type: "spring",
    stiffness: 400,
    damping: 40,
  },
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

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at  90% 50%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const menubar = {
  open: {
    clipPath: `circle(10000px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 400,
      restDelta: 2,
      damping: 40,
    },
  },
  closed: {
    clipPath: "circle(20px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const message = ["ABOUT US", "VISION", "TEAM", "CONTACT"];
const links = ["#hero", "#vision", "#teams", "#footer"];

function Header() {
  const [show, setshow] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { width } = useDimensions(containerRef);
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

      {/* Menu when it is on a small screen */}
      <m.div
        animate={show ? hideMenu : showMenu}
        variants={variants}
        className="hidden"
      >
        <GrMenu
          className="h-6 text-5xl font-bold text-black block md:hidden pr-5"
          onClick={() => setshow(true)}
        />
      </m.div>

      {/* sidebar */}
      <div className={show ? "flex" : "hidden"}>
        <m.div
          animate={show ? showside : hide}
          className="z-20 absolute right-0 top-0 h-full w-full  md:h-[100vh] md:w-[30%] bg-white sidebar"
        >
          <m.div className="flex flex-col items-center justify-center">
            <div className="w-full text-2xl flex justify-end items-end text-right p-10 hover:cursor-pointer">
              <AiOutlineClose className="" onClick={() => setshow(false)} />
            </div>
            <m.div className="flex flex-col items-center justify-center text-left  space-y-10 text text-2xl w-full">
              <div className="w-full h-full flex flex-col justify-end items-center">
                <m.ul
                  variants={variants}
                  className="flex flex-col justify-center items-center space-y-[5rem]  "
                >
                  {itemIds.map((i,index) => (
                    <MenuItem i={i} index={index} key={i} setshow={setshow} />
                  ))}
                </m.ul>
              </div>
            </m.div>
          </m.div>
        </m.div>
      </div>

      {/* Menu when its big */}
      <motion.div
        animate={isOpen ? "open" : "closed"}
        custom={width}
        ref={containerRef}
        variants={menubar}
        className={
          isOpen
            ? "hidden relative w-[90%] h-full md:flex flex-row justify-end items-center "
            : "hidden  h-full md:flex flex-row justify-end items-center"
        }
      >
        <m.div
          variants={variants}
          className="flex flex-row w-[60%] justify-around"
        >
          {message.map((i,index) => (
            <AnchorLink
              whileTap={{ scale: 0.95 }}
              href={links[index]}
              className={isOpen ? "block pseudo-text-effect" : "hidden"}
              data-after={i}
              key={index}
            >
              <p>{i}</p>
            </AnchorLink>
          ))}
        </m.div>
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.div>
    </div>
  );
}
const itemIds = [0, 1, 2, 3, 4];
export default Header;
