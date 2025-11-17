export default function GradientDashedFadeLine() {
  return (
    <div className="bg-[#012f25] px-0 py-6">
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
      {/* OPPOsite direction */}
      {/* <div class="relative w-full h-[3px] bg-[#012f25] overflow-hidden">
        <div
          class="absolute inset-0 
    bg-[repeating-linear-gradient(to_right,#fdcd31_0px,#fdcd31_8px,#012f25_8px,#012f25_16px)]"
        ></div>

        <div
          class="absolute inset-0 
    bg-[linear-gradient(to_right,#012f25_0%,#012f25_20%,rgba(1,47,37,0)_100%)]"
        ></div>
      </div> */}
    </div>
  );
}
