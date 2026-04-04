"use client";
import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  const { rating, text, name, image, title } = testimonial;
  return (
    <div className="shadow-[0_0_4px_0_#00000040] w-full h-[20rem] md:w-[22.5rem] xl:w-[24.5rem] xl:h-[25rem]  bg-white rounded-lg p-3 xl:p-3 relative ">
      {/* Stars */}
      <div className=" absolute left-[3.5rem] top-[3.8rem] xl:top-[5.8rem] flex items-center gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-green-500 fill-green-500" />
        ))}
      </div>

      <Image
        src="/quotes.svg"
        width={88}
        height={67}
        alt="quotes"
        className="absolute top-[2rem] xl:top-[3.7rem] right-[2rem] "
      />

      <p className=" absolute left-[3.5rem] font-bold font-satoshi text-base top-[6rem] xl:top-[8.8rem] italic text-testimonialText mt-3 pr-[3rem]">
        {text}
      </p>

      {/* Author */}
      <div className=" w-[100%] absolute left-[3.5rem] bottom-[1.5rem] flex gap-3 mt-4">
        <div className="relative w-[5.0rem] h-[5.2rem] rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-full"
          />
        </div>

        <p className=" w-[60%] font-satoshi font-bold text-black mr-[2rem] mt-3">
          <span>{`${name}, ${title}`}</span>
        </p>
      </div>
    </div>
  );
}
