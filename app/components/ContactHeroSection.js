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
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Decorative Icons */}
      <span className="absolute top-20 left-10 text-yellow-400 text-2xl">
        +
      </span>
      <span className="absolute top-32 right-20 text-green-600 text-xl">+</span>
      <span className="absolute bottom-20 left-20 text-purple-500 text-2xl">
        ◡
      </span>
      <span className="absolute bottom-32 right-32 text-sky-400 text-2xl">
        ◡
      </span>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-green-900">
            Let’s Connect With Us
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            We’d love to hear from you. Reach out and let’s build something
            meaningful together.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>📧 hello@climeset.ng</span>
            <span>📍 projectclimeset</span>
            <span>📞 +234 800 CLIMESET</span>
            <span>📁 projectclimeset</span>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-semibold text-green-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Got a question, idea, or partnership proposal? Let’s talk.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-xl shadow-lg p-8 space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Name is required</span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", { required: true })}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Email is required</span>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Message"
                {...register("message", { required: true })}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-700"
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  Message is required
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-900 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
