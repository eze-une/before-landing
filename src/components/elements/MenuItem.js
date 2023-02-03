import * as React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const message = ["ABOUT US", "VISION", "TEAM", "CONTACT"];
const links = ["#hero", "#vision", "#teams", "#footer"];
export const MenuItem = ({ i, index,setshow }) => {
  // const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <AnchorLink
        href={links[index]}
        className="pseudo-text-effect"
        onClick={() => setshow(false)}
        data-after={message[i]}
      >
        <p>{message[i]}</p>
      </AnchorLink>
    </motion.li>
  );
};
