import Image from "next/image";

export default function AboutCard({ cardContent }) {
  const { img, text, alt } = cardContent;

  return (
    <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md">
      <Image src={img} alt={alt || text} fill className="object-cover" />

      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-xl shadow">
        <p className="font-medium text-gray-900">{text}</p>
      </div>
    </div>
  );
}
