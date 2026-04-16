"use client";
import { useState } from "react";
import { getStolenBreathStats } from "../../lib/getStolenBreathStats";
import BookHerosection from "../components/BookHerosection";
import Wrapper from "../components/Wrapper";

export default async function Page() {
  const stats = await getStolenBreathStats();
  console.log("Fetched stats:", stats);

  const { sold, a_copy_amount } = stats;
  const [raised, setRaised] = useState(0);

  return (
    <Wrapper bg="#ffffff">
      <section className="md:mx-[1.5rem] xl:mx-[3.5rem]">
        <BookHerosection bookStats={stats} />
      </section>
    </Wrapper>
  );
}
