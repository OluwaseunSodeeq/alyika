// import { Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import { MobileLogo } from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-dark-green text-main-bg px-6 md:px-16 lg:px-24 py-12">
      {/* Top message row */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-8">
        <div className=" flex gap-x-6 p-2">
          <div className="w-[3rem] h-[3.2rem] relative">
            <Image
              fill
              src="/white-logo.png"
              alt="white-logo"
              className="object-contain"
            />
          </div>
          <p className="text-center md:text-left text-xl md:text-base xl:w-[22.2rem]">
            We’re only one call away. Literally! And just a few emails away too.
          </p>
        </div>
        <div className="hidden xl:block mr-7">
          <Button btnBg="#fdcd31" textColor="#012f25">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Middle section */}
      <div className="flex flex-col justify-center gap-5 md:gap-0 md:flex-row md:justify-between xl:mr-[4rem] mt-5 md:mt-10">
        {/* Newsletter */}
        <div className="md:col-span-2 ">
          <h3 className="font-semibold text-xl mb-3 w-[10.2rem] ">
            Subscribe to our newsletter
          </h3>
          <div className="w-[15rem] md:w-[20rem]  xl:w-[25.6rem] flex mt-7 border-b border-t rounded-sm border-white/40 items-center">
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent outline-none py-2 pl-2 text-sm flex-1 placeholder:text-white/60"
            />
            <button className="cursor-pointer bg-yellow text-black p-2 rounded-sm hover:bg-yellow">
              →
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="mt-10 md:mt-0">
          <ul className="text-sm flex gap-7 md:gap-y-5 md:flex-col">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Impact</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-7 md:gap-y-5 md:flex-col text-sm">
            <li>Our Story</li>
            <li>Join Us</li>
            <li>Project Gallery</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-7 md:gap-y-5 md:flex-col text-sm">
            <li>Support Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom section for Tablet and Desktop */}
      <div className=" hidden mt-30 mb-5 md:flex flex-col md:flex-row justify-between items-center text-sm text-white/70 gap-6">
        <p>Privacy Policy</p>
        <div className="flex gap-12">
          <p>+234 810 5810 398 </p>
          <p> projectclimeset@gmail.com</p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 cursor-pointer text-white fill-white stroke-white stroke-[2]" />
            <Twitter className="w-5 h-5 cursor-pointer text-white fill-white stroke-white stroke-[2]" />
            <Instagram className="w-5 h-5 cursor-pointer text-white stroke-white stroke-[2]" />
          </div>
        </div>
      </div>

      {/* Bottom section for Mobile */}
      <div className="flex mt-10 md:hidden flex-col flex-wrap justify-between text-sm text-white/70 gap-6">
        <div className="flex justify-between items-end">
          {/* <div className="w-[164px] h-70"> */}
          <div className="">
            <MobileLogo />
          </div>
          <div className="flex space-x-2 mb-3">
            <Facebook className="w-5 h-5 cursor-pointer text-white fill-white stroke-white stroke-[2]" />
            <Twitter className="w-5 h-5 cursor-pointer text-white fill-white stroke-white stroke-[2]" />
            <Instagram className="w-5 h-5 cursor-pointer text-white stroke-white stroke-[2]" />
          </div>
        </div>

        <div className="flex justify-between">
          <p>+234 810 5810 398 </p>
          <p> projectclimeset@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}
