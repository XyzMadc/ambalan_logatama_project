import Marquee from "react-fast-marquee";

export default function Dokumentasi() {
    return (
        <section className="xl:h-[120vh] bg-gradient-to-b from-secondary from-10% to-[#633FCA] text-white text-center xl:space-y-10 py-20">
            <h1 className="font-semibold xl:text-3xl">
                DOKUMENTASI PERLOMBAAN
            </h1>
            <div className="relative h-[70vh] xl:h-[80vh] overflow-hidden z-0">
                <div className="absolute inset-0 flex flex-col justify-center space-y-2">
                    {Array.from({ length: 9 }).map((_, index) => (
                        <Marquee
                            key={index}
                            direction={index % 2 === 0 ? "right" : "left"}
                            speed={25}
                            className={`text-4xl xl:text-6xl tracking-wider font-bold ${
                                index % 2 === 0
                                    ? "text-slate-500"
                                    : "text-slate-400"
                            }`}
                        >
                            <span>DOKUMENTASIPERLOMBAAN</span>
                            <span>DOKUMENTASIPERLOMBAAN</span>
                            <span className="hidden md:block">
                                DOKUMENTASIPERLOMBAAN
                            </span>
                        </Marquee>
                    ))}
                </div>
                <div className="absolute inset-0 py-[60px] xl:py-5 space-y-8 xl:space-y-10">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Marquee
                            key={index}
                            direction={index % 2 === 0 ? "left" : "right"}
                            speed={25}
                        >
                            {Array.from({ length: 7 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="item bg-gradient-to-t from-[#32108E] via-[#532FB6] to-[#633FCA] size-28 xl:size-36 rounded-xl border border-primary mr-4 xl:mr-20"
                                ></div>
                            ))}
                        </Marquee>
                    ))}
                </div>
            </div>
            <button className="bg-white rounded-2xl py-2 px-8 xl:py-3 xl:px-8 text-secondary font-bold text-xs xl:text-sm">
                Lihat Dokumentasi
            </button>
        </section>
    );
}
