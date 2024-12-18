import Marquee from "react-fast-marquee";
import lombaGalangMobile from "../../../assets/logatama/lomba-galang-mobile.png";

export default function Teaser() {
    return (
        <section className="bg-gradient-to-b from-secondary from-10% to-[#633FCA] text-white text-center space-y-5 md:py-10">
            <h1 className="font-semibold text-2xl">TEASER LOGATAMA</h1>
            <div className="relative flex flex-col overflow-hidden">
                <div className="flex flex-col justify-center space-y-2 flex-grow">
                    {Array.from({ length: 11 }).map((_, index) => (
                        <Marquee
                            key={index}
                            direction={index % 2 === 0 ? "right" : "left"}
                            speed={25}
                            gradient={false}
                            className={`text-4xl md:text-7xl opacity-20 overflow-hidden tracking-wider font-bold ${
                                index % 2 === 0
                                    ? "text-slate-500"
                                    : "text-slate-400"
                            }`}
                        >
                            <span>
                                TEASERLOGATAMATEASERLOGATAMATEASERLOGATAMA
                            </span>
                        </Marquee>
                    ))}
                </div>
                <div className="absolute inset-0 px-9 py-10 flex flex-col items-center gap-5">
                    <div className="flex justify-center items-center">
                        <figure className="border-8 border-primary overflow-hidden md:h-full rounded-[3rem] h-full">
                            <img
                                className="w-full object-none object-bottom"
                                src={lombaGalangMobile}
                                alt="Teaser Logatama"
                            />
                        </figure>
                    </div>
                    <div className="md:px-96">
                        <p className="text-base md:text-lg xl:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
