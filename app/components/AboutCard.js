import Image from "next/image";

export default function AboutCard({ cardContent, index }) {
  const { img, text, alt, heading } = cardContent;
  return (
    <div className="">
      <div className="relative font-satoshi w-full h-72 md:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-md">
        <Image
          src={img}
          alt={alt}
          width={1024}
          height={400}
          className="w-full h-auto"
        />

        {/* <div
        className={`absolute text-dark-green xl:w-[350] 2xl:w-[400px] bottom-6  bg-white/90 backdrop-blur py-8 rounded-xl shadow ${
          index == 0 || 2 ? "right-[5rem]" : "left-[5rem]"
        }`} */}
        <div
          className={`absolute text-dark-green xl:w-[350px] 2xl:w-[400px] bottom-6  bg-white/90 backdrop-blur py-8 rounded-xl shadow ${
            index !== 1 ? "right-[5rem]" : "left-[5rem]"
          }`}
        >
          {/* <p className="xl:w-[280px]  xl:text-[22px] 2xl:text-[25px] leading-relaxed italic border-2 pl-[43px]"> */}
          <p className="xl:w-[330px]  xl:text-[20px] 2xl:text-[25px] italic pl-[53px]">
            {text}
          </p>
          {/* <h2
          className={`xl:mt-6 border-l-5  ml-7 pl-3 rounded-t-[16px] ${
            index == 0 ? "w-[10rem]" : "w-[8.5rem]"
          }  pr-0 font-bold ${
            index == 0 || 2 ? "border-l-dark-green" : "border-l-yellow"
          }`}
        > */}
          <h2
            className={`xl:text-[20px] xl:mt-6 border-l-5  ml-7 xl:pl-5 rounded-t-[16px] ${
              index == 0 ? "w-[13.5rem]" : "w-[10.5rem]"
            }  pr-0 font-bold ${
              index !== 1 ? "border-l-dark-green" : "border-l-yellow"
            }`}
          >
            {heading}
          </h2>
        </div>
      </div>
    </div>
  );
}
