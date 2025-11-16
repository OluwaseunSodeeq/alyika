"use client";
import React, { useState, useEffect } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const maxIndex = testimonialArray.length - cardsPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="relative w-full pt-8 pb-12 overflow-hidden px-4 xl:px-14">
      <div className="relative flex items-center overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
        >
          ◀
        </button>

        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
          }}
        >
          {testimonialArray.map((testimonial, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / cardsPerView}%` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
        >
          ▶
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: testimonialArray.length - cardsPerView + 1 }).map(
          (_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                index === currentIndex
                  ? "bg-dark-green scale-110"
                  : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          )
        )}
      </div>
    </div>
  );
}

// ================================
// "use client";
// import React, { useState, useEffect } from "react";
// import TestimonialCard from "./TestimonialCard";

// export default function TestimonialSection() {
//   const testimonialArray = [
//     {
//       rating: "5",
//       text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
//       name: "Oluwaseun",
//       image: "/person.png",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“This program opened my eyes to so many possibilities in tech.”",
//       name: "Hafsat",
//       image: "/hafsat.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I can now confidently build climate-driven digital solutions.”",
//       name: "Oluwasegun",
//       image: "/hafsat2.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I’ve never felt this inspired before. Amazing experience!”",
//       name: "Joy",
//       image: "/person.png",
//       age: 18,
//     },
//     {
//       rating: "5",
//       text: "“Now I understand how tech can solve real environmental problems.”",
//       name: "Daniel",
//       image: "/hafsat.jpg",
//       age: 19,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(3);

//   useEffect(() => {
//     const updateView = () => {
//       if (window.innerWidth < 640) setCardsPerView(1);
//       else if (window.innerWidth < 960) setCardsPerView(2);
//       else setCardsPerView(3);
//     };

//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   const maxIndex = testimonialArray.length - cardsPerView;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
//   };

//   return (
//     <div className="relative w-full pt-8 pb-12 overflow-hidden px-4 xl:px-14">
//       <div className="relative flex items-center overflow-hidden">
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ◀
//         </button>

//         <div
//           className="flex transition-transform duration-500 ease-out gap-4"
//           style={{
//             transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
//           }}
//         >
//           {testimonialArray.map((testimonial, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0"
//               style={{ width: `calc(100% / ${cardsPerView})` }}
//             >
//               <TestimonialCard testimonial={testimonial} />
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={nextSlide}
//           className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ▶
//         </button>
//       </div>

//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: testimonialArray.length - cardsPerView + 1 }).map(
//           (_, index) => (
//             <div
//               key={index}
//               className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//                 index === currentIndex
//                   ? "bg-dark-green scale-110"
//                   : "bg-gray-400"
//               }`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           )
//         )}
//       </div>
//     </div>
//   );
// }

//===============================
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import TestimonialCard from "./TestimonialCard";

// export default function TestimonialSection() {
//   const testimonialArray = [
//     {
//       rating: "5",
//       text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
//       name: "Oluwaseun",
//       image: "/person.png",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“This program opened my eyes to so many possibilities in tech.”",
//       name: "Hafsat",
//       image: "/hafsat.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I can now confidently build climate-driven digital solutions.”",
//       name: "Oluwasegun",
//       image: "/hafsat2.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I’ve never felt this inspired before. Amazing experience!”",
//       name: "Joy",
//       image: "/person.png",
//       age: 18,
//     },
//     {
//       rating: "5",
//       text: "“Now I understand how tech can solve real environmental problems.”",
//       name: "Daniel",
//       image: "/hafsat.jpg",
//       age: 19,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(3);

//   // Determine cards shown based on screen width
//   useEffect(() => {
//     const updateView = () => {
//       if (window.innerWidth < 640) setCardsPerView(1); // mobile
//       else if (window.innerWidth < 960) setCardsPerView(2); // tablet
//       else setCardsPerView(3); // desktop
//     };

//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   const maxIndex = testimonialArray.length - cardsPerView;

//   // Auto-slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
//   };

//   return (
//     <div className="relative w-full pt-[2rem] pb-[4rem] overflow-hidden px-[1rem] xl:px-[3.5rem]">
//       <div className="relative flex items-center overflow-hidden">
//         {/* Prev Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ◀
//         </button>

//         {/* Slider Track */}
//         <div
//           className="flex transition-transform duration-500 ease-out"
//           style={{
//             transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
//             width: `${(testimonialArray.length / cardsPerView) * 100}%`,
//           }}
//         >
//           {testimonialArray.map((testimonial, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0"
//               style={{
//                 width: `${100 / testimonialArray.length}%`,
//               }}
//             >
//               <TestimonialCard testimonial={testimonial} />
//             </div>
//           ))}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ▶
//         </button>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//               index === currentIndex ? "bg-dark-green scale-110" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

//==============================

// "use client";
// import React, { useState, useEffect } from "react";
// import TestimonialCard from "./TestimonialCard";

// export default function TestimonialSection() {
//   const testimonialArray = [
//     {
//       rating: "5",
//       text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
//       name: "Oluwaseun",
//       image: "/person.png",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“This program opened my eyes to so many possibilities in tech.”",
//       name: "Hafsat",
//       image: "/hafsat.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I can now confidently build climate-driven digital solutions.”",
//       name: "Oluwasegun",
//       image: "/hafsat2.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I’ve never felt this inspired before. Amazing experience!”",
//       name: "Joy",
//       image: "/person.png",
//       age: 18,
//     },
//     {
//       rating: "5",
//       text: "“Now I understand how tech can solve real environmental problems.”",
//       name: "Daniel",
//       image: "/hafsat.jpg",
//       age: 19,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [cardsPerView, setCardsPerView] = useState(3);

//   // Detect screen size
//   useEffect(() => {
//     const updateView = () => {
//       if (window.innerWidth < 640) setCardsPerView(1);
//       else if (window.innerWidth < 960) setCardsPerView(2);
//       else setCardsPerView(3);
//     };

//     updateView();
//     window.addEventListener("resize", updateView);
//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   const maxIndex = testimonialArray.length - cardsPerView;

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [maxIndex]);

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
//   };

//   return (
//     <div className="relative w-full pt-[2rem] pb-[4rem] overflow-hidden px-[1rem] xl:px-[3.5rem]">
//       <div className="relative border-2 flex items-center overflow-hidden">
//         {/* Prev Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ◀
//         </button>

//         {/* Slider Track */}
//         <div
//           className="flex transition-transform duration-500 ease-out gap-3"
//           style={{
//             transform: `translateX(-${
//               (100 / cardsPerView + (12 / window.innerWidth) * 100) *
//               currentIndex
//             }%)`,
//           }}
//         >
//           {testimonialArray.map((testimonial, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0"
//               style={{
//                 width: `calc((100% / ${cardsPerView}) - 12px)`,
//               }}
//             >
//               <TestimonialCard testimonial={testimonial} />
//             </div>
//           ))}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ▶
//         </button>
//       </div>

//       {/* Pagination Dots = number of slides (5) */}
//       <div className="flex justify-center mt-6 gap-2">
//         {testimonialArray.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//               index === currentIndex ? "bg-dark-green scale-110" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// ===============================
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import TestimonialCard from "./TestimonialCard";

// export default function TestimonialSection() {
//   const testimonialArray = [
//     {
//       rating: "5",
//       text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
//       name: "Oluwaseun",
//       image: "/person.png",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“This program opened my eyes to so many possibilities in tech.”",
//       name: "Hafsat",
//       image: "/hafsat.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I can now confidently build climate-driven digital solutions.”",
//       name: "Oluwasegun",
//       image: "/hafsat2.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“I’ve never felt this inspired before. Amazing experience!”",
//       name: "Joy",
//       image: "/person.png",
//       age: 18,
//     },
//     {
//       rating: "5",
//       text: "“Now I understand how tech can solve real environmental problems.”",
//       name: "Daniel",
//       image: "/hafsat.jpg",
//       age: 19,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const sliderRef = useRef(null);

//   // Determine how many cards to show based on the screen size
//   const [cardsPerView, setCardsPerView] = useState(3);

//   useEffect(() => {
//     const updateView = () => {
//       if (window.innerWidth < 640) setCardsPerView(1); // mobile
//       else if (window.innerWidth < 960) setCardsPerView(2); // tablet
//       else setCardsPerView(3); // desktop
//     };

//     updateView();
//     window.addEventListener("resize", updateView);

//     return () => window.removeEventListener("resize", updateView);
//   }, []);

//   // Auto-slide every 2 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) =>
//         prev < testimonialArray.length - cardsPerView ? prev + 1 : 0
//       );
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [cardsPerView, testimonialArray.length]);

//   // next Slde function
//   const nextSlide = () => {
//     if (currentIndex < testimonialArray.length - cardsPerView) {
//       setCurrentIndex(currentIndex + 1);
//     } else {
//       setCurrentIndex(0);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     } else {
//       setCurrentIndex(testimonialArray.length - cardsPerView);
//     }
//   };

//   return (
//     <div className="relative w-full pt-[2rem] pb-[4rem] overflow-hidden px-[1rem] xl:px-[3.5rem]">
//       {/* Slider Container */}
//       <div className="relative flex items-center">
//         {/* Prev Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ◀
//         </button>

//         {/* Slider Track */}
//         <div
//           ref={sliderRef}
//           className="flex transition-transform duration-500 ease-out gap-3"
//           style={{
//             transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)`,
//             width: `${(testimonialArray.length / cardsPerView) * 100}%`,
//           }}
//         >
//           {testimonialArray.map((testimonial, i) => (
//             <div
//               key={i}
//               className="flex-shrink-0"
//               style={{ width: `border-2 ${100 / cardsPerView}%` }}
//             >
//               <TestimonialCard testimonial={testimonial} />
//             </div>
//           ))}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-2 z-10 bg-white shadow-md rounded-full p-2 hidden md:block"
//         >
//           ▶
//         </button>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-6 gap-2">
//         {Array.from({
//           length: testimonialArray.length - cardsPerView + 1,
//         }).map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
//               index === currentIndex ? "bg-dark-green scale-110" : "bg-gray-400"
//             }`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
// ================================
/*
"use client";
import React, { useState, useEffect, useRef } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev < testimonialArray.length - cardsPerView ? prev + 1 : 0
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [cardsPerView]);

  return (
    <div className="relative w-full pt-[2rem] pb-[4rem] overflow-hidden px-[1rem] xl:px-[3.5rem]">
      <div className="flex transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${
            (100 / cardsPerView) * currentIndex
          }%)`,
          width: `${(testimonialArray.length / cardsPerView) * 100}%`,
        }}
      >
        {testimonialArray.map((testimonial, i) => (
          <div
            key={i}
            className="flex-shrink-0"
            style={{
              width: `${100 / cardsPerView}%`, // Ensures 3, 2, or 1 cards
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {Array.from({
          length: testimonialArray.length - cardsPerView + 1,
        }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex
                ? "bg-dark-green scale-110"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

*/
// ================================
// import React from "react";
// import TestimonialCard from "./TestimonialCard";

// export default function TestimonialSection() {
//   const testimonialArray = [
//     {
//       rating: "5",
//       text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
//       name: "Oluwaseun",
//       image: "/person.png",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
//       name: "Hafsat",
//       image: "/hafsat.jpg",
//       age: 17,
//     },
//     {
//       rating: "5",
//       text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
//       name: "Oluwasegun",
//       image: "/hafsat2.jpg",
//       age: 17,
//     },
//   ];
//   return (
//     <div className="relative h-auto pt-[2rem] md:pt-1  pb-[4rem] flex flex-wrap flex-col md:flex-row justify-center xl:justify-between items-center gap-5 md:gap-5 px-[1rem] xl:px-[3.5rem] ">
//       {testimonialArray.map((testimonial, i) => {
//         return <TestimonialCard key={i} testimonial={testimonial} />;
//       })}
//     </div>
//   );
// }
