"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Button from "./Button";

export default function HerosecRightCard() {
  const btnBg = "#fdcd31";
  const textColor = "#012f25";
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      rating: 4,
      image: "/person.png",
      bgImage: "/bgImage0.png",
    },
    {
      name: "Jane Smith",
      text: "Another feedback example for the carousel.",
      rating: 3,
      image: "/person.png",
      bgImage: "/bgImage1.png",
    },
    {
      name: "Oluwaseun Sodeeq",
      text: "Another feedback example for the carousel.",
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
    <div className="relative xl:h-[40rem] 2xl:w-[44rem] xl:w-[44rem] sm:w-[24rem] rounded-[1.2rem] overflow-hidden shadow-lg ">
      <div
        className="relative w-full h-full bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${current.bgImage})` }}
      >
        <div className="absolute top-4 flex gap-4 right-[2rem]">
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

        <div className="absolute top-[7rem] left-6 bg-yellow p-4 rounded-xl xl:max-w-[16rem] shadow-md">
          <div className="flex items-center gap-3">
            <div className="xl:w-[24rem] xl:h-28 rounded-md overflow-hidden border-yellow">
              <Image
                width={100}
                height={100}
                src={current.image}
                alt={current.name}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex text-dark-green">
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
              <p className="text-xs text-dark-green mt-1">{current.text}</p>
            </div>
          </div>
        </div>

        <div
          onClick={leftClick}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark-green/50 py-2 px-3 rounded-md shadow"
        >
          <Image
            src="/left-arrow.svg"
            alt="left-arrow"
            width={26}
            height={26}
          />
        </div>
        <div
          onClick={rightClick}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark-green/50 py-2 px-3  rounded-md shadow"
        >
          <Image
            src="/right-arrow.png"
            alt="right-arrow"
            width={26}
            height={26}
          />
          {/* <ChevronRight className="w-5 h-5" /> */}
        </div>
        <div className="absolute bg-white p-3 pl-9 text-center right-0 bottom-0  rounded-tl-[4rem] clip-slant ">
          <p className="text-gray-700 font-satoshi font-light italic  xl:max-w-[22rem] text-left text-sm">
            &quot; We’re not experts in suits, we’re students, storytellers,
            builders, and friends who decided to do something. &quot;
          </p>
        </div>
      </div>
    </div>
  );
}
