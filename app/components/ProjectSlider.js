import Image from "next/image";

export function ProjectCardSlider({ eachslider }) {
  return (
    <div className="w-full px-4">
      <div className="relative w-full mx-auto rounded-[16px]">
        {eachslider.images.map((img, idx) => (
          <div key={idx} className="w-full pb-5">
            <Image
              src={img}
              alt={eachslider.text}
              width={1200}
              height={500}
              className="w-full h-[250px] md:h-[350px] xl:h-[450px] object-cover rounded-[16px]"
            />
            <p className="text-white text-center text-xl mt-3">
              {/* {eachslider.text} */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export function ProjectSliderContainer() {
//   const slidersDetails = [
//     { id: 1, text: "Project One", images: ["/gdft.png"] },
//     { id: 2, text: "Project Two", images: ["/gds.png"] },
//     { id: 3, text: "Project Three", images: ["/gdc.png"] },
//     { id: 4, text: "Project Four", images: ["/slider1.jpg"] },
//   ];

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     prevArrow: <></>,
//     nextArrow: <></>,

//     appendDots: (dots) => (
//       <>
//         <ul className="slick-dots"></ul>
//         <ul
//           className={`flex justify-center items-center absolute w-[88px] h-[26px]  gap-x-2 rounded-[12px] bottom-[-26px] md:bottom-[-28px] lg:bottom-[-37px] inset-x-0 mx-auto left-0 right-0 cursor-not-allowed `}
//         >
//           {dots.map((dot, index) => (
//             <li
//               key={index}
//               className={`inline-block w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full ${
//                 dot.props.className.includes("slick-active")
//                   ? "bg-[#FFFFFF]"
//                   : "bg-[#9A9EA5]"
//               }`}
//             >
//               {/* {dot} */}
//             </li>
//           ))}
//         </ul>
//       </>
//     ),
//   };
//   return (
//     <div>
//       {slidersDetails.map((eachslider) => (
//         <ProjectCardSlider
//           key={eachslider.id}
//           eachslider={eachslider}
//           settings={settings}
//         />
//       ))}
//     </div>
//   );
// }

// export function ProjectCardSlider({ slidersDetails, settings, Slider }) {

//   return (
//     <div className="w-full xl:px-6 md:px-0">
//       <div className="relative w-full  px-6 lg:px-8  mx-auto my-4 rounded-[16px] ">
//         {
//           <Slider {...settings}>
//             {slidersDetails.map((eachSlider, i) => (
//                const { text, image } = eachSlider;
//               <Image
//                 key={i}
//                 className="w-full h-[240px] md:h-[245px] lg:h-[400px] cursor-grab rounded-[16px]"
//                 src={each}
//                 alt={text || "projects"}
//                 width={800}
//                 height={400}
//               />
//             ))}
//           </Slider>
//         }
//       </div>
//     </div>
//   );
// };
