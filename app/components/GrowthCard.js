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

    path.style.strokeDasharray = totalLength;
    path.style.strokeDashoffset = totalLength;

    let progress = 0;
    const target = value / 100;

    const animate = () => {
      if (progress < target) {
        // progress += 0.01;
        progress += (target - progress) * 0.08;

        const drawLength = totalLength * progress;

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

  return (
    <div
      className=" bg-white py-6 md:py-3 rounded-[30px] w-[300px] md:w-full  h-[350px] md:h-[300px] xl:w-[200px] xl:h-[350px] aspect-[1/2.4] flex flex-col justify-between shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              transition-all duration-300 hover:scale-105 "
    >
      <svg viewBox="0 0 120 360" className="w-full h-full px-0">
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0" />

            <stop offset={`${value}%`} stopColor="#6BD096" stopOpacity="0.25" />

            <stop offset="100%" stopColor="#6BD096" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <path d={`${pathD} L 80 360 L 40 360 Z`} fill="url(#areaGradient)" />

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

        <line
          x1="30"
          y1="0"
          x2="30"
          y2="360"
          stroke="#d1d5db"
          strokeDasharray="5 5"
        />

        <line
          x1="0"
          y1={point.y}
          x2="120"
          y2={point.y}
          stroke="#0f3d2e"
          strokeWidth="1"
          opacity="0.6"
        />

        <circle
          cx={point.x}
          cy={point.y}
          r="5"
          fill="#0f3d2e"
          className="drop-shadow-md"
        />
      </svg>

      <div className="text-center text-base text-dark-green">
        Increasing by{" "}
        <span className="font-semibold ">{Math.floor(value)}%</span>
      </div>
    </div>
  );
}
