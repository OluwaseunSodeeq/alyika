import Image from "next/image";
import Wrapper from "../components/Wrapper";

export default function Page() {
  return (
    <Wrapper>
      {/* text */}
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4D158] via-[#8CC751] to-[#0A220F]">
        Green Dreamers for Tech
      </h2>
      {/* Arrow */}
      <div className="w-full rounded-xl overflow-hidden mt-4 relative">
        <Image
          src="/images/sample.jpg"
          className="w-full h-[220px] md:h-[260px] object-cover"
          alt="banner"
        />

        {/* Arrow Button */}
        <button className="absolute bottom-4 right-4 bg-white border border-black w-10 h-10 rounded-full flex items-center justify-center">
          →
        </button>
      </div>
      {/* Swiper */}
      /*
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        className="mt-10"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Card
            tag="GDFT"
            title="Green Dreamers for Tech"
            desc="We don’t just talk climate solutions..."
            img="/images/slide1.jpg"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Card
            tag="GDS"
            title="Green Dreams Series"
            desc="Climate change feels different..."
            img="/images/slide2.jpg"
          />
        </SwiperSlide>
      </Swiper>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #c3c3c3;
          width: 10px;
          height: 10px;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #000;
        }
      `}</style>
      */

      {/* Card */}
      const Card = ({ tag, title, desc, img }) => {
  return (
    <div className="mb-10">
      <p className="text-[11px] uppercase tracking-widest text-[#7E7E7E]">
        {tag}
      </p>

      <h2 className="mt-1 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F4D158] via-[#8CC751] to-[#0A220F]">
        {title}
      </h2>

      <p className="text-[13px] text-[#777] mt-1 leading-relaxed w-[90%]">
        {desc}
      </p>

      <div className="w-full rounded-xl overflow-hidden mt-4 relative">
        <img
          src={img}
          alt="card"
          className="w-full h-[220px] md:h-[260px] object-cover"
        />

        <button className="absolute bottom-4 right-4 bg-white border border-black w-10 h-10 rounded-full flex items-center justify-center">
          →
        </button>
      </div>
    </div>
  );
};

    </Wrapper>
  );
}
