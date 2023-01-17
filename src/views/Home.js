import React from "react";
import BodySection from "../components/layouts/BodySection";
import Footer from "../components/layouts/Footer";
import Header from "../components/layouts/Header";

function Home() {
  return (
    <>
      <div className="bg-[#E7F0F5] scrollbar snap-y snap-mandatory">
        {/* <Header /> */}
        <BodySection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
