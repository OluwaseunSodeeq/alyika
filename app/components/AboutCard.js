import Image from "next/image";
import ButtonText from "./ButtonText";

export default function AboutCard({ cardContent, index }) {
  const { img, text, alt, heading, btnText } = cardContent;
  return (
    <div className="">
      <div className="relative font-satoshi w-full h-72 md:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-md">
        <Image
          src={img}
          alt={alt}
          width={1024}
          height={400}
          className="w-full h-[350px] md:h-auto"
        />

        <div
          className={`h-[140px] md:h-auto absolute bottom-[-3px]  text-dark-green w-full md:w-[350px] 2xl:w-[400px] md:bottom-6 bg-white/5 md:bg-white/90 backdrop-blur py-8 rounded-xl shadow ${
            index !== 1
              ? "md:right-[2rem] xl:right-[5rem]"
              : "md:left-[2rem] xl:left-[5rem]"
          }`}
        >
          <div className="md:hidden absolute top-[20px]  left-[20px] md:left-[50px]">
            <ButtonText text={btnText} />
          </div>
          <p className="hidden md:block xl:w-[330px]  xl:text-[20px] 2xl:text-[25px] italic pl-[53px] md:pr-3 xl:pr-0">
            {text}
          </p>

          <h2
            className={`absolute ${
              index !== 2 ? "bottom-3" : "bottom-8"
            } md:static md:bottom-auto  xl:text-[20px] w-[15rem] xl:mt-6 md:border-l-5 ml-5  md:ml-7 md:pl-6 xl:pl-5 md:rounded-t-[16px] text-main-bg md:text-black ${
              index == 0
                ? "md:w-[12.5rem] xl:w-[13.5rem]"
                : "md:w-[12.5rem] xl:w-[10.5rem]"
            }  pr-0 font-bold ${
              index !== 1 ? "md:border-l-dark-green" : "md:border-l-yellow"
            }`}
          >
            {heading}
          </h2>
        </div>
      </div>
    </div>
  );
}
