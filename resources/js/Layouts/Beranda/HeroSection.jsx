import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logoSoekarno from "../../../assets/beranda/logo-soekarno.png";
import logoFatmawati from "../../../assets/beranda/logo-fatmawati.png";
import logoSoekarnoFatmawati from "../../../assets/beranda/logo.png";
import galaxy from "../../../assets/apen/bg 1.png";
import galaxymobile from "../../../assets/apen/galaxymobile.png";
import lengkungungu from "../../../assets/apen/ambalan-ungu.png";
import lengkungputih from "../../../assets/apen/ambalan-putih.png";

export default function HeroSection() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const title = "AMBALAN Ir. SOEKARNO - FATMAWATI";
    const [displayedText, setDisplayedText] = useState("");
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        let interval;
        if (charIndex < title.length) {
            interval = setInterval(() => {
                setDisplayedText((prev) => prev + title[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 100);
        } else {
            interval = setTimeout(() => {
                setDisplayedText("");
                setCharIndex(0);
            }, 10000);
        }
        return () => clearInterval(interval);
    }, [charIndex, title]);

    const animationVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            ref={ref}
            className="xl:min-h-screen overflow-hidden xl:flex xl:items-center bg-gradient-to-t from-primary via-secondary to-tertiary relative"
        >
            <div className="absolute">
                <img
                    className="w-screen md:block hidden max-h-full"
                    src={galaxy}
                    alt="background-galaxy"
                />
                <img className="w-screen md:hidden" src={galaxymobile} alt="" />
            </div>

            <div className="hidden md:block">
                <img
                    className="absolute w-screen md:bottom-5 md:h-[30vh] xl:h-[50vh]"
                    src={lengkungungu}
                    alt="lengkung-ungu"
                />
                <img
                    className="absolute w-screen md:h-[30vh] xl:h-[45vh] bottom-0"
                    src={lengkungputih}
                    alt="lengkung-putih"
                />
            </div>

            <div className="flex flex-col md:flex-row justify-end md:items-center xl:items-center xl:w-full h-[70vh] md:h-[50vh] xl:h-screen">
                <div className="flex justify-center md:justify-start gap-4 md:w-[35%] xl:w-2/5 md:order-2 md:relative">
                    <motion.img
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animationVariants}
                        transition={{ duration: 1 }}
                        className="hidden xl:block w-96"
                        src={logoSoekarnoFatmawati}
                        alt="logo-soekarno-fatmawati"
                    />
                    <motion.img
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animationVariants}
                        transition={{ duration: 1 }}
                        className="xl:hidden w-28 md:w-40 order-2"
                        src={logoFatmawati}
                        alt=""
                    />
                    <motion.img
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animationVariants}
                        transition={{ duration: 1 }}
                        className="xl:hidden w-28 md:w-40 order-1"
                        src={logoSoekarno}
                        alt=""
                    />
                </div>
                <div className="px-7 xl:px-20 py-8 text-white space-y-3 xl:space-y-8 md:w-[65%] xl:w-3/5 md:order-1">
                    <motion.h1
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animationVariants}
                        transition={{ duration: 1 }}
                        className="font-semibold xl:font-bold text-lg md:text-2xl xl:text-4xl"
                    >
                        {displayedText}
                        <span className="blinking-cursor">|</span>
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={animationVariants}
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
