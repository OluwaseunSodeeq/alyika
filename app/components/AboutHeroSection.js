import Image from "next/image";
import ButtonText from "./ButtonText";
import { RightGradientDashedFadeLine } from "./GradientLines";

export default function AboutHeroSection() {
  return (
    <div className="w-full flex flex-col gap-16 px-4 lg:px-0 py-8.5">
      <div className="w-full bg-white overflow-hidden ">
        <div className="relative w-full h-72 md:h-[420px] xl:h-[650px] 2xl:h-[860px]">
          <Image
            src="/aboutheropic.jpg"
            alt="Team working"
            fill
            priority
            placeholder="empty"
            className="object-cover w-full h-full rounded-md md:rounded-3xl 2xl:rounded-[40px]"
          />
          <div className="absolute bottom-[40px] md:bottom-[70px] left-[10px] md:left-[50px]">
            <ButtonText text="Discover Our Roots" />
          </div>
        </div>

        <div className="hidden relative mt-5 py-2 md:flex justify-center items-center gap-9">
          <div className="h-full relative text-3xl font-semibold flex items-center justify-center mt-2 ml-2 xl:ml-2.5">
            <span className="absolute top-0 w-3 h-3 bg-dark-green"></span>
            <div className="md:h-[265px] xl:h-[290px] w-[1px] text-center bg-gray-300"></div>
            <span className="absolute bottom-0  w-3 h-3 bg-yellow"></span>
          </div>

          <div className="font-satoshi">
            <h1 className="font-bold xl:text-[50px] 2xl:text-[55px]">
              Our Story
            </h1>
            <div className=" mt-5 font-normal  xl:text-[22px] 2xl:text-[25px] leading-relaxed">
              <p className="mt-3.5">
                It started with rain. The kind that floods roads, ruins
                mornings, and almost made one of us miss an exam. That day,
                Abeedah (our founder) realized climate change wasn’t a far-off
                issue. It was here, and it was personal.{" "}
              </p>
              <p className="mt-3.5">
                After a STEM training in 2019, she saw that technology is
                simple, affordable tools could actually help. But none of us had
                access. That’s why we started Climeset. No fancy offices. Just a
                small team and a lot of hope.
              </p>
              <p className="mt-3.5">
                In 2022, we ran our first school outreach. We taught students
                about sensors, waste, and climate solutions. Since then, we’ve
                been building, failing, learning, and growing.
              </p>
            </div>
          </div>
        </div>
        <div className=" md:hidden mt-[3rem]">
          <RightGradientDashedFadeLine />
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10 md:px-3 xl:px-0 xl:pl-10 xl:pb-[3rem]">
          <div>
            <h3 className="text-gradient md:hidden text-xl mb-3 font-semibold">
              Our Mission
            </h3>
            <h3 className="hidden md:block text-xl font-semibold text-dark-green mb-3  xl:text-[32px] 2xl:text-[40px]">
              Our Mission
            </h3>
            <p className=" xl:text-[22px] 2xl:text-[25px] leading-relaxed">
              To help young Nigerians especially those in underserved areas
              solve climate challenges using tech, community, and stories that
              sound like us.
            </p>
          </div>

          <div>
            <h3 className="text-gradient md:hidden text-xl mb-3 font-semibold">
              Our Vision
            </h3>
            <h3 className="hidden md:block xl:text-2xl font-semibold text-yellow mb-3 xl:text-[32px] 2xl:text-[40px]">
              Our Vision
            </h3>
            <p className=" xl:text-[22px] 2xl:text-[25px] leading-relaxed">
              A Nigeria where young people lead the way in solving the biggest
              challenges of our time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
