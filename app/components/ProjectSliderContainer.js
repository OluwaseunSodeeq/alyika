"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectCardSlider } from "./ProjectSlider";

export function ProjectSliderContainer() {
  const slidersDetails = [
    { id: 1, text: "Project One", images: ["/gdft.png"] },
    { id: 2, text: "Project Two", images: ["/gds.png"] },
    { id: 3, text: "Project Three", images: ["/gdc.png"] },
    { id: 4, text: "Project Four", images: ["/slider1.jpg"] },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    appendDots: (dots) => (
      <ul className="flex justify-center mt-3 gap-x-5 ">
        {dots.map((dot, i) => {
          const isActive = dot.props.className.includes("slick-active");

          return (
            <li key={i}>
              <div
                className={`
              transition-all duration-300 cursor-pointer
              ${
                isActive
                  ? "w-[38px] h-[14px] bg-dark-green rounded-md"
                  : "w-[14px] h-[14px] bg-[#CECECE] rounded-full ml-3"
              }
            `}
                onClick={dot.props.children.props.onClick} // KEEP CLICK LOGIC
              />
            </li>
          );
        })}
      </ul>
    ),
  };

  return (
    <div className="w-full h-[500px] relative xl:mt-[3rem] pt-3">
      <Slider {...settings}>
        {slidersDetails.map((each) => (
          <ProjectCardSlider key={each.id} eachslider={each} />
        ))}
      </Slider>
    </div>
  );
}
