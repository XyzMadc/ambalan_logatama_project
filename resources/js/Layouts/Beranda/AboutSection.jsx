import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "@phosphor-icons/react";
import soekma1 from "../../../assets/beranda/ambalan-soekma-2.png";
import soekma2 from "../../../assets/beranda/ambalan-soekma-1.png";
import lengkungungu from "../../../assets/apen/ambalan-ungu.png";
import lengkungputih from "../../../assets/apen/ambalan-putih.png";
import lengkungungu2 from "../../../assets/apen/galeri-ungu.png";
import lengkungbiru from "../../../assets/apen/galeri-biru.png";
import meteor3 from "../../../assets/apen/meteor3.png";

export default function AboutSection() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const handleRedirect = () => {
        window.location.href = "/tentang";
    };
    return (
        <section
            ref={ref}
            className="overflow-hidden xl:h-[82vh] md:h-[32vh] h-[85vh] md:flex xl:px-20 xl:pt-10 relative -top-2"
        >
            <div className="relative md:bg-none bg-gradient-to-t from-tertiary via-secondary to-primary h-80 md:h-96 md:w-2/5 xl:h-full xl:w-[45%] py-10">
                <div className="md:hidden">
                    <img
                        className="absolute w-screen h-[35vh] top-[50px] md:h-[40vh] md:-top-[120px]"
                        src={lengkungungu}
                        alt=""
                    />
                    <img
                        className="absolute w-screen h-[35vh] top-[70px] md:h-[38vh] md:-top-[80px]"
                        src={lengkungputih}
                        alt=""
                    />
                </div>
                <motion.img
                    className="w-[180px] md:w-56 xl:w-[310px] absolute left-24 md:left-10 xl:left-10"
                    src={soekma1}
                    alt="soekma-satu"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
                    }
                />
                <motion.img
                    className="w-[120px] md:w-[8rem] xl:w-52 absolute top-52 md:top-60 xl:top-[305px] right-[104px] md:right-0 xl:right-[115px]"
                    src={soekma2}
                    alt="soekma-dua"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
                    }
                />
            </div>
            <div className="p-10 xl:px-0 xl:py-0 xl:pr-48 space-y-4 xl:space-y-14 md:w-3/5 xl:w-[55%]">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }
                    }
                    transition={{ duration: 1 }}
                    className="font-bold text-lg md:text-2xl xl:text-4xl text-violet-950 text-center xl:text-left"
                >
                    AMBALAN SOEKMA
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1 }}
                    className="text-violet-900 text-sm md:text-base xl:text-lg font-semibold xl:font-medium"
                >
                    Ambalan Soekma mempunyai sejarah tersendiri, kapan
                    berdirinya, dan bagaimana mulai terbentuk menjadi organisasi
                    Pramuka aktif hingga saat ini. Selain itu, Ambalan ini
                    mempunya ciri khas penggunaan kluwak untuk dijadikan ring
                    hasduk sebagai ciri khas Pramuka Simpang Lima SMK Negeri 7
                    Semarang.
                </motion.p>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 1 }}
                    whileHover={{
                        translateX: -2,
                        translateY: -4,
                        boxShadow: "5px 7px 0 0 indigo",
                    }}
                    className="bg-gradient-to-l from-violet-600 to-indigo-700 rounded-xl xl:rounded-2xl inline-flex items-center gap-4 px-3 py-[6px] xl:py-2 text-white group"
                    onClick={handleRedirect}
                >
                    <span className="text-sm xl:text-lg xl:font-medium">
                        Selengkapnya
                    </span>
                    <p className="group-hover:rotate-45 transition-all duration-200 ease-in-out">
                        <ArrowUpRight size={24} />
                    </p>
                </motion.button>
            </div>
            <div>
                <img
                    className="absolute w-screen hidden md:block -left-0 xl:h-[50vh] xl:-bottom-[102vh] h-[25vh] -bottom-[64vh] md:-bottom-[12vh]"
                    src={lengkungungu2}
                    alt=""
                />
                <img
                    className="absolute w-screen hidden md:block -left-0 xl:h-[45vh] xl:-bottom-[103vh] h-[25vh] -bottom-[65vh] md:-bottom-[13vh]"
                    src={lengkungbiru}
                    alt=""
                />
            </div>

            <img
                className="absolute w-screen -left-0 xl:h-[45vh] md:h-[45vh] xl:-bottom-[140vh] hidden md:block md:-bottom-[45vh]"
                src={meteor3}
                alt=""
            />
            <img
                className="absolute w-screen -left-0 xl:h-[45vh] xl:-bottom-[200vh] hidden lg:block"
                src={meteor3}
                alt=""
            />
        </section>
    );
}
