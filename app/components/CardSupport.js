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
      </div>
    </div>
  );
}
