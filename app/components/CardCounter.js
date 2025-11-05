"use client";
import { useEffect, useRef, useState } from "react";

export default function CardCounter({ numb, text }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

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
      { threshold: 0.3 } // trigger when 30% visible
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [numb]);

  return (
    <div
      ref={ref}
      className="bg-main-bg mt-4 shadow-sm rounded-lg p-2 h-[8rem] w-[13rem] flex flex-col items-center justify-center"
    >
      <span className="font-satoshi font-extrabold text-4xl text-dark-green">
        {count}+
      </span>
      <p className="font-montserrat font-light text-base text-center">{text}</p>
    </div>
  );
}
