import Image from "next/image";

export function ProjectCardSlider({ eachslider }) {
  return (
    <div className="w-full px-4">
      <div className="relative w-full mx-auto rounded-[16px]">
        {eachslider.images.map((img, idx) => (
          <div
            key={idx}
            className="w-full h-[390px] md:h-[350px] xl:h-[500px] pb-10 md:pb-8"
          >
            <Image
              src={img}
              alt={eachslider.text}
              width={1200}
              height={500}
              className="w-full  h-full  object-cover rounded-[16px]"
            />
            <p className=" text-white text-center text-xl mt-3">
              {/* {eachslider.text} */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
