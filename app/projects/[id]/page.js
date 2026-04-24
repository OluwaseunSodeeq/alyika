import Image from "next/image";
import Wrapper from "../../components/Wrapper";
import Link from "next/link";
import { PROJECTS } from "../../../lib/projectsData";

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = PROJECTS[id];
  const { tag, title, description, image, projectlink, linkText, linkText2 } =
    project || {};

  if (!project) {
    return <p className="p-10">Project not found</p>;
  }

  if (!project) {
    return <p className="p-10">Project not found</p>;
  }

  return (
    <Wrapper bg={"#ffffff"}>
      <section className="w-full md:px-[1.5rem] lg:px-[2.5rem]">
        <div className=" px-4 md:px-8 pb-8 md:py-8">
          {/* IMAGE */}
          <div className="relative w-full xl:w-[840px]">
            <Image
              src={image}
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto rounded-[1rem]"
            />

            {/* Arrow Button */}
            <Link href="/projects">
              <div className="absolute bottom-[28px] right-[10px]  bg-white border-1 cursor-pointer border-yellow w-[60px] h-[60px] xl:w-14 xl:h-14 rounded-full flex items-center justify-center">
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  width={16}
                  height={16}
                  className={`transition-transform duration-200 rotate-180`}
                />
              </div>
            </Link>
          </div>
          {/* <div className="relative w-auto h-[340px] sm:h-[320px] md:h-[420px] lg:h-auto md:rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div> */}

          {/* CONTENT */}
          <div className="mt-6 font-satoshi px-4">
            <h2 className="uppercase text-[18px] lg:text-[32px] 2xl:text-[40px] font-semibold text-black">
              {tag}
            </h2>

            <h1 className="lg:text-[45px] 2xl:text-[55px] text-[26px] md:text-[32px] font-bold bg-[linear-gradient(90deg,#012F25_10.34%,#FDCD31_52.46%)] bg-clip-text text-transparent mt-4">
              {title}
            </h1>

            <div className="flex flex-col ">
              {description.map((para, index) => (
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
