export default function TextSection(p) {
  return (
    <section className="space-y-3 xl:space-y-10 xl:mt-32">
      <h1 className="text-base xl:text-3xl font-bold tracking-wide">
        {p.title}
        <div className={`mt-3 border xl:border-2 ${p.className}`} />
      </h1>
      <p className="text-[13.73px] xl:text-xl">{p.children}</p>
    </section>
  );
}
