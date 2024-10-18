import Marquee from "react-fast-marquee";
import lombaGalangMobile from "../../../assets/logatama/lomba-galang-mobile.png";

export default function Teaser() {
    return (
        <section className="h-[70vh] md:h-screen bg-gradient-to-b from-secondary from-10% to-[#633FCA] text-white text-center space-y-5 md:py-10 relative -top-3">
            <h1 className="font-semibold">TEASER LOGATAMA</h1>
            <div className="relative">
                <div className="flex flex-col justify-center space-y-2 z-0">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Marquee
                            key={index}
                            direction={index % 2 === 0 ? "right" : "left"}
                            speed={25}
                            className={`text-4xl md:text-7xl opacity-30 overflow-hidden tracking-wider font-bold ${
                                index % 2 === 0
                                    ? "text-slate-500"
                                    : "text-slate-400"
                            }`}
                        >
                            <span>TEASERLOGATAMA</span>
                            <span>TEASERLOGATAMA</span>
                            <span className="hidden md:block">
                                TEASERLOGATAMA
                            </span>
                            <span className="hidden md:block">
                                TEASERLOGATAMA
                            </span>
                        </Marquee>
                    ))}
                </div>
                <div className="absolute top-1 inset-x-0 py-5 px-9 flex items-center justify-center">
                    <div className="bg-primary p-2 md:w-[35vw] rounded-[2rem] flex justify-center items-center">
                        <figure className="overflow-hidden md:w-full md:h-full rounded-3xl h-44">
                            <img
                                className="w-full"
                                src={lombaGalangMobile}
                                alt="Teaser Logatama"
                            />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="md:px-96 px-8">
                <p className="text-xs md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
        </section>
    );
}
