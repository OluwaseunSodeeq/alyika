import Button from "./Button";
import SupportCard from "./SupportCard";
const cardsData = [
  {
    title: "1. Donate in-kind:",
    text: "Got books, tech tools, or art supplies? We’ll put them in the hands of the young people who need them.",
    highlight: true,
    image: "/support-card1.png",
  },
  {
    title: "2. Sponsor a Project:",
    text: "Choose a current Climeset project (like a tech outreach or storytelling series) and fund a school or neighborhood effort.",
    highlight: true,
    image: "/support-card2.png",
  },
  {
    title: "3. Buy Our Book (Coming Soon!):",
    text: "Order 10 copies for 10 school libraries and we’ll send you a report showing how the books were used and the stories that came from them.",
    highlight: false,
    image: "/support-card3.png",
  },
];

export default function SupportSection() {
  return (
    <main className="bg-main-bg h-auto mb-7 lg:mb-10 ">
      <section className="max-w-[1200px] mx-auto px-4 py-6">
        {/* INTRO TEXT */}
        <p className="text-center text-[20px] md:text-[30px] font-bold text-black lg:px-70 mb-5">
          We don’t just need donations, we need partners in hope:
        </p>

        {/* Cards */}
        <div className="flex flex-col gap-0 ">
          {cardsData.map((card, index) => (
            <SupportCard data={card} key={index} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
