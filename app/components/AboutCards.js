import AboutCard from "./AboutCard";

export default function AboutCards() {
  const cardsContents = [
    {
      img: "/about-card1.jpg",
      text: "Confidence, creativity, and climate leadership.",
      alt: "Youth showing creativity and leadership",
    },
    {
      img: "/about-card2.jpg",
      text: "Hands-on experience with real tools.",
      alt: "Student using real tools",
    },
    {
      img: "/about-card3.jpg",
      text: "Stories that change minds.",
      alt: "Student creating art",
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      {cardsContents.map((cardContent, index) => (
        <AboutCard key={index} cardContent={cardContent} />
      ))}
    </div>
  );
}
