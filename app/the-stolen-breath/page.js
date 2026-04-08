// import StatsSection from "../components/BookHerosection";
import BookHerosection from "../components/BookHerosection";
import Wrapper from "../components/Wrapper";

export default function Page() {
  return (
    <Wrapper bg="#ffffff">
      <section className="md:mx-[1.5rem] xl:mx-[3.5rem]">
        <BookHerosection />
      </section>
    </Wrapper>
  );
}
