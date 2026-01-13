import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import {
  LeftGradientDashedFadeLine,
  RightGradientDashedFadeLine,
} from "./GradientLines";

export default function HerosecLeftCard() {
  const btnBg = "#fdcd31";
  const textColor = "#012f25";

  return (
    <div className="relative w-full 2xl:max-w-[36rem] xl:w-[33rem] xl:h-[40rem] md:h-[40rem] md:w-[23.8rem] bg-dark-green text-main-bg pt-[4.2rem] md:pt-[3rem] xl:pt-[7rem] px-[1rem] md:px-[1.5rem] xl:px-[3.5rem] pb-0 xl:pb-[2rem] md:rounded-[1.2rem]">
      <h1 className="font-satoshi text-[48px] md:text-[40px] text-main-bg mb-4 md:font-medium leading-[1] lg:text-nowrap">
        <span className=""> Building Green </span>
        <span className="text-[84px] lg:text-[40px] text-yellow md:text-main-bg md:text-[48px] xl:[40px] font-bold md:font-medium">
          Dreams
        </span>
      </h1>
      <div className=" w-[90%] md:w-full text-[28px] xl:text-4xl text-main-bg font-light mb-4 p-0">
        <div className=" flex gap-x-1 mt-[1rem] md:mt-0">
          <div className="border-b-2 flex gap-x-[10px] pb-1 ">
            <Image
              src="/white-arrows.png"
              alt="arrow"
              width={40}
              height={40}
              className="inline-block mb-2 "
            />
            <span className="mr-1"> From</span>
          </div>

          <p className="pb-3">the Ground Up</p>
        </div>
      </div>
      <div className="font-satoshi mt-4.5 md:mt-0">
        <h4 className="font-bold hidden md:block">Hi there. </h4>
        <p className="hidden md:block text-base  text-main-bg font-light leading-6 italic">
          We’re a group of young Nigerians who’ve been knee-deep (literally) in
          flooded streets, trying to figure out how to stop climate change from
          wrecking our homes, schools, and futures.
        </p>
        <p className="text-base  text-main-bg font-light leading-6 mt-6 italic ">
          Project Climeset is a climate literacy organization that uses
          storytelling and technology to advance climate education, build
          resilience, and reduce climate apathy.
        </p>
      </div>

      <div className="font-montserrat flex font-medium gap-4 items-center mt-[2.5rem]  xl:mt-[1.2rem] pb-6 md:pb-0 pt-2 md:pt-0">
        <Button btnBg={btnBg} textColor={textColor}>
          Get Involved
        </Button>
        <Link
          href="/"
          className="underline text-light-green text-[14px] cursor-pointer "
        >
          Support a Project
        </Link>
      </div>

      <div className="w-full transition  md:hidden mt-2.5">
        {/* <LeftGradientDashedFadeLine /> */}
        <RightGradientDashedFadeLine />
      </div>
    </div>
  );
}
