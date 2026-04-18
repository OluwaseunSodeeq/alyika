import Image from "next/image";
import { Star } from "lucide-react";
import useOpenContext from "../contexts/useOpenContext";
import SubscribeButton from "./SubscribeButton";
import useSubscribeContext from "../contexts/useSubscribeContext";
import { useState } from "react";

export default function HerosecRightCard() {
  // Subcsribe form states
  const { email, setEmail, message, isSuccess, loading, handleSubscribe } =
    useSubscribeContext();

  const { showBgImage } = useOpenContext();
  const btnBg = "#fdcd31";
  const textColor = "#012f25";
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      rating: "5",
      text: "“The Stolen Breath had: Good character development, good scripting, and good narration; educational and informative.”",
      name: "Magnus Imam",
      image: "/imam.png",
      bgImage: "/bgImage0.png",
    },
  ];

  const leftClick = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const rightClick = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const current = testimonials[index];

  return (
    <div className="relative h-[400px] md:h-[40rem] xl:h-[40rem] w-full 2xl:w-[46rem] xl:w-[44rem] md:w-[45%] xl:rounded-b-[1.2rem] ">
      <div
        className=" pt-12 md:pt-0 w-full h-full md:h-full bg-cover bg-center bg-no-repeat md:border-none  md:rounded-[1.2rem]"
        style={
          showBgImage
            ? { backgroundImage: `url(${current.bgImage})` }
            : { backgroundColor: "#012F25" }
        }
      >
        <div className="absolute top-75 md:top-9 xl:top-10 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:right-1 lg:right-5 xl:right-[2rem] ">
          <div className="flex gap-4 justify-between items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-3 bg-light-green py-2 rounded-full outline-none xl:w-[18rem] shadow-md text-sm"
            />
            <SubscribeButton
              btnBg={btnBg}
              textColor={textColor}
              handleSubscribe={handleSubscribe}
              loading={loading}
            />
          </div>
          {/* Message */}
          {message && (
            <p
              className={`text-lg font-bold ${
                isSuccess ? "text-main-bg" : "text-red-500"
              } transition-opacity duration-300`}
            >
              {message}
            </p>
          )}
        </div>

        <div className="absolute top-12 md:top-[12rem] xl:top-[7rem] left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-6 bg-yellow px-3 py-3.5 rounded-xl w-[90%] md:w-[95%] xl:max-w-[16rem] shadow-md">
          <div className=" flex items-center gap-2">
            <div className="relative w-[90%] h-[140px] md:w-[50%] xl:w-[130px] xl:h-[126px]">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-cover rounded-md border-yellow"
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 130px"
                priority
              />
            </div>

            <div className="w-full flex flex-col md:w-[121px]">
              <div className="flex gap-x-2 text-dark-green">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      current.rating > i
                        ? "fill-dark-green text-dark-green"
                        : "fill-main-bg text-main-bg"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[14.5px] xl:text-xs text-dark-green mt-1">
                {current.text}
              </p>
            </div>
          </div>
        </div>

        {/* <div
          onClick={leftClick}
          className="absolute left-2 md:left-4 top-[34%] md:top-1/2 -translate-y-1/2 bg-dark-green/50 py-2 px-1 rounded-md shadow"
        >
          <Image
            src="/left-arrow.svg"
            alt="left-arrow"
            width={18}
            height={18}
            className="md:w-[26px] md:h-[26px]"
          />
        </div> */}
        {/* <div
          onClick={rightClick}
          className="absolute right-2 md:right-4 top-[34%] md:top-1/2 -translate-y-1/2 bg-dark-green/50 py-2 px-3  rounded-md shadow"
        >
          <Image
            src="/right-arrow.png"
            alt="right-arrow"
            width={18}
            height={18}
            className="md:w-[26px] md:h-[26px]"
          />
        </div> */}
        <div className=" hidden xl:block absolute bg-white p-3 pl-9 text-center right-0 bottom-0  rounded-tl-[4rem] clip-slant ">
          <p className="text-gray-700 font-satoshi font-light italic  xl:max-w-[22rem] text-left text-sm">
            &quot; We’re not experts in suits, we’re students, storytellers,
            builders, and friends who decided to do something. And now we’re
            inviting you to do it with us. &quot;
          </p>
        </div>
      </div>
    </div>
  );
}

function Subscribe({ btnBg, textColor }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Email validation
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ Handle subscribe
  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email");
      setIsSuccess(false);
      return;
    }

    setLoading(true);

    try {
      // 🔥 CONNECT TO GOOGLE FORM
      await fetch(
        "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `entry.1234567890=${encodeURIComponent(email)}`, // replace entry ID
        },
      );

      // ✅ Success
      setMessage("Thank you for joining!");
      setIsSuccess(true);
      setEmail("");

      // ⏳ Hide message after 3s
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage("Something went wrong. Try again.");
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute top-75 md:top-9 xl:top-10 flex flex-col items-center md:items-end gap-2 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:right-5 xl:right-[2rem]">
      {/* Input + Button */}
      <div className="flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-3 bg-light-green py-2 rounded-full outline-none xl:w-[18rem] shadow-md text-sm"
        />

        <button
          onClick={handleSubscribe}
          disabled={loading}
          className={`${btnBg} ${textColor} px-4 py-2 rounded-full text-sm shadow-md disabled:opacity-50`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      {/* Message */}
      {message && (
        <p
          className={`text-sm ${
            isSuccess ? "text-green-600" : "text-red-500"
          } transition-opacity duration-300`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
