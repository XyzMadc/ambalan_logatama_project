import logoSoekarno from "../../../assets/kegiatan/logo-soekarno.png";
import logoFatmawati from "../../../assets/kegiatan/logo-fatmawati.png";
import {
    ArrowRight,
    Envelope,
    InstagramLogo,
    YoutubeLogo,
} from "@phosphor-icons/react";

export default function Footer() {
    return (
        <section className="bg-footer text-white rounded-tl-[70px] xl:rounded-tl-[170px]">
            <div className="py-10 px-[60px] xl:px-24 xl:py-20 xl:flex xl:justify-between">
                <div className="xl:w-2/5 space-y-3">
                    <div className="flex gap-1 xl:gap-2">
                        <img
                            className="w-14 xl:w-20"
                            src={logoSoekarno}
                            alt=""
                        />
                        <img
                            className="w-14 xl:w-20"
                            src={logoFatmawati}
                            alt=""
                        />
                    </div>
                    <div className="space-y-3">
                        <h2 className="font-semibold text-xs xl:text-2xl xl:font-bold">
                            AMBALAN Ir. SOEKARNO - FATMAWATI
                        </h2>
                        <div className="border border-white" />
                        <p className="text-[11px] xl:text-sm tracking-wide">
                            Ambalan Ir. Soekarno - Fatmawati atau yang biasa
                            disebut dengan Ambalan SOEKMA. Gugusdepan 11-089 -
                            11-090 Pangkalan SMK Negeri 7 Semarang.
                        </p>
                        <h3 className="text-orange-200 font-bold text-xs xl:text-sm">
                            WE ARE SCOUT, WE ARE PROUD!
                        </h3>
                    </div>
                </div>
                <div className="mt-3 xl:w-1/3">
                    <div className="space-y-1">
                        <h1 className="text-xs xl:text-lg font-semibold">
                            Kontak Kami
                        </h1>
                        <div className="border border-white w-[90px] xl:w-32" />
                    </div>
                    <div className="mt-3">
                        <form className="justify-start items-center gap-4 inline-flex">
                            <div className="relative z-0 w-full group flex items-center gap-2 border-b border-white">
                                <div className="pl-2">
                                    <Envelope size={24} color="white" />
                                </div>
                                <div className="flex-1 relative">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block py-2.5 px-0 w-full text-sm text-white bg-transparent focus:outline-none focus:ring-0 focus:border-none peer border-0"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white/50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Masukan Email
                                    </label>
                                </div>
                                <button className="pr-2">
                                    <ArrowRight size={24} color="white" />
                                </button>
                            </div>
                        </form>
                        <ul className="flex gap-2 xl:gap-4 py-4">
                            <li className="group z-50">
                                <a
                                    className="flex items-center justify-center text-[#e6683c] rounded-full p-1.5 bg-white text-base xl:text-2xl group-hover:bg-gradient-to-r group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:text-white transition-all duration-200 ease-in-out"
                                    href="#"
                                >
                                    <InstagramLogo size={20} weight="duotone" />
                                </a>
                            </li>
                            <li className="group z-50">
                                <a
                                    className="flex items-center justify-center text-[#FF0000] rounded-full p-1.5 bg-white text-base xl:text-2xl group-hover:bg-gradient-to-r group-hover:from-[#FF0000] group-hover:via-[#E52D27] group-hover:to-[#B31217] group-hover:text-white transition-all duration-200 ease-in-out"
                                    href="#"
                                >
                                    <YoutubeLogo size={20} weight="fill" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="py-4 text-center xl:flex text-[10px] xl:text-xs xl:justify-center xl:gap-1">
                <h4>Copyright @2024 Ambalan Ir. Soekarno - Fatmawati.</h4>
                <h4>All rights reserved.</h4>
            </div>
        </section>
    );
}
