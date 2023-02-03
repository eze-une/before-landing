import React from "react";
import { motion as m } from "framer-motion";
import { MenuItem } from "./MenuItem";


const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  


function Navigation() {
  return (
    <m.ul
      variants={variants}
      className="flex flex-row justify-center items-start  "
    >
      {itemIds.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </m.ul>
    // <p>asdg</p>
  );
}
const itemIds = [0, 1, 2, 3, 4];

export default Navigation;
