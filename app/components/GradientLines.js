export function LeftGradientDashedFadeLine() {
  return (
    <div className="bg-dark-green px-0 py-6">
      <div class="relative w-full h-[3px] bg-[#012f25] overflow-hidden">
        <div
          class="absolute inset-0 
    bg-[repeating-linear-gradient(to_right,#fdcd31_0px,#fdcd31_8px,#012f25_8px,#012f25_16px)]"
        ></div>

        <div
          class="absolute inset-0 
    bg-[linear-gradient(to_right,rgba(1,47,37,0)_0%,#012f25_80%,#012f25_100%)]"
        ></div>
      </div>
    </div>
  );
}

// RIGHT
export function RightGradientDashedFadeLine(props) {
  const className = props?.className ?? "";

  return (
    <div className={`w-full ${className}`}>
      <div
        // className="w-full h-[3px]  rounded-full"
        className="w-full h-[1.5px]  rounded-full"
        style={{
          background:
            "linear-gradient(90deg, #FDCD31 0%, #F8D24A 20%, #8FBF8F 55%, #012F25 100%)",

          WebkitMaskImage:
            "repeating-linear-gradient(90deg, black 0px 8px, transparent 8px 16px), linear-gradient(to right, black 0%, black 72%, rgba(0,0,0,0) 100%)",
          maskImage:
            "repeating-linear-gradient(90deg, black 0px 8px, transparent 8px 16px), linear-gradient(to right, black 0%, black 72%, rgba(0,0,0,0) 100%)",

          WebkitMaskComposite: "intersect",
          maskComposite: "intersect",

          opacity: 0.95,
        }}
      />
    </div>
    //   return (
    //     <div className={`w-full ${className}`}>
    //       <div
    //         className="w-full h-[6px] md:h-[8px] rounded-full"
    //         style={{
    //           background:
    //             "linear-gradient(90deg, #FDCD31 0%, #F8D24A 20%, #8FBF8F 55%, #012F25 100%)",

    //           WebkitMaskImage:
    //             "repeating-linear-gradient(90deg, black 0px 8px, transparent 8px 16px), linear-gradient(to right, black 0%, black 72%, rgba(0,0,0,0) 100%)",
    //           maskImage:
    //             "repeating-linear-gradient(90deg, black 0px 8px, transparent 8px 16px), linear-gradient(to right, black 0%, black 72%, rgba(0,0,0,0) 100%)",

    //           WebkitMaskComposite: "intersect",
    //           maskComposite: "intersect",

    //           opacity: 0.95,
    //         }}
    //       />
    //     </div>
    //   );
  );
}
// 2
// <div class="w-full h-[2px]">
//   <div
//     class="w-full h-full bg-[linear-gradient(90deg,rgba(253,205,49,1)_0%,rgba(1,47,37,1)_100%)]
//        bg-[length:12px_2px] bg-repeat-x opacity-70"
//   ></div>
// </div>
// 1
// <div className="bg-main-bg px-0 py-6">
//   <div class="relative w-full h-[3px] bg-[#012f25] overflow-hidden">
//     <div
//       class="absolute inset-0
// bg-[repeating-linear-gradient(to_right,#fdcd31_0px,#fdcd31_8px,#ffffff_8px,#012f25_16px)]"
//     ></div>

//     <div
//       class="absolute inset-0
// bg-[linear-gradient(to_right,#012f2ffffff_0%,#ffffff_20%,rgba(1,47,37,0)_100%)]"
//     ></div>
//   </div>
// </div>

/*

export function RightGradientDashedFadeLine() {
  return (
    <div className="bg-main-bg px-0 py-6">
      <div class="relative w-full h-[3px] bg-[#012f25] overflow-hidden">
        <div
          class="absolute inset-0 
    bg-[repeating-linear-gradient(to_right,#fdcd31_0px,#fdcd31_8px,#012f25_8px,#012f25_16px)]"
        ></div>

        <div
          class="absolute inset-0 
    bg-[linear-gradient(to_right,#012f25_0%,#012f25_20%,rgba(1,47,37,0)_100%)]"
        ></div>
      </div>
    </div>
  );
}
*/
