export default function Wrapper({ children, bg }) {
  return (
    <section
      // className="w-full p-0 m-0 2xl:max-w-[1400px] md:mx-auto box-border overflow-hidden"
      className="w-full p-0 m-0 2xl:max-w-[1400px] md:mx-auto box-border"
      style={{ backgroundColor: bg }}
    >
      {children}
    </section>
  );
}
