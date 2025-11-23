import AboutCard from "./AboutCard";

export default function AboutCards() {
  const cardsContents = [
    {
      img: "/about-card1.jpg",
      heading: "Confidence, creativity, and climate leadership.",
      text: "Most youth don't practical climate education.",
      alt: "Youth showing creativity and leadership",
    },
    {
      img: "/about-card2.jpg",
      heading: "Hands-on experience with real tools.",
      text: "Tech is out of reach for kids in low-income schools.",
      alt: "Student using real tools",
    },
    {
      img: "/about-card3.jpg",
      heading: "Stories that change minds.",
      text: "Some many feel helpless about the future.",
      alt: "Student creating art",
    },
  ];

  return (
    <div className="flex flex-col gap-10  xl:pb-[3rem]">
      {cardsContents.map((cardContent, index) => (
        <AboutCard key={index} index={index} cardContent={cardContent} />
      ))}
    </div>
  );
}
