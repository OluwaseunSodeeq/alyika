export default function ImpactCard({ impact, index }) {
  const { icon, title, text } = impact;
  const desktopBg =
    +index === 1 || +index === 3
      ? "md:bg-yellow md:text-dark-green"
      : "md:bg-dark-green md:text-main-bg";

  return (
    // Gradient border — MOBILE ONLY
    <div
      className="
        bg-[linear-gradient(154.25deg,#FDCD31_27.36%,#012F25_68.21%)]
        p-[1px]
        rounded-2xl
        md:bg-none md:p-0
      "
    >
      {/* Card */}
      <div
        className={`
          bg-main-bg text-dark-green
          ${desktopBg}
          relative
          md:w-[330px]
          lg:w-[300px]
          2xl:max-w-[350px]
          md:h-[370px]
          2xl:h-[500px]
          rounded-2xl
          py-8
          px-4
          flex
          flex-col
          justify-between
        `}
      >
        {/* Icon */}
        <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px]  rounded-[1998px] bg-dark-green md:bg-main-bg flex items-center justify-center border-2 ">
          <span className="text-2xl md:text-[30px] lg:text-[36px] 2xl:text-[45px] 2xl:pb-3 2xl:pt-1">
            {icon}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-[22px] lg:text-[24px] 2xl:text-[30px] lg:text-nowrap 2xl:text-wrap mt-2">
          {title}
        </h3>

        {/* Text */}
        <p className="text-[18px] 2xl:text-[22px] leading-relaxed font-medium lg:mt-5">
          {text}
        </p>

        {/* Decorative circle */}
        <div className="hidden lg:block z-10 absolute bottom-[-15px] right-[-25px] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-dark-green border-4 border-main-bg" />
      </div>
    </div>
  );
}

// ==============Previous Code ==============
// export default function ImpactCard({ impact, index }) {
//   const { icon, title, text } = impact;

//   return (
//     // <div
//     // className="
//     // bg-[linear-gradient(154.25deg,#FDCD31_27.36%,#012F25_68.21%)]
//     // p-1
//     // md:bg-main-bg
//     // "

//     <div
//       key={index}
//       className={`${
//         +index === 1 || +index === 3
//           ? "bg-yellow text-dark-green"
//           : "bg-dark-green text-main-bg"
//       } relative lg:w-[300px] 2xl:max-w-[350px] rounded-2xl py-8 px-4 flex flex-col justify-between min-h-[230px]`}
//     >
//       <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-main-bg flex items-center justify-center">
//         <span className="text-2xl md:text-[30px] lg:text-[36px]">{icon}</span>
//       </div>

//       <h3 className="font-semibold text-lg md:text-[22px] lg:text-[24px] 2xl:text-[30px] mt-2">
//         {title}
//       </h3>

//       <p className="text-base md:text-[18px] 2xl:text-[22px] leading-relaxed font-medium lg:mt-5">
//         {text}
//       </p>

//       <div className="z-10 absolute bottom-[-15px] right-[-25px] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-dark-green border-4 border-main-bg" />
//     </div>
//   );
// }
