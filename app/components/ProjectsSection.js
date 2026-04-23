import Button from "./Button";
import { RightGradientDashedFadeLine } from "./GradientLines";
import ProjectCard from "./ProjectCard";
import { ProjectSliderContainer } from "./ProjectSliderContainer";
import { PROJECTS } from "../../lib/projectsData";

export default function ProjectsSection() {
  // const projectsDetails = [
  //   {
  //     id: "gdft",
  //     title: "GDFT",
  //     heading: "Green Dreamers for Tech",
  //     description: [
  //       "We use technology to educate and innovate, guiding young people to apply existing tools in protecting and connecting to the environment, while building solutions ourselves. We’ve worked with 5 schools since we started our tech-focused outreaches.",
  //     ],
  //     imgUrl: "/projects/project1b.jpg",

  //     projectlink:
  //       "https://drive.google.com/drive/folders/11zjpNjerxMTRR6u9ZhjPbspn26bmzjNW?usp=drive_link",
  //     linkText: "See more about GDFT",
  //     linkText2: "",
  //   },
  //   {
  //     id: "gds",
  //     title: "GDS",
  //     heading: "Green Dreams Series",
  //     description: [
  //       "We tell stories of climate and environmental resilience, drawn from real cases and communities to amplify voices and create awareness about the lived experiences of people affected by climate and environmental injustice.",
  //       'Our first story in the series, The Stolen Breath, was written by Abeedah Alabi. "The Stolen Breath" is a 99-page novel centered around climate education and resilience that chronicles the struggle of 11-year-old Nana to save her flood-threatened school in Itowolo.',
  //       "To provide the story the happy ending it needs, we are raising ₦1,500,000 to fund eco-resilient classroom renovation projects at Community Primary School, Itowolo.",
  //     ],
  //     imgUrl: "/bookbig.png",
  //     projectlink: "https://selar.com/thestolenbreath",
  //     linkText: "Get the e-book ",
  //     linkText2: "Follow the fundraising drive updates here ",
  //   },
  //   {
  //     id: "gdc",
  //     title: "GDC",
  //     heading: "Green Dreams Community",
  //     description: [
  //       "We run a sustainability pop culture community where we team up with members to get them fired up about protecting their communities.",
  //     ],
  //     imgUrl: "/projects/project3.png",

  //     projectlink:
  //       "https://docs.google.com/forms/d/e/1FAIpQLScV-2v7Cg6-IaAIgBjG8-qbw6CP3ch7q5D-bf6GJKdT8z4IkA/viewform?usp=header",
  //     linkText: "Join our community",
  //     linkText2: "",
  //   },
  // ];
  const projectsDetails = Object.values(PROJECTS);
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
