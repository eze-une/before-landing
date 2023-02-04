import { useEffect, useRef, useState } from "react";
import { motion as m, useScroll, useAnimation } from "framer-motion";
import images from "../elements/images";
import image1 from "../../assets/slider/pexels-andrea-piacquadio-774909.jpg";
import { AiFillLinkedin } from "react-icons/ai";

export default function Teams() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  const [isClicked1, setisClicked1] = useState(false);
  const [isClicked2, setisClicked2] = useState(false);
  const [isClicked3, setisClicked3] = useState(false);
  const [isClicked4, setisClicked4] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <>
      <div
        className="flex flex-col w-full py-10 snapped bg-[#E7F0F5]"
        id="teams"
      >
        <div className="flex flex-row ">
          <div className="h-10 w-5 bg-[#57BE94] w-[10%] lg:w-[12%] mr-10"></div>
          <p className="text-3xl text-left font-bold">
            Who Help us to make these true?
          </p>
        </div>
        <m.div className="carousel" ref={carousel}>
          <m.div
            className="inner-carousel"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            <div className=" h-full lg:w-[50%] flex flex-row items-center justify-center">
              <div className="h-[300px] w-20  bg-[#57BE94]  ml-[1rem] md:ml-[5rem] mr-[2rem]"></div>
              <p className="text-5xl font-bold text-left">
                We would like to push the innovative{" "}
                <span className="text-[#57BE94]"> Boundary</span> of technology
              </p>
            </div>

            <m.div
              layout
              transition={spring}
              onClick={() => setisClicked1(!isClicked1)}
              className={isClicked1 ? "item-click relative" : "item relative"}
            >
              <div className="bg-black rounded-[1rem] h-full">
                <img
                  src={image1}
                  className="opacity-60 object-cover object-cover"
                />
              </div>
              <div
                className={
                  isClicked1
                    ? "absolute flex flex-row justify-between items-start text-white bg-black w-[94%] pb-6 -mt-20 text-left px-2 rounded-t-[12px] "
                    : " rotate-[270deg] absolute z-10 -mt-[60%] text-white "
                }
              >
                <div className="flex flex-col text-left">
                  <p className="text-2xl font-bold">Samuel Samson</p>
                  <p className="">CEO</p>
                </div>
                <div className={isClicked1 ? "pt-2" : "hidden"}>
                  <AiFillLinkedin />
                </div>
              </div>
            </m.div>
            <m.div
              layout
              transition={spring}
              onClick={() => setisClicked2(!isClicked2)}
              className={isClicked2 ? "item-click relative" : "item relative"}
            >
              <div className="bg-black rounded-[1rem] h-full">
                <img src={image1} className="opacity-60 object-cover" />
              </div>
              <div
                className={
                  isClicked2
                    ? "absolute flex flex-row justify-between items-start text-white bg-black w-[94%] pb-6 -mt-20 text-left px-2 rounded-t-[12px] "
                    : " rotate-[270deg] absolute z-10 -mt-[60%] text-white "
                }
              >
                <div className="flex flex-col text-left">
                  <p className="text-2xl font-bold">Samuel Samson</p>
                  <p className="">CEO</p>
                </div>
                <div className={isClicked2 ? "pt-2" : "hidden"}>
                  <AiFillLinkedin />
                </div>
              </div>
            </m.div>

            <m.div
              layout
              transition={spring}
              onClick={() => setisClicked3(!isClicked3)}
              className={isClicked3 ? "item-click relative" : "item relative"}
            >
              <div className="bg-black rounded-[1rem] h-full">
                <img src={image1} className="opacity-60 object-cover" />
              </div>
              <div
                className={
                  isClicked3
                    ? "absolute flex flex-row justify-between items-start text-white bg-black w-[94%] pb-6 -mt-20 text-left px-2 rounded-t-[12px] "
                    : " rotate-[270deg] absolute z-10 -mt-[60%] text-white "
                }
              >
                <div className="flex flex-col text-left">
                  <p className="text-2xl font-bold">Samuel Samson</p>
                  <p className="">CEO</p>
                </div>
                <div className={isClicked3 ? "pt-2 stroke-2" : "hidden"}>
                  <AiFillLinkedin className="stroke-2" />
                </div>
              </div>
            </m.div>
            <m.div
              layout
              transition={spring}
              onClick={() => setisClicked4(!isClicked4)}
              className={isClicked4 ? "item-click relative" : "item relative"}
            >
              <div className="bg-black rounded-[1rem] h-full">
                <img src={image1} className="opacity-60 object-cover" />
              </div>
              <div
                className={
                  isClicked4
                    ? "absolute flex flex-row justify-between items-start text-white bg-black w-[94%] pb-6 -mt-20 text-left px-2 rounded-t-[12px] "
                    : " rotate-[270deg] absolute z-10 -mt-[60%] text-white "
                }
              >
                <div className="flex flex-col text-left">
                  <p className="text-2xl font-bold">Samuel Samson</p>
                  <p className="">CEO</p>
                </div>
                <div className={isClicked4 ? "pt-2" : "hidden"}>
                  <AiFillLinkedin />
                </div>
              </div>
            </m.div>

            <m.div
              layout
              transition={spring}
              onClick={() => setisClicked1(!isClicked1)}
              className={isClicked1 ? "item-click relative" : "item relative"}
            >
              <div className="bg-black rounded-[1rem] h-full">
                <img src={image1} className="opacity-60 object-cover" />
              </div>
              <div
                className={
                  isClicked1
                    ? "absolute flex flex-row justify-between items-start text-white bg-black w-[94%] pb-6 -mt-20 text-left px-2 rounded-t-[12px] "
                    : " rotate-[270deg] absolute z-10 -mt-[60%] text-white "
                }
              >
                <div className="flex flex-col text-left">
                  <p className="text-2xl font-bold">Samuel Samson</p>
                  <p className="">CEO</p>
                </div>
                <div className={isClicked1 ? "pt-2" : "hidden"}>
                  <AiFillLinkedin />
                </div>
              </div>
            </m.div>
            <m.div
              layout
              transition={spring}
              onClick={() => setisClicked1(!isClicked1)}
              className={isClicked1 ? "item-click relative" : "item relative"}
            >
              <div className="bg-black rounded-[1rem] h-full">
                <img src={image1} className="opacity-60 object-cover" />
              </div>
              <div
                className={
                  isClicked1
                    ? "absolute flex flex-row justify-between items-start text-white bg-black w-[94%] pb-6 -mt-20 text-left px-2 rounded-t-[12px] "
                    : " rotate-[270deg] absolute z-10 -mt-[60%] text-white "
                }
              >
                <div className="flex flex-col text-left">
                  <p className="text-2xl font-bold">Samuel Samson</p>
                  <p className="">CEO</p>
                </div>
                <div className={isClicked1 ? "pt-2" : "hidden"}>
                  <AiFillLinkedin />
                </div>
              </div>
            </m.div>
          </m.div>
        </m.div>
        <div></div>
      </div>
    </>
  );
}
const spring = {
  type: "spring",
  stiffness: 150,
  damping: 20,
};
