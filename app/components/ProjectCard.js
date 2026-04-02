"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ eachProject }) {
  const router = useRouter();
  const {
    title,
    heading,
    description,
    imgUrl,
    details,
    id,
    projectlink,
    linkText,
  } = eachProject;
  const [openDetails, setOpenDetails] = useState(false);

  const goTo = (id) => {
    router.push(`/projects/${id}`);
  };

  return (
    <div className="relative font-santoshi mt-5 h-auto pb-5 px-5">
      <h4 className="text-[18px] md:text-[24px] xl:text-[32px] 2xl:text-[40px] text-black">
        {title}
      </h4>
      <h2 className="bg-[linear-gradient(90deg,#012F25_10.34%,#FDCD31_52.46%)] bg-clip-text text-transparent text-[25px] md:text-[30px] xl:text-[45px] 2xl:text-[55px] font-bold">
        {heading}
      </h2>
      <div className="xl:w-[90%] text-[18px] md:text-[20px] xl:text-[24px] 2xl:text-[28px] text-black mt-2">
        {description.map((each, index) => (
          <p key={index}>{each}</p>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href={projectlink}
          className="text-dark-green hover:underline mt-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </Link>
      </div>

      <div className="relative mt-5 xl:mt-8">
        <div className="relative w-full xl:w-[800px] z-10">
          <Image
            src={imgUrl}
            alt={title}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto rounded-md md:rounded-[1rem]"
          />

          {/* Arrow Button */}
          <div
            onClick={() => goTo(id)}
            className="absolute bottom-[-20px] right-[10px] md:bottom-[28px]  bg-white border-1 cursor-pointer border-yellow w-[60px] h-[60px] xl:w-14 xl:h-14 rounded-full flex items-center justify-center z-20"
          >
            <Image
              src="/arrow.png"
              alt="arrow"
              width={16}
              height={16}
              className={`transition-transform duration-200 ${
                openDetails ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function ProjectCard({ eachProject }) {
//   const router = useRouter();
//   const {
//     title,
//     heading,
//     description,
//     imgUrl,
//     details,
//     id,
//     projectlink,
//     linkText,
//   } = eachProject;
//   const [openDetails, setOpenDetails] = useState(false);

//   const goTo = (id) => {
//     router.push(`/projects/${id}`);
//   };

//   return (
//     <div className="relative font-santoshi mt-5 h-auto pb-5 px-5">
//       <h4 className="text-[18px] md:text-[24px]  xl:text-[32px] 2xl:text-[40px] text-black">
//         {title}
//       </h4>
//       <h2
//         className=" bg-[linear-gradient(90deg,#012F25_10.34%,#FDCD31_52.46%)] bg-clip-text text-transparent
//         text-[25px] md:text-[30px] xl:text-[45px] 2xl:text-[55px] font-bold"
//       >
//         {heading}
//       </h2>
//       <div className="xl:w-[90%] text-[18px] md:text-[20px] xl:text-[24px] 2xl:text-[28px] text-black mt-2 ">
//         {description.map((each, index) => (
//           <p key={index}>{each}</p>
//         ))}
//       </div>

//       <div className="mt-6">
//         <Link
//           href={projectlink}
//           className="text-dark-green hover:underline mt-4"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {linkText}
//         </Link>
//       </div>

//       <div className="relative mt-5 xl:mt-8">
//         <div className="relative w-full h-72 md:h-96 xl:h-[800px] xl:w-[840px] rounded-[1rem]">
//           <Image
//             src={imgUrl}
//             alt={title}
//             width={800}
//             height={840}
//             className="w-full h-full object-cover rounded-[1rem]"
//           />

//           {/* Arrow Button */}
//           <div
//             onClick={() => goTo(id)}
//             className="absolute bottom-[-28px] right-[-2px] bg-white border-1 cursor-pointer border-yellow w-[60px] h-[60px] xl:w-14 xl:h-14 rounded-full flex items-center justify-center"
//           >
//             <Image
//               src="/arrow.png"
//               alt="arrow"
//               width={16}
//               height={16}
//               className={`transition-transform duration-200 ${
//                 openDetails ? "rotate-90" : "rotate-0"
//               }`}
//             />
//           </div>
//         </div>
//         <div>
//           {openDetails && (
//             <p className="text-[18px] md:text-[20px] xl:text-[24px] 2xl:text-[28px] text-black mt-5">
//               {details}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
