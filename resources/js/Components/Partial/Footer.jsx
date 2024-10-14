import logoSoekarno from "../../../assets/kegiatan/logo-soekarno.png";
import logoFatmawati from "../../../assets/kegiatan/logo-fatmawati.png";
import { ArrowRight, Envelope } from "@phosphor-icons/react";

export default function Footer() {
    return (
        <section className="">
            <div className="bg-footer text-white py-10 px-[60px] xl:px-24 xl:py-20 rounded-tl-[70px] xl:rounded-tl-[170px] xl:flex xl:justify-between">
                <div className="xl:w-1/3 space-y-3">
                    <div className="flex gap-1 xl:gap-2">
                        <img
                            className="w-14 xl:w-16"
                            src={logoSoekarno}
                            alt=""
                        />
                        <img
                            className="w-14 xl:w-16"
                            src={logoFatmawati}
                            alt=""
                        />
                    </div>
                    <div className="space-y-3">
                        <h2 className="font-semibold text-xs xl:text-xl xl:font-bold">
                            AMBALAN Ir. SOEKARNO - FATMAWATI
                        </h2>
                        <div className="border border-white" />
                        <p className="text-[11px] xl:text-xs tracking-wide">
                            Ambalan Ir. Soekarno - Fatmawati atau yang biasa
                            disebut dengan Ambalan SOEKMA. Gugusdepan 11-089 -
                            11-090 Pangkalan SMK Negeri 7 Semarang.
                        </p>
                        <h3 className="text-orange-200 font-bold text-xs xl:text-[13px]">
                            WE ARE SCOUT, WE ARE PROUD!
                        </h3>
                    </div>
                </div>
                <div className="mt-3 xl:w-1/3">
                    <div className="space-y-1">
                        <h1 className="text-xs xl:text-base font-semibold">
                            Kontak Kami
                        </h1>
                        <div className="border border-white w-[90px] xl:w-[104px]" />
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
                            <li className="group">
                                <a
                                    className="flex items-center justify-center text-[#3B2389] rounded-full p-1 bg-white text-base xl:text-2xl group-hover:bg-gradient-to-r group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] group-hover:text-white transition-all duration-200 ease-in-out"
                                    href="#"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current text-[#e6683c] group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#f09433] group-hover:via-[#e6683c] group-hover:to-[#bc1888] rounded-full p-1 transition-all duration-300 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9-51.3-114.9-114.9-114.9zm0 186.9c-39.8 0-72-32.2-72-72s32.2-72 72-72 72 32.2 72 72-32.2 72-72 72zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-.1-56.1-11.5-106-33.1-150.2-22.3-44.8-52-81.8-90.3-110.2-39.7-29.5-86-44.2-138.8-44.2-52.8 0-99.1 14.7-138.8 44.2-38.3 28.4-68 65.4-90.3 110.2-21.6 44.2-32.9 94.1-33.1 150.2-.1 56.1 11.2 106 33.1 150.2 22.3 44.8 52 81.8 90.3 110.2 39.7 29.5 86 44.2 138.8 44.2 52.8 0 99.1-14.7 138.8-44.2 38.3-28.4 68-65.4 90.3-110.2 21.6-44.2 32.9-94.1 33.1-150.2zM398.8 449.4c-19.7 41.4-47.5 75.3-82.6 100.8-35.3 25.8-76.3 38.6-121.2 38.6s-85.9-12.8-121.2-38.6c-35.1-25.5-62.9-59.4-82.6-100.8-19.9-41.9-29.7-90.1-29.5-143.4.1-53.3 9.8-101.5 29.5-143.4 19.7-41.4 47.5-75.3 82.6-100.8 35.3-25.8 76.3-38.6 121.2-38.6s85.9 12.8 121.2 38.6c35.1 25.5 62.9 59.4 82.6 100.8 19.9 41.9 29.7 90.1 29.5 143.4-.1 53.3-9.8 101.5-29.5 143.4z" />
                                    </svg>
                                </a>
                            </li>
                            <li className="group">
                                <a
                                    className="flex items-center justify-center rounded-full p-1 bg-white text-base xl:text-2xl group-hover:bg-gradient-to-r group-hover:from-[#FF0000] group-hover:via-[#E52D27] group-hover:to-[#B31217] transition-all duration-200 ease-in-out"
                                    href="#"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current text-[#FF0000] group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#FF0000] group-hover:via-[#E52D27] group-hover:to-[#B31217] rounded-full p-1 transition-all duration-300 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 576 512"
                                    >
                                        <path d="M549.655 124.083c-6.281-23.652-24.843-42.214-48.495-48.495C457.208 64 288 64 288 64S118.792 64 74.84 75.588c-23.652 6.281-42.214 24.843-48.495 48.495C16 168.037 16 256 16 256s0 87.963 10.345 131.917c6.281 23.652 24.843 42.214 48.495 48.495C118.792 448 288 448 288 448s169.208 0 213.16-11.588c23.652-6.281 42.214-24.843 48.495-48.495C560 343.963 560 256 560 256s0-87.963-10.345-131.917zM232 334.604V177.396L345.082 256 232 334.604z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="bg-footer text-white py-4 text-center xl:flex text-[10px] xl:text-xs xl:justify-center xl:gap-1">
                <h4>Copyright @2024 Ambalan Ir. Soekarno - Fatmawati.</h4>
                <h4>All rights reserved.</h4>
            </div>
        </section>
    );
}
