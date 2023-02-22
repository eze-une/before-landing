import TeamCarousel from "../elements/TeamCarousel";
import curvedUnderline from "../../assets/Vector 346.png";
export default function Teams() {
  return (
    <>
      <div
        className="flex flex-col w-full snapped bg-[#F6F9FF]"
        id="teams"
      >
        <div className="flex flex-row snap-normal mt-[2rem]">
          <div className="h-10 w-5 bg-[#57BE94] w-[10%] lg:w-[12%] mr-5 md:mr-10"></div>
          <p className="text-2xl md:text-3xl text-left font-bold uppercase">
            Who Help us to make these true?
          </p>
        </div>
        <div className="w-full h-full flex flex-col md:flex-row justify-start items-center snap start lg:mt-[-5rem]">
          <div className=" h-full w-full mt-10 ml:20 md:mt-0  md:w-[40%] flex flex-row items-center justify-center pr-10">
            <div className="h-[300px] w-10 md:w-20  bg-[#57BE94] md:ml-[8rem] mr-[2rem]"></div>
            <p className="text-5xl font-medium text-left mr-[2rem]">
              We would like to push the innovative{" "}
              <span
                className="text-[#57BE94] inline-block -mr-10"
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