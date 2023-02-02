import React from "react";
import BodySection from "../components/layouts/BodySection";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

function Home() {
  return (
    <>
      <div className=" scrollbar snap-y snap-mandatory">
        <BodySection />
        <Footer />
      </div>

      {/* <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="h-[300px] w-[500px] bg-black clipper ">
          <div className="w-full h-full bg-slate-500 clipped"></div>
      </div>
      </div> */}
    </>
  );
}

export default Home;
