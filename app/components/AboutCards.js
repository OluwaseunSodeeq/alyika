import AboutCard from "./AboutCard";

export default function AboutCards() {
  const cardsContents = [
    {
      img: "/about-card1.jpg",
      heading: "Confidence, creativity, and climate leadership.",
      text: "Most youth don't practical climate education.",
      alt: "Youth showing creativity and leadership",
      btnText: "We help turn that info",
    },
    {
      img: "/about-card2.jpg",
      heading: "Hands-on experience with real tools.",
      text: "Tech is out of reach for kids in low-income schools.",
      alt: "Student using real tools",
      btnText: "We help turn that info",
    },
    {
      img: "/about-card3.jpg",
      heading: "Stories that change minds.",
      text: "Some many feel helpless about the future.",
      alt: "Student creating art",
      btnText: "We help turn that info",
    },
  ];

  return (
    <div>
      <div className="pb-4 md:hidden">
        <h2 className="w-[250px] ml-4 font-montserrat font-bold text-[26px] text-black">
          What We’re Up Against
        </h2>
        <p className="w-[300px] ml-4">
          Most youth don’t get practical climate education.
        </p>
      </div>
      <div className="flex flex-col gap-10 px-4 xl:px-0 pb-[3rem]">
        {cardsContents.map((cardContent, index) => (
          <AboutCard key={index} index={index} cardContent={cardContent} />
        ))}
      </div>
    </div>
  );
}
