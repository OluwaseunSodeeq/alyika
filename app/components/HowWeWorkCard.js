import Link from "next/link";
import React from "react";

export default function HowWeWorkCard({ item, index }) {
  return (
    <div
      className={`w-full h-[243px] md:w-[23rem] md:h-[20rem]  flex flex-col justify-center items-center shadow-md rounded-xl px-[40px] xl:px-[74px] py-5 md:py-3 font-satoshitransition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        (index + 1) % 2 === 0
          ? "bg-yellow text-dark-green"
          : " bg-card-green text-main-bg"
      }`}
    >
      <h4 className="font-bold text-5xl ">{item.heading}</h4>
      <p className=" text-base text-center mt-5 ">{item.text}</p>
      <div className="mt-6">
        <div>
          <Link
            href={item.link}
            className="bg-main-bg text-dark-green cursor-pointer text-medium px-28 md:px-6 py-2 rounded-full shadow-sm inline-block text-center transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
}
