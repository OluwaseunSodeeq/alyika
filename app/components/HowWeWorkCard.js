import React from "react";
import Button from "./Button";

export default function HowWeWorkCard({ item, index }) {
  return (
    <div
      className={` w-[23rem] h-[20rem]  flex flex-col justify-center items-center shadow-md rounded-xl xl:px-[74px] py-3 font-satoshi ${
        (index + 1) % 2 === 0
          ? "bg-yellow text-dark-green"
          : " bg-card-green text-main-bg"
      }`}
    >
      <h4 className="font-bold text-5xl ">{item.heading}</h4>
      <p className=" text-base text-center mt-5 ">{item.text}</p>
      <div className="mt-6">
        <Button btnBg="#ffffff" textColor="#012f25">
          Explore
        </Button>
      </div>
    </div>
  );
}
