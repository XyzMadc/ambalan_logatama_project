export default function TextSection(p) {
    return (
        <section className="space-y-3 xl:space-y-10">
            <h3 className="text-base md:text-2xl xl:text-3xl font-bold tracking-wide">
                {p.title}
                <div className={`mt-3 border md:border-2 ${p.className}`} />
            </h3>
            <p className="text-[13.73px] md:text-base xl:text-xl">
                {p.children}
            </p>
        </section>
    );
}
