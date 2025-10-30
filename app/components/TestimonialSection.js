import React from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonialArray = [
    {
      rating: "5",
      text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
      name: "Oluwaseun",
      image: "/person.png",
      age: 17,
    },
    {
      rating: "5",
      text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
      name: "Hafsat",
      image: "/hafsat.jpg",
      age: 17,
    },
    {
      rating: "5",
      text: "“Before this, I didn’t even know climate tech was a thing. Now I’m designing my own project.”",
      name: "Oluwasegun",
      image: "/hafsat2.jpg",
      age: 17,
    },
  ];
  return (
    <div className="flex justify-between items-center gap-3 xl:px-[3.5rem] xl:pb-[5.6rem] ">
      {testimonialArray.map((testimonial, i) => {
        return <TestimonialCard key={i} testimonial={testimonial} />;
      })}
    </div>
  );
}
