"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Partners() {
  const marqueeRef = useRef(null);

 const partnersArray = [
    { image: "/atlas.png" },
    { image: "/slack.png" },
     { image: "/atlas.png" },
    { image: "/slack.png" },
    { image: "/dropbox.png" },
    { image: "/google.png" },
    { image: "/shopify.png" },
    { image: "/dropbox.png" },
    { image: "/shopify.png" },
    { image: "/google.png" },
    
  ];

  // Duplicate items to create a continuous scroll effect
  const doubledPartners = [...partnersArray, ...partnersArray];

  useEffect(() => {
    const marquee = marqueeRef.current;
    let offset = 0;

    const scroll = () => {
      if (marquee) {
        offset -= 1; // Adjust speed here
        marquee.style.transform = `translateX(${offset}px)`;

        // Instead of resetting to 0 (which causes the jump),
        // reset only when the *first set* has completely moved out of view
        const totalWidth = marquee.scrollWidth / 2;
        if (Math.abs(offset) >= totalWidth) {
          offset = 0; // restart seamlessly
        }
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <div className="overflow-hidden bg-main-bg py-10">
      <h4 className="text-[36px] text-black text-center pb-6 font-semibold">
        Our Partners
      </h4>

      <div
        ref={marqueeRef}
        className="flex items-center gap-8 lg:gap-16 whitespace-nowrap will-change-transform"
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
              className="object-contain max-h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}



// "use client";
// import Image from "next/image";
// import { useEffect, useRef } from "react";

// export default function Partners() {
//   const marqueeRef = useRef(null);

//   // Add as many partners as you want here
//   const partnersArray = [
//     { image: "/atlas.png" },
//     { image: "/slack.png" },
//      { image: "/atlas.png" },
//     { image: "/slack.png" },
//     { image: "/dropbox.png" },
//     { image: "/google.png" },
//     { image: "/shopify.png" },
//     { image: "/dropbox.png" },
//     { image: "/shopify.png" },
//     { image: "/google.png" },
    
//   ];

//   // Duplicate list to create an infinite scroll effect
//   // const doubledPartners = [...partnersArray, ...partnersArray];
//   // const doubledPartners = [ ...partnersArray];

//   useEffect(() => {
//     const marquee = marqueeRef.current;
//     let offset = 0;

//     const scroll = () => {
//       if (marquee) {
//         offset -= 1; // Adjust scroll speed
//         marquee.style.transform = `translateX(${offset}px)`;

//         // Reset seamlessly when half has scrolled
//         if (Math.abs(offset) >= marquee.scrollWidth / 2) {
//           offset = 0;
//         }
//       }
//       requestAnimationFrame(scroll);
//     };

//     scroll();
//   }, []);

//   return (
//     // <div className="overflow-hidden bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 py-8">
//     <div className="overflow-hidden bg-main-bg py-8">
//        <h4 className="text-[36px] text-black text-center pb-3">Our Partners</h4>
//       <div
//         ref={marqueeRef}
//         className="flex items-center gap-8 lg:gap-16 whitespace-nowrap will-change-transform"
//       >
//         {partnersArray.map((partner, index) => (
//           <div
//             key={index}
//             className="
//               flex-shrink-0
//               w-full sm:w-1/2 md:w-1/3 lg:w-1/6
//               flex justify-center items-center
//             "
//           >
//             <Image
//               src={partner.image}
//               alt={`Partner ${index}`}
//               width={120}
//               height={120}
//               className="object-contain max-h-16"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



