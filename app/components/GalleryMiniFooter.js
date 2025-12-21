"use client";
import Link from "next/link";
import Button from "./Button";

export default function GalleryMiniFooter() {
  const btnBg = "#012f25";
  const textColor = "#ffffff";
  return (
    <div className=" w-full 2xl:max-w-[1400px] lg:px-[2.7rem] bg-yellow  mb-10">
      <div className=" flex gap-4 lg:gap-6  items-center justify-center py-4 px-2 ">
        <p className="hidden lg:block font-satoshi font-bold lg:text-[24px] text-black">
          We update this regularly because our Dreamers never stop dreaming.
        </p>
        <div className="font-montserrat flex font-medium gap-3 flex-col-reverse md:flex-row justify-center items-center">
          <Button btnBg={btnBg} textColor={textColor}>
            Submit a story or photo
          </Button>
          <Link
            href="/projects"
            className="underline text-dark-green text-[14px] cursor-pointer "
          >
            Support a Project
          </Link>
        </div>
      </div>
    </div>
  );
}
