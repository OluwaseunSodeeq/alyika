"use client";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

export default function ContactHeroSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");
      reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  return (
    <section className="font-satoshi relative py-15 md:py-20 px-3 md:px-6 bg-white overflow-hidden">
      <div className="relative max-w-[900px] mx-auto ">
        {/* Header */}
        <div className="relative max-w-[750px] mx-auto text-center mb-16 ">
          <h1 className="lg:w-[80%] text-[30px] md:text-[40px] lg:text-[50px] 2xl:text-[70px] font-bold text-dark-green mx-auto">
            Let’s Connect With Us
          </h1>
          <p className=" lg:w-[90%] mt-4 text-black text-[20px] md:text-[22px]  lg:text-[22px] 2xl:text-[27px] mx-auto">
            We’d love to hear from you. Reach out and let’s build something
            meaningful together.
          </p>

          <div className="lg:w-[95%] mx-auto  mt-6 flex flex-wrap justify-center gap-4 text-base md:text-[17px] 2xl:text-[27px] text-dark-green">
            <span>📧 hello@climeset.ng</span>
            <span>📍 projectclimeset</span>
            <span>📞 +234 800 CLIMESET</span>
            <span>📁 projectclimeset</span>
          </div>
          {/* Decorative Icons */}
          <span className="absolute top-[-40] left-[10] md:left-[-150] text-yellow text-[30px] md:text-[28px]">
            +
          </span>
          <span className="hidden md:inline-block absolute top-[-50] md:top-[-40]  right-5 md:right-[-150] text-dark-green font-bold text-[40px] 2xl:text-[44px]">
            +
          </span>
          <span className="absolute bottom-23 md:bottom-15 left-15 md:left-[-90]  font-bold lg:text-[30px] 2xl:text-[56px] text-[#B637CD] text-2xl">
            ◡
          </span>
          <span className="absolute bottom-[240] md:bottom-22 font-bold right-1 md:right-[-120] rotate-90 text-[#61C1DB] text-[30px] 2xl:text-[47px]">
            ◡
          </span>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Text */}
          <div>
            <h2 className="text-[30px] md:text-[30px] lg:[40px] font-semibold text-dark-green mt-0 md:mt-10">
              Contact Us
            </h2>
            <p className="w-[90%]  text-black mt-6 text-[18px] 2xl:text-[30px] md:text-[22px] lg:text-[24px]">
              Got a question, idea, or partnership proposal? Let’s talk.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full  bg-white py-4 md:py-8 space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
                className="w-full border-[#A4A0A0] border-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dark-green"
              />
              {errors.name && (
                <span className="text-red-500 text-sm md:text-base">
                  Name is required
                </span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
                className="w-full border-[#A4A0A0] border-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dark-green"
              />
              {errors.email && (
                <span className="text-red-500 text-sm md:text-base">
                  Email is required
                </span>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Message"
                {...register("message", { required: true })}
                className="w-full border-[#A4A0A0] border-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-dark-green"
              />
              {errors.message && (
                <span className="text-red-500 text-sm md:text-base">
                  Message is required
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-dark-green text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
