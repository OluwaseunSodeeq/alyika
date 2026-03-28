import Button from "./Button";
import { RightGradientDashedFadeLine } from "./GradientLines";
import ProjectCard from "./ProjectCard";
import { ProjectSliderContainer } from "./ProjectSliderContainer";

export default function ProjectsSection() {
  const projectsDetails = [
    {
      id: "gdft",
      title: "GDFT",
      heading: "Green Dreamers for Tech",
      description:
        "We use technology to educate and innovate, guiding young people to apply existing tools in protecting and connecting to the environment, while building solutions ourselves. We’ve worked with 5 schools since we started our tech-focused outreaches.",
      imgUrl: "/gdft.png",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      projectlink:
        "https://drive.google.com/drive/folders/11zjpNjerxMTRR6u9ZhjPbspn26bmzjNW?usp=drive_link",
      linkText: "See more about GDFT",
    },
    {
      id: "gds",
      title: "GDS",
      heading: "Green Dreams Series",
      description:
        "We tell stories of climate and environmental resilience, drawn from real cases and communities to amplify voices and create awareness about the lived experiences of people affected by climate and environmental injustice.",
      imgUrl: "/gds.png",
      details:
        "Our first story in the series, The Stolen Breath, was written by Abeedah Alabi. <br/> The Stolen Breath is a 99-page novel centered around climate education and resilience that chronicles the struggle of 11-year-old Nana to save her flood-threatened school in Itowolo. Get a copy of the e-book using the link below.",
      projectlink: "https://selar.com/thestolenbreath",
      linkText: "Get the e-book ",
    },
    {
      id: "gdc",
      title: "GDC",
      heading: "Green Dreams Community",
      description:
        "We run a sustainability pop culture community where we team up with members to get them fired up about protecting their communities. Join us using the arrow below.",
      imgUrl: "/gdc1.png",
      details: "Lorem ipsum dolor",
      projectlink:
        "https://docs.google.com/forms/d/e/1FAIpQLScV-2v7Cg6-IaAIgBjG8-qbw6CP3ch7q5D-bf6GJKdT8z4IkA/viewform?usp=header",
      linkText: "Join our community",
    },
  ];
  return (
    <div className=" pb-15">
      <div className="flex flex-col gap-y-3.5 pb-5">
        {projectsDetails.map((eachProject, index) => {
          return <ProjectCard key={index} eachProject={eachProject} />;
        })}
      </div>
      <div className=" mt-[2rem] pb-10 xl:pb-0 relative">
        <RightGradientDashedFadeLine />
      </div>
      <ProjectSliderContainer />
      <div className="font-satoshi xl:mt-10 px-[1.5rem]">
        <h2 className="font-bold text-black  md:text-[40px] xl:text-[50px] 2xl:text-[60px]">
          AIyika by Climeset{" "}
        </h2>
        <p className=" md:text-[24px] xl:text-[26px] 2xl:text-[30px] text-black mt-3 xl:pr-[10rem]">
          Our biggest dream yet: an AI-powered app that gives everyday people
          from students to teachers to traders access to local climate data,
          guides, and project templates to take action right where they live.
        </p>
        <div className="md:w-[15rem] mt-[65px] flex items-center justify-start gap-x-4 md:gap-x-2">
          <Button btnBg="#012f25" textColor="#ffffff">
            About Us
          </Button>
          {/* <span className="italic text-dark-green cursor-pointer underline font-montserrat text-[14px] font-medium">
            See our Projects
          </span> */}
        </div>
      </div>
    </div>
  );
}
