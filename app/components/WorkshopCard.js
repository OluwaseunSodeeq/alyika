"use client";
import Image from "next/image";

export default function WorkshopCard({ image }) {
  return (
    <div className="mb-4 break-inside-avoid">
      {/* <div className="overflow-hidden rounded-xl bg-gray-100 lg:w-[416px] h-auto"> */}
      <div className="overflow-hidden rounded-xl max-w-full ">
        <Image
          src={image}
          alt="Workshop snapshot"
          width={800}
          height={1000}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
