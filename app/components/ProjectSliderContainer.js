"use client";

import Image from "next/image";
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
      <div>
        <ul className="flex justify-center items-center gap-x-2 absolute bottom-[-30px] inset-x-0 mx-auto">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`w-[10px] h-[10px] rounded-full ${
                dot.props.className.includes("slick-active")
                  ? "bg-white"
                  : "bg-gray-400"
              }`}
            ></li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slidersDetails.map((each) => (
          <ProjectCardSlider key={each.id} eachslider={each} />
        ))}
      </Slider>
    </div>
  );
}
