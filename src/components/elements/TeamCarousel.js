// import React, { useState } from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

// import { BsArrowLeft } from "react-icons/bs";
// import { BsArrowRight } from "react-icons/bs";



// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };



// const CustomRight = ({ onClick }) => (
//     <button className="arrow right" onClick={onClick} style={arrowStyle}>
//       <GoChevronRight style={{ fontSize: "40px" }} />
//     </button>
//   );
//   const CustomLeft = ({ onClick }) => (
//     <button className="arrow left" onClick={onClick} style={arrowStyle}>
//       <GoChevronLeft style={{ fontSize: "40px" }} />
//     </button>
//   );

// function TeamCarousel() {
//   return (
//     <Carousel
//       responsive={responsive}
//       swipeable={true}
//       infinite={false}
//       className="pb-[13rem] h-full snapped" 
//       customRightArrow={<CustomRight />}
//       customLeftArrow={<CustomLeft />}
//     >
//       {teamlist.map((member, index) => (
//         <TeamImage
//           name={member.name}
//           link={member.link}
//           position={member.position}
//           image={member.image}
//           key={index}
//         />
//       ))}
//     </Carousel>
//   );
// }

// export default TeamCarousel;

import { useState, useRef, useEffect } from 'react';
import TeamImage from './TeamImage';
import {GoChevronRight} from "react-icons/go";
import {GoChevronLeft} from "react-icons/go";
// Data
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
const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel mx-auto">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full text-[#57BE94]">
          
          <button
            onClick={movePrev}
            className="ml-2 w-30  flex justify-center items-center   text-center  disabled:opacity-0  z-10 my-[11rem] m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <GoChevronLeft className="bg-white rounded-full p-3 text-[50px]"/>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="ml-2 w-30  flex justify-center items-center   text-center  disabled:opacity-0  z-10 my-[11rem] m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <GoChevronRight className="bg-white rounded-full p-3 text-[50px]"/>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
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
        </div>
      </div>
    </div>
  );
};

export default Carousel;