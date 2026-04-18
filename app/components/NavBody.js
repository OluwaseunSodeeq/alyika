"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import useOpenContext from "../contexts/useOpenContext";
import Image from "next/image";

function CurrentNav({ to, onClick, children }) {
  const pathname = usePathname();
  const isActive = pathname === to;

  return (
    <div className="w-full text-base lg:leading-6 lg:font-normal">
      <Link href={to} onClick={onClick}>
        {children(isActive)}
      </Link>
    </div>
  );
}

function Navbody({ bg, textColor }) {
  const { setOpen } = useOpenContext();

  const closeHandler = () => {
    setOpen(false);
  };
  const navs = [
    "home",
    "about",
    "imapact",
    "gallery",
    "projects",
    "join",
    "support",
    "the stolen breath",
  ];

  return (
    <div
      className="w-[104%] left-1/2 transform -translate-x-1/2 h-screen px-6 absolute top-[-2px] md:top-[18px] z-30 lg:hidden pt-4"
      style={{ backgroundColor: textColor, color: bg }}
    >
      <div onClick={closeHandler} className=" pt-2 pb-3 ">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul className=" flex h-auto flex-col xl:gap-1 items-center justify-start">
        {navs.map((nav, i) => (
          <CurrentNav
            onClick={closeHandler}
            to={`/${nav.replace(/\s+/g, "-")}`}
            key={i}
          >
            {(isActive) => (
              <li
                className={`flex justify-between capitalize items-center pl-3 pr-1 md:pr-9 w-full h-[48px] font-satoshi leading-[32px] rounded-lg transition-all
        ${
          isActive
            ? "bg-[#0994754D]/60 text-main-bg font-bold"
            : "text-navbar-bg font-light hover:text-main-bg hover:bg-[#0994754D]"
        }`}
              >
                <span>
                  {nav} {nav === "join" || nav === "support" ? "US" : ""}
                </span>

                <Image
                  width={30}
                  height={30}
                  src="/minilogo.svg"
                  alt="minilogo"
                  className="object-contain pr-2"
                  quality={100}
                />
              </li>
            )}
          </CurrentNav>
        ))}
      </ul>
    </div>
  );
}

export default Navbody;

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import useOpenContext from "../contexts/useOpenContext";

// function CurrentNav({ to, onClick, children }) {
//   const pathname = usePathname();
//   const isActive = pathname === to;

//   const className = isActive
//     ? "text-blue-text font-bold"
//     : "text-btn-text-color hover:text-blue-text";

//   return (
//     <span className="text-base lg:leading-6 lg:font-normal">
//       <Link href={to} onClick={onClick} className={className}>
//         {children}
//       </Link>
//     </span>
//   );
// }

// function Navbody({ bg, textColor }) {
//   const { setOpen } = useOpenContext();

//   const closeHandler = () => {
//     setOpen(false);
//   };

//   return (
//     <div
//       className="w-[104%] left-1/2 transform -translate-x-1/2 h-screen px-6 absolute top-[20px] md:top-[18px] z-30 lg:hidden"
//       style={{ backgroundColor: bg, color: textColor }}
//     >
//       <ul className=" flex h-auto flex-col xl:gap-1 items-center justify-start">
//         <li className="flex uppercase justify-between items-center pl-3 pr-1 md:pr-9 font-medium w-full h-[48px] border-t-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/home">
//             HOME
//           </CurrentNav>
//           <div onClick={closeHandler} className=" border-2">
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M18 6L6 18M6 6L18 18"
//                 stroke="#333437"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//         </li>

//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-t-2 border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/about">
//             ABOUT
//           </CurrentNav>
//         </li>

//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/impact">
//             IMPACT
//           </CurrentNav>
//         </li>
//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/gallery">
//             GALLERY
//           </CurrentNav>
//         </li>
//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/projects">
//             PROJECTS
//           </CurrentNav>
//         </li>
//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/join">
//             JOIN US
//           </CurrentNav>
//         </li>
//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/contact">
//             CONTACT US
//           </CurrentNav>
//         </li>
//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/support">
//             SUPPORT US
//           </CurrentNav>
//         </li>
//         <li className="flex uppercase items-center pl-6 font-medium w-full h-[48px] border-b-2 border-btn-text-color-400 font-quicksand text-base leading-[32px] text-btn-text-color hover:text-blue-text">
//           <CurrentNav onClick={closeHandler} to="/the-stolen-breath">
//             THE STOLEN BREATH
//           </CurrentNav>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbody;
