export default function ButtonText({ text }) {
  return (
    <div className=" bg-dark-green text-white px-6 py-3 rounded-[10px] md:rounded-[65px] text-sm font-medium shadow-lg flex items-center gap-3 xl:gap-4">
      <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow rounded-full"></div>
      <button className="text-main-bg">{text}</button>
    </div>
  );
}
