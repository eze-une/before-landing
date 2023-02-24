import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamImage from './TeamImage';
import {GoChevronRight} from "react-icons/go";
import {GoChevronLeft} from "react-icons/go";

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
    // <div
    //   className={className}
    //   style={{ ...style, display: "block",marginLeft:'-30px',transform: "scale(2)"}}
    //   onClick={onClick}
    // />
    <div style={{ ...style, display: "block" }}
    onClick={onClick}
    className="mt-0 bg-white rounded-full p-3 text-[#57BE94] text-[25px] z-10 absolute ml-[95%]  mt-[-13.6rem]">
     <GoChevronRight />
  </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "",transform: "scale(2)" }}
    //   onClick={onClick}
    // />
    <div style={{ ...style, display: "block" }}
      onClick={onClick}
      className="mt-0 bg-white rounded-full p-3 text-[#57BE94] text-[25px] z-10 absolute m mt-[12.8rem]">
       <GoChevronLeft />
    </div>
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1500,
          dots: false,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            dots: true,
          },
        },
        {
          breakpoint: 1300,
          dots: false,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1100,
          dots: false,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 850,
          centerMode:true,
          dots: false,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            // infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600, 
          dots: false,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          dots: false,
          centerMode:true,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: false,
          },
        },
      ],
    };
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
        />
      ))}
        </Slider>
      </div>
    );
  }
}