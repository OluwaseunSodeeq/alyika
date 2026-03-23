import Image from "next/image";
import Wrapper from "../../components/Wrapper";
import Link from "next/link";

const PROJECTS = {
  gdft: {
    tag: "GDFT",
    title: "Green Dreamers for Tech",
    currentParagraphs: [
      "We use technology to educate and innovate, guiding young people to apply existing tools in protecting and connecting to the environment, while building solutions ourselves. We’ve worked with 5 schools since we started our tech-focused outreaches.",
      "We don’t just talk climate solutions we build them. With simple tools and local ideas, we teach students how to create things like flood sensors, solar-powered lights, and recycling tech. Our goal? Equip 10,000 students by 2028.",
    ],
    image: "/gdft.png",
    projectlink:
      "https://drive.google.com/drive/folders/11zjpNjerxMTRR6u9ZhjPbspn26bmzjNW?usp=drive_link",
    linkText: "See more about GDFT",
  },

  gds: {
    tag: "GDS",
    title: "Green Dreams Series",
    currentParagraphs: [
      "We tell stories of climate and environmental resilience, drawn from real cases and communities to amplify voices and create awareness about the lived experiences of people affected by climate and environmental injustice.",
      "We don’t just talk climate solutions we build them. With simple tools and local ideas, we teach students how to create things like flood sensors, solar-powered lights, and recycling tech. Our goal? Equip 10,000 students by 2028.",
    ],
    image: "/gds.png",
    projectlink: "https://selar.com/thestolenbreath",
    linkText: "Get the e-book ",
  },

  gdc: {
    tag: "GDC",
    title: "Green Dreams Campaign",
    currentParagraphs: [
      "We don’t just talk climate solutions we build them. With simple tools and local ideas, we teach students how to create things like flood sensors, solar-powered lights, and recycling tech. Our goal? Equip 10,000 students by 2028.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    image: "/gdc1.png",
    projectlink:
      "https://docs.google.com/forms/d/e/1FAIpQLScV-2v7Cg6-IaAIgBjG8-qbw6CP3ch7q5D-bf6GJKdT8z4IkA/viewform?usp=header",
    linkText: "Join our community",
  },
};

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = PROJECTS[id];
  console.log(id);
  const { tag, title, currentParagraphs, image, projectlink, linkText } =
    project || {};

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
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
