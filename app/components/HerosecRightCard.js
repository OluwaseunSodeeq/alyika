"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Star } from "lucide-react";
import Button from "./Button";
import useOpenContext from "../contexts/useOpenContext";

export default function HerosecRightCard() {
  const { showBgImage } = useOpenContext();
  const btnBg = "#fdcd31";
  const textColor = "#012f25";
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      text: "We’re not experts in suits. We’re youths, students, storytellers, builders, and friends who decided to do something.",
      rating: 4,
      image: "/person.png",
      bgImage: "/bgImage0.png",
    },
    {
      name: "Jane Smith",
      text: "We’re not experts in suits. We’re youths, students, storytellers, builders, and friends who decided to do something.",
      image: "/rating2.png",
      bgImage: "/bgImage1.png",
    },
    {
      name: "Oluwaseun Sodeeq",
      text: "We’re not experts in suits. We’re youths, students, storytellers, builders, and friends who decided to do something.",
      rating: 5,
      image: "/person.png",
      bgImage: "/bgImage1.png",
    },
  ];

  const leftClick = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const rightClick = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const current = testimonials[index];

  return (
    // <div className="relative xl:h-[40rem] 2xl:w-[44rem] xl:w-[44rem] md:w-[30rem] w-[30rem] rounded-[1.2rem] overflow-hidden shadow-lg ">
    <div className="h-[400px] md:h-[40rem] xl:h-[40rem] w-full 2xl:w-[44rem] xl:w-[44rem] md:w-[30rem] rounded-b-[1.2rem]">
      <div
        className="relative pt-12 md:pt-0 w-full h-full md:h-full bg-cover bg-center bg-no-repeat md:border-none border-t-1 border-dashed border-t-yellow md:rounded-[1.2rem]"
        style={
          showBgImage
            ? { backgroundImage: `url(${current.bgImage})` }
            : { backgroundColor: "#012F25" }
        }
      >
        <div className=" absolute top-75 md:top-4 flex gap-4 left-[1.8rem] right-0 md:right-[2rem]">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 bg-light-green py-2 rounded-full outline-none xl:w-[18rem] shadow-md text-sm"
            />
          </div>
          <Button btnBg={btnBg} textColor={textColor}>
            Subscribe
          </Button>
        </div>

        <div className="absolute  top-18 md:top-[12rem] xl:top-[7rem] left-4 md:left-12 xl:left-6 bg-yellow px-3 py-3.5 rounded-xl w-[22rem] xl:max-w-[16rem] shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-full  xl:w-[130px] xl:h-[126px] rounded-md">
              <Image
                width={100}
                height={100}
                src={current.image}
                alt={current.name}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col xl:w-[121px]">
              <div className="flex gap-x-2 text-dark-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      current.rating > i
                        ? "fill-dark-green text-dark-green"
                        : "fill-main-bg text-main-bg"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[14.5px] xl:text-xs text-dark-green mt-1">
                {current.text}
              </p>
            </div>
          </div>
        </div>

        <div
          onClick={leftClick}
          className="absolute left-2 md:left-4 top-[44%] md:top-1/2 -translate-y-1/2 bg-dark-green/50 py-2 px-3 rounded-md shadow"
        >
          <Image
            src="/left-arrow.svg"
            alt="left-arrow"
            width={18}
            height={18}
            className="md:w-[26px] md:h-[26px]"
          />
        </div>
        <div
          onClick={rightClick}
          className="absolute right-2 md:right-4 top-[44%] md:top-1/2 -translate-y-1/2 bg-dark-green/50 py-2 px-3  rounded-md shadow"
        >
          <Image
            src="/right-arrow.png"
            alt="right-arrow"
            width={18}
            height={18}
            className="md:w-[26px] md:h-[26px]"
          />
        </div>
        <div className=" hidden xl:block absolute bg-white p-3 pl-9 text-center right-0 bottom-0  rounded-tl-[4rem] clip-slant ">
          <p className="text-gray-700 font-satoshi font-light italic  xl:max-w-[22rem] text-left text-sm">
            &quot; We’re not experts in suits, we’re students, storytellers,
            builders, and friends who decided to do something. &quot;
          </p>
        </div>
      </div>
    </div>
  );
}
