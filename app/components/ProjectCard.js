"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({ eachProject }) {
  const { title, heading, description, imgUrl, details } = eachProject;
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div className="relative font-santoshi mt-5 h-auto pb-5 px-5">
      <h4 className=" xl:text-[32px] 2xl:text-[40px] text-black">{title}</h4>
      <h2
        className=" bg-[linear-gradient(90deg,#012F25_10.34%,#FDCD31_52.46%)] bg-clip-text text-transparent
        xl:text-[45px] 2xl:text-[55px] font-bold"
      >
        {heading}
      </h2>
      <p className="xl:w-[90%] xl:text-[24px] 2xl:text-[28px] text-black">
        {description}
      </p>
      <div className="relative xl:mt-8">
        <div className="relative w-full h-72 md:h-96 xl:h-[400px] 2xl:h-[500px] xl:rounded-[1rem] ">
          <Image
            src={imgUrl}
            alt={title}
            width={1024}
            height={400}
            className="w-full h-full object-cover xl:rounded-[1rem]"
          />

          {/* Arrow Button */}
          <div className="absolute bottom-[-28px] right-[-2px] bg-white border-1 cursor-pointer border-yellow w-14 h-14 rounded-full flex items-center justify-center">
            <Image
              src="/arrow.png"
              alt="arrow"
              width={16}
              height={16}
              onClick={() => setOpenDetails(!openDetails)}
              className={`transition-transform duration-200 ${
                openDetails ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </div>
        <div>
          {openDetails && (
            <p className="xl:text-[22px] 2xl:text-[28px] text-black mt-5">
              {details}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
