"use client";
import Image from "next/image";

export default function SupportCard({ data, index }) {
  const { title, text, image } = data;
  const bgArray = ["#012F25", "#FDCD31", "#01132F"];

  return (
    <div className="w-full md:h-auto ">
      <div
        className={`
        flex flex-col-reverse gap-0 ${
          index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
        }
        overflow-hidden
      `}
        style={{ backgroundColor: bgArray[index] }}
      >
        {/* TEXT */}
        <div
          className={` w-full md:w-[50%] h-full text-main-bg font-satoshi px-2 md:px-8 ${
            index == 2 ? "py-4" : "py-6"
          } `}
        >
          <h3 className="font-bold 2xl:text-[45px] lg:text-[35px] mb-2 lg:pr-40">
            {title}
          </h3>
          <span className="block h-1 w-20 lg:w-42 bg-main-bg"></span>
          <p className="text-sm 2xl:text-[35px] lg:text-[26px] font-medium mt-8 mb-4">
            {text}
          </p>
          {/* <Button variant={highlight ? "dark" : "primary"}>{btn}</Button> */}
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-[235px] border-none md:w-[50%] md:h-auto">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
