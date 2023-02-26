import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamImage from './TeamImage';
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

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



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ ...style, display: "block" }}
      onClick={onClick}
      className="mt-0 bg-white rounded-full p-3 text-[#57BE94] text-[25px] z-10 absolute ml-[86%]  sm:ml-[96%]  mt-[-13.6rem]">
      <GoChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div style={{ ...style, display: "block" }}
      onClick={onClick}
      className="mt-0 bg-white rounded-full p-3 text-[#57BE94] text-[25px] z-10 absolute ml-[-1.4rem]  mt-[12.8rem]">
      <GoChevronLeft />
    </div>
  );
}

export default function MultipleItems() {
  // render() {
    const settings = {
      dots: true,
      infinite: false,
      // centerMode: true,
      initialSlide: 2,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1700,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 3.7,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 1600,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 3.4,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 1500,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 3.2 ,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 1400,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 2.9,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 1300,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 2.8,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 1200,
          centerMode: true,
          dots: true,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 1100,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 900,
          centerMode: true,
          dots: true,
          settings: {
            slidesToShow: 1.9,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 800,
          centerMode: true,
          dots: true,
          settings: {
            slidesToShow: 2.4 ,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 700,
          centerMode: true,
          dots: true,
          settings: {
            slidesToShow: 2.2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          centerMode: true,
          dots: true,
          settings: {
            slidesToShow: 1.7,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 500,
          // dots: false,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 1.3,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 400,
          dots: true,
          centerMode: true,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
      ],
    };
    const [isClicked, setisClicked] = useState();
    return (
      <div className="relative">
        <Slider {...settings}>
          {teamlist.map((member, index) => (
            <TeamImage
              name={member.name}
              link={member.link}
              position={member.position}
              image={member.image}
              key={index}
              index={index}
              isClicked={isClicked}
              setisClicked={setisClicked}
            />
          ))}
        </Slider>
      </div>
    );
  // }
}