import TeamCarousel from "../elements/TeamCarousel";
export default function Teams() {
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
        <div className="w-full h-full flex flex-col justify-start items-start md:flex-row">
          <div className=" h-full w-full flex flex-row items-center justify-center pr-10 mt-[3rem] md:mt-[0rem]  md:w-[40%]">
            <div className="h-[300px] w-10 md:w-20  bg-[#57BE94] ml-[1rem] md:ml-[5rem] mr-[2rem]"></div>
            <p className="text-5xl font-bold text-left">
              We would like to push the innovative{" "}
              <span className="text-[#57BE94]"> Boundary</span> of technology
            </p>
          </div>
          <div className="w-[100%] h-[100%] md:w-[60%] ">
            <TeamCarousel />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}