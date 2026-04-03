import Link from "next/link";
import React from "react";

export default function HowWeWorkCard({ item, index }) {
  return (
    <div
      className={`w-full h-[243px] md:w-[23rem] md:h-[20rem]  flex flex-col justify-center items-center shadow-md rounded-xl px-[40px] xl:px-[74px] py-5 md:py-3 font-satoshi ${
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
            className="bg-main-bg text-dark-green cursor-pointer text-medium px-28 md:px-6 py-2 rounded-full shadow-sm transition inline-block text-center"
          >
            Explore
          </Link>
          {/* <Link href={item.link} passHref>
            <button
              className={` bg-main-bg text-dark-green cursor-pointer text-medium px-28 md:px-6 py-2 rounded-full shadow-sm transition `}
            >
              Explore
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
