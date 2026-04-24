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
  );
}
