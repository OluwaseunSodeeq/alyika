"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DropDown({ options }) {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 bg-navbar-bg text-green-800 font-medium px-4 py-2 rounded-full shadow-sm"
      >
        {selectedOption}
        <Image
          src="/dropdown-icon.png"
          width={16}
          height={16}
          alt="dropdown icon"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          className="
            absolute
            top-full
            left-0
            mt-2
            w-44
            bg-navbar-bg
            border
            border-gray-200
            rounded-xl
            shadow-xl
            py-2
            z-50
          "
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 hover:text-dark-green active:text-dark-green cursor-pointer"
            >
              <Link href={`/${option.toLowerCase()}`}>{option}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
