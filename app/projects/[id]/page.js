import Image from "next/image";
import Wrapper from "../../components/Wrapper";

const PROJECTS = {
  gdft: {
    tag: "GDFT",
    title: "Green Dreamers for Tech",
    currentParagraphs: [
      "We don’t just talk climate solutions we build them. With simple tools and local ideas, we teach students how to create things like flood sensors, solar-powered lights, and recycling tech. Our goal? Equip 10,000 students by 2028.",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/gdft.png",
  },

  gds: {
    tag: "GDS",
    title: "Green Dreams Series",
    currentParagraphs: [
      "We don’t just talk climate solutions we build them. With simple tools and local ideas, we teach students how to create things like flood sensors, solar-powered lights, and recycling tech. Our goal? Equip 10,000 students by 2028.",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/gds.png",
  },

  gdc: {
    tag: "GDC",
    title: "Green Dreams Campaign",
    currentParagraphs: [
      "We don’t just talk climate solutions we build them. With simple tools and local ideas, we teach students how to create things like flood sensors, solar-powered lights, and recycling tech. Our goal? Equip 10,000 students by 2028.",

      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/gdc1.png",
  },
};

export default function ProjectDetailsPage({ params }) {
  const { id } = params;
  const project = PROJECTS[id];
  const { tag, title, currentParagraphs, image } = project || {};

  if (!project) {
    return <p className="p-10">Project not found</p>;
  }

  return (
    <Wrapper bg={"#ffffff"}>
      <section className="w-full md:px-[1.5rem] lg:px-[2.5rem]">
        <div className=" px-4 md:px-8 pb-8 md:py-8">
          {/* IMAGE */}
          <div className="relative w-full h-[340px] sm:h-[320px] md:h-[420px] md:rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* CONTENT */}
          <div className="mt-6 font-satoshi px-4">
            <h2 className="uppercase text-[18px] lg:text-[32px] 2xl:text-[40px] font-semibold text-black">
              {tag}
            </h2>

            <h1 className="lg:text-[45px] 2xl:text-[55px] text-[26px] md:text-[32px] font-bold bg-[linear-gradient(90deg,#012F25_10.34%,#FDCD31_52.46%)] bg-clip-text text-transparent mt-4">
              {title}
            </h1>

            <div className="flex flex-col ">
              {currentParagraphs.map((para, index) => (
                <div
                  key={index}
                  className="text-black lg:text-[24px] 2xl:text-[30px] sm:text-[16px] md:text-[18px] mt-4 whitespace-pre-line leading-relaxed"
                >
                  {para}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
