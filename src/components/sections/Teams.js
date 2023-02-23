import TeamCarousel from "../elements/TeamCarousel";
import curvedUnderline from "../../assets/Vector 346.png";
export default function Teams() {
  return (
    <>
      <div
        className="flex flex-col w-full snapped bg-[#F6F9FF]"
        id="teams"
      >
        <div className="flex flex-row snap-normal my-[4rem]">
          <div className="h-10 w-5 bg-[#57BE94] w-[10%] lg:w-[12%] mr-5 md:mr-10"></div>
          <p className="text-2xl md:text-3xl text-left font-bold uppercase">
            Who Help us to make these true?
          </p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-start items-center snap start ">
          <div className="h-full md:my-10 w-full  mt-0  md:mt-0  md:w-[40%] flex flex-row items-center justify-center pl-[2rem] md:pl-[0rem] lg:pl-[2rem] ">
            <div className="h-[20rem] sm:h-[24rem] md:h-[24rem] lg:h-[20rem] md:pb-20 w-[2rem]  bg-[#57BE94] mr-[1rem]"></div>
            <p className="h-full text-5xl md:text-6xl xl:text-[4rem] font-medium text-left w-[80%] md:w-[100%] ">
              We would like to push the innovative{" "}
              <span
                className="text-[#57BE94] inline-block -mr-8 sm:-mr-2"
              >Boundary
                <img
                  src={curvedUnderline}
                  className="w-[80%] h-[21.07px]"
                  alt="Flowbite Logo"
                />
              </span>{" "}
              of technology
            </p>
          </div>
          <div className="w-full md:w-[60%]  h-full">
            <TeamCarousel />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}