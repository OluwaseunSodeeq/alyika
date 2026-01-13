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
        "We don’t just talk climate solutions, we build them. We are also using simple tools and local ideas to teach students how to create projects like flood sensors, solar-powered lights, and recycling tech.",
      imgUrl: "/gdft.png",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "gds",
      title: "GDS",
      heading: "Green Dreams Series",
      description:
        "Climate change feels different when it’s happening on your street. That’s why we tell stories that connect. Real ones. Fictional ones. All rooted in our realities. We make audiobooks, comics, and short films in English, Yoruba, Hausa, and Igbo.",
      imgUrl: "/gds.png",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: "gdc",
      title: "GDC",
      heading: "Green Dreams Campaign",
      description:
        "We team up with content creators, run youth-led campaigns, and speak where young people listen Instagram, TikTok, WhatsApp. The goal is simple: turn awareness into action. ",
      imgUrl: "/gdc1.png",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
          <span className="italic text-dark-green cursor-pointer underline font-montserrat text-[14px] font-medium">
            See our Projects
          </span>
        </div>
      </div>
    </div>
  );
}
