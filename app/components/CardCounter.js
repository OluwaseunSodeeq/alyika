"use client";
import { useEffect, useRef, useState } from "react";

export default function CardCounter({ numb, text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  function formatText(value) {
    if (value === undefined || value === null) return "";

    const myNewvalue = String(value).trim();
    if (/000$/.test(myNewvalue)) {
      const n = Number(myNewvalue) / 1000;
      return `${n}k`;
    }

    return myNewvalue;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          let start = 1;
          const duration = 1500;
          const increment = Math.ceil(numb / (duration / 16));

          const updateCounter = () => {
            start += increment;
            if (start < numb) {
              setCount(start);
              requestAnimationFrame(updateCounter);
            } else {
              setCount(numb);
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.3 },
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [numb]);

  return (
    <div
      ref={ref}
      className="bg-main-bg mt-4 shadow-sm rounded-lg px-1 md:p-2 h-[8rem] w-[10rem] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <span className="font-satoshi font-extrabold text-4xl text-dark-green">
        {formatText(count)}+
      </span>

      <p className="font-montserrat font-normal text-[12px] md:text-[14px] xl:text-base text-center">
        {formatText(text)}
      </p>
    </div>
  );
}
