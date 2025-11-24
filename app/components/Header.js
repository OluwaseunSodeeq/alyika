"use client";
import React from "react";
import Nav from "./Nav";
import { MobileLogo, Logo } from "./Logo";
import Wrapper from "./Wrapper";
import DropDown from "./DropDown";
import Button from "./Button";
import useOpenContext from "../contexts/useOpenContext";
import Hamburger from "./Hamburger";
import Navbody from "./NavBody";

export default function Header() {
  const { open } = useOpenContext();
  const { mobile } = useOpenContext();

  const navs = [
    { name: "Home", href: "/home", activesStatus: false },
    { name: "About", href: "/about", activesStatus: false },
    { name: "Impact", href: "/impact", activesStatus: false },
  ];
  const dropDown1 = [
    "Project",
    "Features",
    "Solutions",
    "Case Studies",
    "Resources",
    "Pricing",
  ];

  const dropDown2 = [
    "Gallery",
    "Blog",
    "Events",
    "Newsletter",
    "Help Center",
    "Guides",
    "Webinars",
  ];

  const bg = "#ffffff";
  const btnBg = "#012f25";

  return (
    <div className={`w-full ${mobile ? "shadow-md" : ""}`}>
      <Wrapper bg={mobile ? bg : "#012F25"}>
        <div>
          <div className="flex justify-between items-center px-[1rem] md:px-[3rem] xl:px-[5rem] py-3.5  2xl:px-[7rem]">
            <div className="block xl:hidden w-[115px] h-[49px] relative">
              <MobileLogo />
            </div>
            <Nav nav={navs} />
            <div className="hidden xl:block xl:mr-[1.5rem]">
              <Logo />
            </div>

            <div className="hidden  xl:flex gap-[3rem]">
              <DropDown options={dropDown1} />
              <DropDown options={dropDown2} />
              <Button btnBg={btnBg} textColor={bg}>
                Contact Us
              </Button>
            </div>
            <div className=" xl:hidden">
              <Hamburger />
            </div>
          </div>

          <div
            className={`fixed top-0 right-0 h-screen w-[95%]  bg-white shadow-lg z-20 transform duration-500 ease-in-out ${
              open ? "translate-x-0" : "translate-x-[200%] "
            }`}
          >
            <Navbody bg="#ffffff" textColor="#012f25" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
