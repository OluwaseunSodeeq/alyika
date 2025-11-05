import React from "react";
import Wrapper from "./Wrapper";
import Button from "./Button";
import CardCounter from "./CardCounter";

function Container({ children }) {
  <div
    base="w-full h-[20rem]"
    sm="h-[25rem]"
    md="h-[30rem]"
    lg="h-[35rem]"
    className="bg-blue-500 flex items-center justify-center text-white"
  >
    {children}
  </div>;
}

export default function WhatWeDoSection() {
  const cardArr = [
    { numb: "100", text: "students trained directly" },
    { numb: "250", text: "young people engaged in peer-led sessions" },
    { numb: "5000", text: "reached online through digital campaigns" },
    { numb: "5", text: "youth volunteers in our network" },
  ];
  return (
    <Wrapper>
      <div className="mt-[7rem] mb-[8rem] xl:px-[3.5rem] py-0">
        <div className="font-satoshi text-center flex gap-0 flex-col">
          <span className="font-normal text-[2.3rem] p-0">What We Do</span>
          <div className="p-0">
            <span className="font-bold text-[2.2rem] ">
              We do three main things{" "}
            </span>
            <span className="text-[2.2rem] font-normal">(all inspired</span>
          </div>
          <div className="font-medium text-[2.2rem] flex flex-col p-0 ">
            <span>by what we’ve lived through and seen)</span>
          </div>
        </div>

        <div className="mt-[4rem] ">
          <div className="flex items-center gap-[2.8rem]">
            <div
              className="xl:w-[39.6rem] xl:h-[17rem] relative"
              style={{
                backgroundImage: "url('/whatwedo01.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "1.2rem",
              }}
            >
              <div className="absolute left-[2rem] top-[45%] bg-main-bg/80 xl:w-[25rem] rounded-md">
                <p className="font-satoshi font-normal text-sm p-4 ">
                  <span className="font-bold">
                    We use technology to educate and innovate,{" "}
                  </span>
                  guiding young people to apply existing tools in protecting and
                  connecting to the environment, while building solutions
                  ourselves.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 xl:w-[29rem] h-[20rem] justify-center ">
              {cardArr.map((card, i) => {
                const { numb, text } = card;
                return <CardCounter key={i} numb={numb} text={text} />;
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-6 ">
          <div className="flex items-center gap-[2.8rem]">
            <div
              className="xl:w-[33.3rem] xl:h-[17rem] relative"
              style={{
                backgroundImage: "url('/whatwedo.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "1.2rem",
              }}
            >
              <div className="absolute left-[2rem] top-[45%] bg-main-bg/80 xl:w-[70%] rounded-md">
                <p className="font-normal text-sm p-4 ">
                  <span className="font-bold">
                    We tell stories of climate and environmental resilience,{" "}
                  </span>
                  drawn from real cases to amplify voices.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[2.8rem]">
            <div
              className="xl:w-[21rem] xl:h-[17rem] relative"
              style={{
                backgroundImage: "url('/whatwedo3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "1.2rem",
              }}
            >
              <div className="absolute left-[2rem] top-[45%] bg-main-bg/80 xl:w-[70%] rounded-md">
                <p className=" font-normal text-sm p-4 ">
                  <span className="font-bold">We run digital campaigns </span>
                  where we team up with creators to get young people fired up
                  about protecting their communities.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="xl:w-[17.8rem] xl:h-[12.8rem] shadow-sm mt-4 pl-4 pt-2 rounded-sm relative bg-main-bg"> */}
          <div className="xl:w-[17.8rem] xl:h-[12.8rem] shadow-sm mt-4 pl-4 pt-2 rounded-sm relative ">
            <p className="font-satoshi font-medium text-4xl text-dark-green">
              Want to know where it all started?
            </p>
            <div className="absolute bottom-2 items-center flex gap-x-2">
              <Button btnBg="#012f25" textColor="#ffffff">
                About Us
              </Button>
              <span className="italic cursor-pointer underline font-montserrat text-[11px] font-medium">
                See our Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
