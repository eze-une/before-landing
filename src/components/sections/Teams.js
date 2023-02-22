import TeamCarousel from "../elements/TeamCarousel";
import curvedUnderline from "../../assets/Vector 346.png";
export default function Teams() {
  return (
    <>
      <div
        className="flex flex-col w-full snapped bg-[#F6F9FF]"
        id="teams"
      >
        <div className="flex flex-row snap-normal mt-[4rem]">
          <div className="h-10 w-5 bg-[#57BE94] w-[10%] lg:w-[12%] mr-5 md:mr-10"></div>
          <p className="text-2xl md:text-3xl text-left font-bold uppercase">
            Who Help us to make these true?
          </p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-start items-center snap start ">
          <div className=" h-full w-full pl-15 mt-10  md:mt-0  md:w-[40%] flex flex-row items-center justify-center pr-20">
            <div className="h-[20rem] md:h-[25rem] w-20 md:w-[5rem]  bg-[#57BE94] ml-4rem sm:mr-[1rem] mx-[3rem]"></div>
          <p className="text-5xl lg:text-6xl font-medium text-left lg:px-[2rem]">
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
          <div className="w-full md:w-[60%] h-full">
            <TeamCarousel />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}