import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoSoekarno from "../../../assets/beranda/logo-soekarno.png";
import logoFatmawati from "../../../assets/beranda/logo-fatmawati.png";
import galaxy from "../../../assets/apen/bg 1.png";
import galaxymobile from "../../../assets/apen/galaxymobile.png";
import lengkungungu from "../../../assets/apen/ambalan-ungu.png";
import lengkungputih from "../../../assets/apen/ambalan-putih.png";

export default function HeroSection() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const judul = "AMBALAN Ir. SOEKARNO - FATMAWATI";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (index < judul.length) {
            interval = setInterval(() => {
                setText((prev) => prev + judul[index]);
                setIndex((prev) => prev + 1);
            }, 100);
        } else {
            interval = setTimeout(() => {
                setText("");
                setIndex(0);
            }, 10000);
        }
        return () => {
            clearInterval(interval);
            clearTimeout(interval);
        };
    }, [index, judul]);

    return (
        <section
            ref={ref}
            className="xl:min-h-screen -z-[999] overflow-hidden xl:flex xl:items-center bg-gradient-to-t from-primary via-secondary to-tertiary relative"
        >
            <div className="absolute -z-[1]">
                <img
                    className="w-screen md:block hidden max-h-full"
                    src={galaxy}
                    alt=""
                />
                <img className="w-screen md:hidden" src={galaxymobile} alt="" />
            </div>

            <div className="hidden md:block">
                <img
                    className="absolute w-screen md:bottom-10 md:h-[30vh] xl:h-[50vh]"
                    src={lengkungungu}
                    alt=""
                />
                <img
                    className="absolute w-screen md:h-[30vh] xl:h-[45vh] bottom-0"
                    src={lengkungputih}
                    alt=""
                />
            </div>

            <div className="flex flex-col md:flex-row justify-end md:items-center xl:items-center xl:w-full h-[70vh] md:h-[50vh] xl:h-screen">
                <div className="flex justify-center gap-4 md:w-[35%] xl:w-2/5 md:order-2 md:relative md:h-[20vh] xl:h-[65vh]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="w-28 md:w-40 xl:w-72 md:absolute order-2 -bottom-0 right-16 md:bottom-0 md:right-10 xl:bottom-0"
                        src={logoFatmawati}
                        alt=""
                    />
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="w-28 md:w-40 xl:w-72 md:absolute order-1 top-0 left-16 md:left-2 md:top-0 xl:bottom-0"
                        src={logoSoekarno}
                        alt=""
                    />
                </div>
                <div className="px-7 xl:px-20 py-8 text-white space-y-3 xl:space-y-8 md:w-[65%] xl:w-3/5 md:order-1">
                    <motion.h1
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="font-semibold xl:font-bold text-lg md:text-2xl xl:text-4xl"
                    >
                        {text}
                        <span className="blinking-cursor">|</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            hidden: { opacity: 0, y: 100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 1 }}
                        className="text-[13px] md:text-lg xl:text-[20px]"
                    >
                        Merupakan organisasi yang terdiri dari para
                        <br className="xl:hidden" /> Pramuka Penegak yang sudah
                        dilantik dan
                        <br className="xl:hidden" /> bertugas mengelola kegiatan
                        di Ambalan.
                        <br className="xl:hidden" />
                        Gugusdepan 11-089 - 11-090 Pangkalan SMK
                        <br className="xl:hidden" /> Negeri 7 Semarang.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
