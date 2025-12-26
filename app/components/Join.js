"use client";
import Image from "next/image";
import { SquareButton, SquareButtonBigSize } from "./SquareButton";

const items = [
  {
    title: "Become a Dreamer",
    subtitle: "(Youth Membership)",
    description:
      "Join our youth community, connect with like-minded peers, and access opportunities to learn, grow and lead.",
    image: "/join-5.jpg",
    bg: "#012F25",
    reverse: false,
  },
  {
    title: "Volunteer",
    subtitle: "",
    description:
      "Share your skills whether in teaching, design, coding or writing and help place youths where they make the most impact.",
    image: "/join-2.jpg",
    bg: "#fdcd31",
    reverse: true,
  },
  {
    title: "Partner",
    subtitle: "",
    description:
      "Collaborate with us to expand our programs and create sustainable solutions that benefit young people in our region.",
    image: "/join-3.jpg",
    bg: "#012F25",
    reverse: false,
  },
  {
    title: "Start a Local Climate Club",
    subtitle: "",
    description:
      "Launch a club in your school or community and empower youths to take action on climate issues.",
    image: "/join-4.jpg",
    bg: "#fdcd31",
    reverse: true,
  },
];

export default function Join() {
  return (
    <section className="w-full md:px-4 pt-10 pb-15 md:pt-16 md:pb-18 font-satoshi">
      {/* Header */}
      <div className="text-center mb-14">
        <SquareButton btnBg="#fdcd31" textColor="#012f25">
          Join the Movement
        </SquareButton>
        <h2 className="text-[24px] md:text-[24px] lg:text-[30px] 2xl:text-[38px] font-semibold text-dark-green mt-4">
          Here at Climeset,
        </h2>
        <p className="text-black mt-2 w-[260px] md:w-[320px] lg:w-[420px] mx-auto 2xl:text-[28px] md:text-[20px] lg:text-[24px] text-[18px] text-center">
          Whether you’re 14 or 60, there’s a way to plug in.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            style={{ backgroundColor: item.bg }}
            className={`rounded-2xl overflow-hidden ${
              index == 1 || index == 2 ? "md:py-7" : ""
            } `}
          >
            <div
              className={`flex flex-col justify-center items-center  lg:gap-x-6 ${
                item.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div
                style={{ backgroundColor: item.bg }}
                className="hidden md:block w-[380px] md:w-1/2 h-60 md:h-[260px] lg:h-[330px]
             rounded-[10px] border-[5px] border-main-bg overflow-hidden"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-fullmd:w-1/2 lg:w-[510px] 2xl:w-[610px]  py-6 pl-4 md:p-8 flex flex-col justify-center text-white">
                <h3 className=" lg:w-[380px] text-[28px] md:text-[30px] lg:text-[35px] 2xl:text-[45px] font-bold">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <h3 className=" lg:w-[380px] text-[28px] md:text-[30px] lg:text-[35px] 2xl:text-[45px] font-bold">
                    {item.subtitle}
                  </h3>
                )}
                <p className="w-full pr-2 lg:w-[500px] 2xl:w-[600px] mt-3 md:mt-5 lg:mt-7 text-[18px] md:text-[20px] lg:text-[25px] 2xl:[30px] leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-10">
                  <SquareButtonBigSize
                    btnBg={item.bg === "#012F25" ? "#FDCD31" : "#012F25"}
                    textColor={item.bg === "#012F25" ? "#012F25" : "#FDCD31"}
                  >
                    Join us
                  </SquareButtonBigSize>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
