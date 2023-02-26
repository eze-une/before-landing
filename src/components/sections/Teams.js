import TeamCarousel from "../elements/TeamCarousel";
import curvedUnderline from "../../assets/Vector 346.png";

export default function Teams() {
  return (
    <>
      <div
        className="flex flex-col w-full snap-center bg-[#F6F9FF]"
        id="teams"
      >
        <div className="flex flex-row mt-[5rem] mb-[2rem] sm:mb-[4rem]">
          <div className="h-10 w-5 bg-[#57BE94] w-[10%] lg:w-[12%] mr-5 md:mr-10"></div>
          <p className="text-2xl md:text-3xl text-left font-bold uppercase">
            Who Help us to make these true?
          </p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-start items-center mt-[3rem] sm:mt-[1.4rem]  ">
          <div className="h-full md:my-10 w-full  mt-0  md:mt-[-1rem]  md:w-[40%] flex flex-row items-start sm:justify-center justify-center  md:pl-[1rem] lg:pl-[2rem] ">
            <div className="h-[15rem] xsm:h-[18.5rem] sm:h-[18rem] md:h-[24rem] lg:h-[20rem] md:pb-20 w-[1.7rem]  bg-[#57BE94] mx-[1rem] lg:h-[25rem]"></div>
            <p className="h-full sm:h-[20rem] text-4xl xs:text-5xl xsm:text-[3.6rem]  md:text-[3rem] lg:text-[3.4rem] xl:text-[3.6rem] 1xl:text-[4rem] 2xl:text-[4rem] font-medium text-left w-full sm:w-[60%] md:w-[100%] lg:w-[70%] lg:h-[24rem]">
              We would like to push the innovative{" "}
              <span
                className="text-[#57BE94] inline-block -mr-8 xsm:-mr-2"
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
          <div className="w-[85%] mt-[2rem] md:mt-[-2rem] sm-w-[100%] md:w-[59%]  h-full">
            <TeamCarousel/>
          </div>
        </div>
      </div>
    </>
  );
}