// import StatsSection from "../components/BookHerosection";
import BookHerosection from "../components/BookHerosection";
import Wrapper from "../components/Wrapper";

export default function Page() {
  return (
    <Wrapper bg="#012f25">
      <section className="md:px-[1.5rem] xl:px-[3.5rem]">
        <BookHerosection />
      </section>
    </Wrapper>
  );
}
