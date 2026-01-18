import Image from "next/image";
import WorkshopCard from "./WorkshopCard";

const images = [
  "/workshop1.png",
  "/workshop2.png",
  "/workshop3.png",
  "/workshop4.png",
  "/workshop5.png",
  "/workshop6.png",
  "/workshop7.png",
  "/workshop8.png",
  "/workshop9.png",
  "/workshop10.png",
];

export default function GalleryHeroSection() {
  return (
    <section className="px-4 md:px-10 pb-12 lg:mx-[2.5rem] ">
      {/* Header */}
      <div className=" relative font-satoshi text-center lg:w-[1000px] 2xl:w-[1200px] mx-auto mt-5 md:mt-10 lg:mb-5 pb-15 md:pb-20 flex md:flex-col flex-wrap justify-center lg:gap-0">
        <span className="text-[33px] md:text-[40px] lg:text-[55px] 2xl:text-[70px] font-bold text-black mb-2">
          Browse through snapshots from
        </span>
        <span className="text-[33px] md:text-[50px] 2xl:text-[90px] lg:text-[70px] md:text-4xl font-extrabold text-dark-green">
          Our Programmes
        </span>
        <Image
          className="hidden lg:block absolute left-58 top-38 2xl:left-64 2xl:top-48 "
          src="/left-design.png"
          alt="Left decoration"
          width={50}
          height={50}
        />
        <Image
          className="absolute -translate-x-1/2 left-1/2 top-43 md:top-38 lg:right-90 lg:top-45 2xl:top-58"
          src="/right-design.png"
          alt="Right decoration"
          width={100}
          height={100}
        />
      </div>

      {/* Masonry Grid */}
      <div
        className="
         columns-2
        sm:columns-3
        lg:columns-3
        xl:columns-3
        2xl:columns-3
        gap-6
       
        "
      >
        {images.map((src, index) => (
          <WorkshopCard key={index} image={src} />
        ))}
      </div>
    </section>
  );
}
