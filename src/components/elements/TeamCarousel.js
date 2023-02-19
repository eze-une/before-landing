import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamImage from "./TeamImage";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const teamlist = [
  {
    name: "Person Person",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    position: "CEO",
  },
  {
    name: "Person Person",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#",
    position: "CEO",
  },
  {
    name: "Person Person",
    image:
      "https://images.pexels.com/photos/3763156/pexels-photo-3763156.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    link: "#",
    position: "CEO",
  },
  {
    name: "Person Person",
    image:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
    position: "CEO",
  },
  {
    name: "Person Person",
    image:
      "https://images.pexels.com/photos/4067766/pexels-photo-4067766.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
    position: "CEO",
  },
  {
    name: "Person Person",
    image:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
    position: "CEO",
  },
  {
    name: "Person Person",
    image:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "#",
    position: "CEO",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const arrowStyle = {
    
    background: "white",
    borderRadius: "40px",
    border: 0,
    color: "#57BE94",
    fontSize: "100px",
    fontSizeAdjustment: "20px"
  };

const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <BsArrowRight style={{ fontSize: "40px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <BsArrowLeft style={{ fontSize: "40px" }} />
    </button>
  );

function TeamCarousel() {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      className=" pb-[13rem] h-full"
    //   centerMode={tru}
      customRightArrow={<CustomRight />}
      customLeftArrow={<CustomLeft />}
    >
      {teamlist.map((member, index) => (
        <TeamImage
          name={member.name}
          link={member.link}
          position={member.position}
          image={member.image}
          key={index}
        />
      ))}
    </Carousel>
  );
}

export default TeamCarousel;
