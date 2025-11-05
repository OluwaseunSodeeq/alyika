import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

export default function HerosecLeftCard() {
  const btnBg = "#fdcd31";
  const textColor = "#012f25";

  return (
    <div className="2xl:max-w-[36rem] xl:w-[33rem] xl:h-[40rem] sm:w-[20rem]  bg-dark-green text-main-bg px-2 sm:px-3 xl:pt-[7rem] xl:px-[3.5rem] xl:pb-[2rem] rounded-[1.2rem] border-2">
      <h1 className=" font-satoshi text-[40px] text-nowrap text-main-bg mb-4 ">
        Building Green Dreams
      </h1>
      <div className="text-4xl text-main-bg font-light mb-4">
        <div className=" flex items-center gap-x-1">
          <div className="border-b-2 pb-1 ">
            <Image
              src="/white-arrows.png"
              alt="arrow"
              width={40}
              height={40}
              className="inline-block  mb-2 "
            />
            <span className="mr-1"> From</span>
          </div>

          <p className="pb-3">the Ground Up</p>
        </div>
      </div>
      <div className="font-satoshi">
        <h4 className="font-bold">Hi there. </h4>
        <p className="text-base  text-main-bg font-light leading-6 italic">
          We’re a group of young Nigerians who’ve been knee-deep (literally) in
          flooded streets, trying to figure out how to stop climate change from
          wrecking our homes, schools, and futures.
        </p>
        <p className="text-base  text-main-bg font-light leading-6 mt-6 italic">
          We’re not experts in suits, we’re students, storytellers, builders,
          and friends who decided to do something. And now we’re inviting you to
          do it with us.
        </p>
      </div>

      <div className="font-montserrat flex gap-3 items-center xl:mt-[1.2rem] ">
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
    </div>
  );
}
