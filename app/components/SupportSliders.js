"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const slides = [
  {
    image: "/support1.png",
    title: "If you’ve ever wondered how to help, here’s a good place to start",
    subtitle: "We don’t just build classrooms, we build partnerships.",
  },
  {
    image: "/support2.png",
    title: "Support education that transforms communities",
    subtitle: "Every contribution creates long-term impact.",
  },
  {
    image: "/support3.png",
    title: "Small actions can change a child’s future",
    subtitle: "Join us in making education accessible.",
  },
];
export default function SupportSliders() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden mb-6 h-[280px]md:h-[450px] 2xl:h-[580px]">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`
            absolute inset-0
            transition-opacity duration-700 ease-in-out
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-center px-4">
            <div className="text-white max-w-xl">
              <h1 className="text-xl md:text-3xl font-semibold mb-3">
                <span className="text-yellow  mb-[20px]">“</span>
                <span className="text-main-bg lg:text-[50px]">
                  {slide.title}
                </span>
                <span className="text-yellow  mb-[20px]">”</span>
              </h1>
              {/* <p className="text-sm md:text-base">{slide.subtitle}</p> */}
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-2.5 w-2.5 rounded-full transition-all duration-300
              ${index === current ? " bg-white" : " bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
