import React from "react";
import { motion as m } from "framer-motion";


const variants = {
    open: {
      transition: { staggerChildren: 0.7, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.5, staggerDirection: -1 }
    }
  };
  


function Navigation() {
  return (
    <m.ul
      variants={variants}
      className="flex flex-col justify-center items-start ml-[40%] w-[80%] space-y-[9rem]  "
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </m.ul>
  );
}
const itemIds = [0, 1, 2, 3, 4];

export default Navigation;
