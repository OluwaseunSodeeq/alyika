import Image from "next/image";

export default function CardSupport({ data }) {
  const { title, text, btn, image } = data;
  return (
    <div>
      <div className="">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-700 mb-4">{text}</p>
        {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    {btn}
                </button> */}
      </div>
    </div>
  );
}
