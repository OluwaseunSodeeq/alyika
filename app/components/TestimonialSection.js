/* TestimonialSection.jsx */
"use client";
import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonialArray = [
    {
      rating: "5",
      text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
      name: "Oluwaseun",
      image: "/person.png",
      age: 17,
    },
    {
      rating: "5",
      text: "“This program opened my eyes to so many possibilities in tech.”",
      name: "Hafsat",
      image: "/hafsat.jpg",
      age: 17,
    },
    {
      rating: "5",
      text: "“I can now confidently build climate-driven digital solutions.”",
      name: "Oluwasegun",
      image: "/hafsat2.jpg",
      age: 17,
    },
    {
      rating: "5",
      text: "“I’ve never felt this inspired before. Amazing experience!”",
      name: "Joy",
      image: "/person.png",
      age: 18,
    },
    {
      rating: "5",
      text: "“Now I understand how tech can solve real environmental problems.”",
      name: "Daniel",
      image: "/hafsat.jpg",
      age: 19,
    },
  ];

  const [cardsPerView, setCardsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update cardsPerView on resize (Tailwind breakpoints: sm=640, lg=1024)
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Derived
  const maxIndex = Math.max(0, testimonialArray.length - cardsPerView);
  const slideWidthPercent = 100 / cardsPerView; // each slide's percentage width

  // If cardsPerView changes, clamp currentIndex so we never go past the last page
  useEffect(() => {
    setCurrentIndex((ci) => Math.min(ci, maxIndex));
  }, [cardsPerView, maxIndex]);

  // Auto-play (optional). Keeps last page visible instead of wrapping to 0.
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3500);
    return () => clearInterval(id);
  }, [maxIndex]);

  // const goNext = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  // const goPrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="relative w-full pt-8 pb-12 overflow-hidden px-4 xl:px-14">
      <div className="relative">
        {/* Prev (hidden on small screens) */}
        {/* <button
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hidden md:inline-flex"
          aria-label="previous"
        >
          ◀
        </button> */}

        {/* Track container */}
        <div className="overflow-hidden">
          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              // translate by currentIndex * single slide width
              transform: `translateX(-${currentIndex * slideWidthPercent}%)`,
            }}
          >
            {testimonialArray.map((t, i) => (
              // box-border so padding doesn't push the width beyond the percent
              <div
                key={i}
                className="flex-shrink-0 box-border py-2.5"
                style={{
                  width: `${slideWidthPercent}%`,
                }}
              >
                {/* internal spacing (included in width because of box-border) */}
                <div className="px-3">
                  <TestimonialCard testimonial={t} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next (hidden on small screens) */}
        {/* <button
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full p-2 hidden md:inline-flex"
          aria-label="next"
        >
          ▶
        </button> */}
      </div>

      {/* Pagination: number of possible positions = maxIndex + 1 */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-transform ${
              idx === currentIndex ? "bg-dark-green scale-110" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
