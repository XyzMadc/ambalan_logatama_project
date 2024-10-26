import Marquee from "react-fast-marquee";

export default function Dokumentasi() {
    return (
        <section className="bg-gradient-to-b from-secondary from-10% to-[#633FCA] text-white text-center xl:space-y-10 py-20">
            <h1 className="font-semibold xl:text-3xl">
                DOKUMENTASI PERLOMBAAN
            </h1>
            <div className="relative overflow-hidden">
                <div className="flex flex-col justify-center space-y-1 xl:space-y-3">
                    {Array.from({ length: 15 }).map((_, index) => (
                        <Marquee
                            key={index}
                            direction={index % 2 === 0 ? "right" : "left"}
                            speed={25}
                            gradient={false}
                            className={`text-4xl opacity-30 xl:text-6xl tracking-wider font-bold ${
                                index % 2 === 0
                                    ? "text-slate-500"
                                    : "text-slate-400"
                            }`}
                        >
                            <span>
                                DOKUMENTASIPERLOMBAANDOKUMENTASIPERLOMBAAN
                            </span>
                        </Marquee>
                    ))}
                </div>
                <div className="absolute inset-0 flex flex-col justify-around">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Marquee
                            key={index}
                            direction={index % 2 === 0 ? "left" : "right"}
                            speed={25}
                        >
                            {/* {dataDokumentasi.map((img, index) => (
                                <figure
                                    key={index}
                                    className="item bg-gradient-to-t from-[#32108E] via-[#532FB6] to-[#633FCA] h-44 xl:h-72 rounded-xl border border-primary mr-4 xl:mr-20 overflow-hidden"
                                >
                                    <img
                                        className="h-full object-cover"
                                        src={img}
                                        alt="descriptive alt text here"
                                    />
                                </figure>
                            ))} */}
                        </Marquee>
                    ))}
                </div>
            </div>
            <button className="bg-white rounded-2xl py-2 px-8 xl:py-3 xl:px-8 text-secondary font-bold text-xs xl:text-sm hover:scale-110 transition-all duration-200 ease-out">
                Lihat Dokumentasi
            </button>
        </section>
    );
}
