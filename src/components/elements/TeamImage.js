import React, { useState } from "react";
import { motion as m } from "framer-motion";
import {FaLinkedinIn} from 'react-icons/fa';

function TeamImage({image,link,name,position,index,setisClicked,isClicked}) {
    console.log("clicked",isClicked)
    function handleClick(){
      if(isClicked==index){
        console.log("is already clicked")
        setisClicked(8)
      }else setisClicked(index)
    }
    
  return (
    <m.div
      layout
      transition={spring}
      onClick={handleClick}

      className={isClicked==index ? "item-click relative" : "item relative"}
    >
      <div className="bg-black rounded-[1rem] h-full">
        <img src={image} className="opacity-60 object-cover object-cover" />
      </div>
      <div
        className={
          isClicked==index
            ? "absolute flex flex-row justify-between items-center text-white bg-[#131622] w-full pb-6 mt-[-7rem] text-left px-3 rounded-[12px] py-5 "
            : " rotate-[270deg] absolute z-10 translate-y-[-12rem] text-white "
        }
      >
        <div className="flex flex-col text-left">
          <div>
            
          </div>
          <p className="text-[27px] font-bold">{name}</p>
          <p className="">{position}</p>
        </div>
        <div className={isClicked==index ? "text-2xl text-[#57BE94]" : "hidden"}>
          <a href={link}><FaLinkedinIn/></a>
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