"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Partners() {
  const marqueeRef = useRef(null);

  const partnersArray = [
    { image: "/partners/ashoka.png" },
    { image: "/partners/cih.png" },
    { image: "/partners/comic.png" },
    { image: "/partners/eco2.png" },
    { image: "/partners/greenquest.png" },
    { image: "/partners/nmsa.png" },
  ];

  // Duplicate items to create a continuous scroll effect
  const doubledPartners = [...partnersArray, ...partnersArray];

  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;

    const scroll = () => {
      if (marquee) {
        offset -= 1;

        const totalWidth = marquee.scrollWidth / 2;

        if (Math.abs(offset) >= totalWidth) {
          offset += totalWidth;
        }

        marquee.style.transform = `translateX(${offset}px)`;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <div className="overflow-hidden bg-main-bg pt-6 pb-10">
      <h4 className="text-[36px] text-black text-center font-semibold">
        Our Partners
      </h4>

      <div
        ref={marqueeRef}
        className="flex items-center gap-4 md:gap-8 lg:gap-16 whitespace-nowrap will-change-transform mt-6 "
      >
        {doubledPartners.map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 flex justify-center items-center"
          >
            <Image
              src={partner.image}
              alt={`Partner ${index}`}
              width={120}
              height={120}
              className="object-contain max-h-16 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
