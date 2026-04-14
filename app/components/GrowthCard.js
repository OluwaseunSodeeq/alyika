"use client";

import { useEffect, useRef, useState } from "react";

export default function GrowthCard({ value }) {
  const pathRef = useRef(null);
  const [point, setPoint] = useState({ x: 0, y: 0 });

  const pathD = `
    M 40 20
    C 60 80, 80 120, 70 180
    S 100 260, 80 320
  `;
  useEffect(() => {
    const path = pathRef.current;
    const totalLength = path.getTotalLength();

    // ✅ Set correct dash values
    path.style.strokeDasharray = totalLength;
    path.style.strokeDashoffset = totalLength;

    let progress = 0;
    const target = value / 100;

    const animate = () => {
      if (progress < target) {
        // progress += 0.01;
        progress += (target - progress) * 0.08;

        const drawLength = totalLength * progress;

        // ✅ Animate line drawing
        path.style.strokeDashoffset = totalLength - drawLength;

        const pointAtLength = path.getPointAtLength(drawLength);

        setPoint({
          x: pointAtLength.x,
          y: pointAtLength.y,
        });

        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [value]);

  // useEffect(() => {
  //   const path = pathRef.current;
  //   const totalLength = path.getTotalLength();

  //   let progress = 0;

  //   const animate = () => {
  //     const target = value / 100;

  //     if (progress < target) {
  //       progress += 0.01;

  //       const pointAtLength = path.getPointAtLength(progress * totalLength);

  //       setPoint({
  //         x: pointAtLength.x,
  //         y: pointAtLength.y,
  //       });

  //       requestAnimationFrame(animate);
  //     }
  //   };

  //   animate();
  // }, [value]);

  return (
    <div
      className=" bg-white py-6 md:py-3 rounded-[30px] w-full h-[350px] md:h-[300px] xl:w-[200px] xl:h-[350px] aspect-[1/2.4] flex flex-col justify-between shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              transition-all duration-300 hover:scale-105 "
    >
      <svg viewBox="0 0 120 360" className="w-full h-full px-0">
        {/* 🌈 GRADIENT */}
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            {/* ❌ No shade from 0 → value */}
            <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0" />

            {/* ✅ Shade AFTER value */}
            <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0.25" />

            <stop offset="100%" stopColor="#6BD096" stopOpacity="0.4" />
          </linearGradient>

          {/* <linearGradient id="areaGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0.2">
              <animate
                attributeName="stop-opacity"
                values="0.4;0.7;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#6BD096" stopOpacity="0" />
          </linearGradient> */}
        </defs>

        {/* 🌊 AREA */}
        {/* <path d={`${pathD} L 120 360 L 120 0 Z`} fill="url(#areaGradient)" /> */}
        <path d={`${pathD} L 80 360 L 40 360 Z`} fill="url(#areaGradient)" />

        {/* 📈 DRAWING PATH */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="#0f3d2e"
          strokeWidth="3"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-draw"
        />

        {/* 📏 DASHED GUIDE */}
        <line
          x1="30"
          y1="0"
          x2="30"
          y2="360"
          stroke="#d1d5db"
          strokeDasharray="5 5"
        />

        {/* 🎯 HORIZONTAL TRACK */}
        <line
          x1="0"
          y1={point.y}
          x2="120"
          y2={point.y}
          stroke="#0f3d2e"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* 🔵 DOT */}
        <circle
          cx={point.x}
          cy={point.y}
          r="5"
          fill="#0f3d2e"
          className="drop-shadow-md"
        />
      </svg>

      {/* TEXT */}
      <div className="text-center text-base text-dark-green">
        Increasing by <span className="font-semibold ">{value}%</span>
      </div>
    </div>
  );
}

//============
// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function GrowthCard({ value = 20 }) {
//   const pathRef = useRef(null);
//   const [point, setPoint] = useState({ x: 0, y: 0 });

//   const pathD = `
//     M 40 20
//     C 60 80, 80 120, 70 180
//     S 100 260, 80 320
//   `;

//   useEffect(() => {
//     const path = pathRef.current;
//     const totalLength = path.getTotalLength();

//     let progress = 0;

//     const animate = () => {
//       const target = value / 100;

//       if (progress < target) {
//         progress += 0.01;

//         const pointAtLength = path.getPointAtLength(progress * totalLength);

//         setPoint({
//           x: pointAtLength.x,
//           y: pointAtLength.y,
//         });

//         requestAnimationFrame(animate);
//       }
//     };

//     animate();
//   }, [value]);

//   return (
//     <div
//       className=" bg-white py-6 md:py-3 rounded-[30px] w-[300px] h-[350px] md:h-[300px] md:w-[100px] lg:w-[200px] xl:h-[350px] aspect-[1/2.4] flex flex-col justify-between shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
//               transition-all duration-300 hover:scale-105"
//     >
//       <svg viewBox="0 0 120 360" className="w-full h-full px-0">
//         {/* 🌈 GRADIENT */}
//         <defs>
//           <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
//             {/* Transparent from top → value */}
//             {/* <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0" /> */}
//             <stop offset={`${value}%`} stopColor="#ffffff" />

//             {/* Start shading at value */}
//             <stop offset={`${value}%`} stopColor="#E4F9ED">
//               <animate
//                 attributeName="stop-opacity"
//                 values="0.4;0.7;0.4"
//                 dur="3s"
//                 repeatCount="indefinite"
//               />
//             </stop>

//             {/* Fully shaded at bottom */}
//             <stop offset="100%" stopColor="#6BD096" stopOpacity="0.6" />
//           </linearGradient>
//         </defs>
//         {/* <defs>
//           <linearGradient id="areaGradient" x1="0" y1="0" x2="1" y2="1">
//             <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0.5">
//               <animate
//                 attributeName="stop-opacity"
//                 values="0.4;0.7;0.4"
//                 dur="3s"
//                 repeatCount="indefinite"
//               />
//             </stop>
//             <stop offset="100%" stopColor="#E4F9ED" stopOpacity="0.5" />
//           </linearGradient>
//         </defs> */}

//         {/* 🌊 AREA */}
//         <path d={`${pathD} L 120 360 L 120 0 Z`} fill="url(#areaGradient)" />

//         {/* 📈 DRAWING PATH */}
//         <path
//           ref={pathRef}
//           d={pathD}
//           fill="none"
//           stroke="#0f3d2e"
//           strokeWidth="3"
//           strokeDasharray="1000"
//           strokeDashoffset="1000"
//           className="animate-draw"
//         />

//         {/* 📏 DASHED GUIDE */}
//         <line
//           x1="30"
//           y1="0"
//           x2="30"
//           y2="360"
//           stroke="#d1d5db"
//           strokeDasharray="5 5"
//         />

//         {/* 🎯 HORIZONTAL TRACK */}
//         <line
//           x1="0"
//           y1={point.y}
//           x2="120"
//           y2={point.y}
//           stroke="#0f3d2e"
//           strokeWidth="1"
//           opacity="0.6"
//         />

//         {/* 🔵 DOT */}
//         <circle
//           cx={point.x}
//           cy={point.y}
//           r="5"
//           fill="#0f3d2e"
//           className="drop-shadow-md"
//         />
//       </svg>

//       {/* TEXT */}
//       <div className="text-center text-base text-dark-green">
//         Increasing by <span className="font-semibold ">{value}%</span>
//       </div>
//     </div>
//   );
// }

// ============================

// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function GrowthCard({ value = 20 }) {
//   const pathRef = useRef(null);
//   const [point, setPoint] = useState({ x: 0, y: 0 });

//   const pathD = `
//     M 40 20
//     C 60 80, 80 120, 70 180
//     S 100 260, 80 320
//   `;

//   useEffect(() => {
//     const path = pathRef.current;
//     const totalLength = path.getTotalLength();

//     let progress = 0;

//     const animate = () => {
//       const target = value / 100;

//       if (progress < target) {
//         progress += 0.01;

//         const pointAtLength = path.getPointAtLength(progress * totalLength);

//         setPoint({
//           x: pointAtLength.x,
//           y: pointAtLength.y,
//         });

//         requestAnimationFrame(animate);
//       }
//     };

//     animate();
//   }, [value]);

//   return (
//     <div className="bg-white py-6 md:py-3 rounded-[30px] w-full h-[350px] md:h-[300px] xl:w-[200px] xl:h-[350px] aspect-[1/2.4] flex flex-col justify-between shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105">
//       <svg viewBox="0 0 120 360" className="w-full h-full px-0">
//         {/* 🌈 GRADIENT */}
//         <defs>
//           <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
//             {/* Transparent from top → value */}
//             {/* <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0" /> */}
//             <stop offset={`${value}%`} stopColor="#ffffff" />

//             {/* Start shading at value */}
//             <stop offset={`${value}%`} stopColor="#E4F9ED">
//               <animate
//                 attributeName="stop-opacity"
//                 values="0.2;0.5;0.2"
//                 dur="3s"
//                 repeatCount="indefinite"
//               />
//             </stop>

//             {/* Fully shaded at bottom */}
//             <stop offset="100%" stopColor="#6BD096" stopOpacity="0.6" />
//           </linearGradient>
//         </defs>

//         {/* 🌊 AREA (Shaded region BELOW the curve) */}
//         <path d={`${pathD} L 120 360 L 0 360 Z`} fill="url(#areaGradient)" />

//         {/* 📈 LINE PATH */}
//         <path
//           ref={pathRef}
//           d={pathD}
//           fill="none"
//           stroke="#0f3d2e"
//           strokeWidth="3"
//           strokeDasharray="1000"
//           strokeDashoffset="1000"
//           className="animate-draw"
//         />

//         {/* 📏 DASHED GUIDE */}
//         <line
//           x1="30"
//           y1="0"
//           x2="30"
//           y2="360"
//           stroke="#d1d5db"
//           strokeDasharray="5 5"
//         />

//         {/* 🎯 HORIZONTAL TRACK */}
//         <line
//           x1="0"
//           y1={point.y}
//           x2="120"
//           y2={point.y}
//           stroke="#0f3d2e"
//           strokeWidth="1"
//           opacity="0.6"
//         />

//         {/* 🔵 DOT */}
//         <circle
//           cx={point.x}
//           cy={point.y}
//           r="5"
//           fill="#0f3d2e"
//           className="drop-shadow-md"
//         />
//       </svg>

//       {/* TEXT */}
//       <div className="text-center text-base text-dark-green">
//         Increasing by <span className="font-semibold">{value}%</span>
//       </div>
//     </div>
//   );
// }
