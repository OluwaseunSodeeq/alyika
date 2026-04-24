"use client";
import Image from "next/image";

export default function WorkshopCard({ image }) {
  return (
    <div className="overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ">
      <Image
        src={image}
        alt="Workshop snapshot"
        width={800}
        height={1000}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
