import React from "react";
import BodySection from "../components/layouts/BodySection";
import Footer from "../components/layouts/Footer";
import "react-multi-carousel/lib/styles.css";

function Home() {
  return (
    <>
      <div className=" scrollbar snap-y snap-mandatory">
        <BodySection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
