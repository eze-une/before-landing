import React, { useState } from "react";
import { motion as m } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";

function TeamImage({image,link,name,position}) {
    const [isClicked, setisClicked] = useState(false);
  return (
    <m.div
      layout
      transition={spring}
      onClick={() => setisClicked(!isClicked)}
      className={isClicked ? "item-click relative" : "item relative"}
    >
      <div className="bg-black rounded-[1rem] h-[100%] img-team">
        <img src={image} className="opacity-60 object-cover object-cover" />
      </div>
      <div
        className={
          isClicked
            ? "absolute flex flex-row justify-between items-start text-white bg-black w-[94%] pb-6 mt-[-4rem] text-left px-2 rounded-t-[12px] clicked-team-img "
            : " rotate-[270deg] absolute z-10 -mt-[60%] text-white unclicked-team-img "
        }
      >
        <div className="flex flex-col text-left">
          <p className="text-2xl font-bold">{name}</p>
          <p className="">{position}</p>
        </div>
        <div className={isClicked ? "pt-2" : "hidden"}>
          <a href={link}><AiFillLinkedin /></a>
        </div>
      </div>
    </m.div>
  );
}
const spring = {
    type: "spring",
    stiffness: 150,
    damping: 20,
  };
export default TeamImage;
