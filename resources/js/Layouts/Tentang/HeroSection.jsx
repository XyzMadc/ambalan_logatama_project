import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import asetPramukaPutri from "../../../assets/tentang/aset-pramuka-putri-vr.png";
import objekKardusBiru from "../../../assets/tentang/objek-kardus-biru.png";
import objekKardusOren from "../../../assets/tentang/objek-kardus-oren.png";
import galaxy from "../../../assets/apen/bg 1.png";
import galaxymobile from "../../../assets/apen/galaxymobile.png";

export default function HeroSection() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section
            ref={ref}
            className="min-h-screen md:min-h-[35rem] overflow-hidden xl:min-h-screen bg-gradient-to-t from-primary via-secondary to-tertiary flex items-end xl:items-center"
        >
            <div className="absolute md:top-0">
                <img
                    className="w-screen md:block hidden max-h-full"
                    src={galaxy}
                    alt=""
                />
                <img className="w-screen md:hidden" src={galaxymobile} alt="" />
            </div>
            <div className="absolute inset-0 pt-[120px] pb-16">
                <div className="flex flex-col md:flex-row h-full justify-between md:justify-center">
                    <motion.div
                        className="relative h-[40vh] md:w-[45%] md:h-[25rem] xl:w-[25%] xl:h-[360px]"
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            className="w-[50vw] md:w-48 xl:w-[240px] absolute right-[6rem] bottom-[-5rem] md:top-[9.5rem] xl:bottom-[-84px] md:right-[6rem] xl:right-[140px]"
                            src={objekKardusOren}
                            alt=""
                        />
                        <img
                            className="w-[40vw] md:w-44 xl:w-[210px] absolute right-[25%] md:right-16 xl:right-[30%]"
                            src={asetPramukaPutri}
                            alt=""
                        />
                        <img
                            className="w-[10rem] md:w-36 xl:w-[175px] absolute right-[3rem] bottom-[-5rem] md:top-56 md:right-14 xl:right-[96px] xl:bottom-[-72px]"
                            src={objekKardusBiru}
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        className="text-white px-10 md:w-[50%] md:h-[25rem] xl:w-[55%] xl:h-[360px] md:pt-28 xl:pt-24"
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-base md:text-lg xl:text-[40px] font-bold">
                            TENTANG PANGKALAN PRAMUKA
                        </h1>
                        <div className="flex items-center gap-2 xl:mt-4">
                            <h1 className="text-base md:text-lg xl:text-[40px] font-bold">
                                SIMPANG LIMA
                            </h1>
                            <div className="border border-white w-[38vw] md:w-40 xl:w-[360px] xl:border-2" />
                        </div>
                        <p className="text-[13px] md:text-sm xl:text-[20px] mt-2 xl:mt-10">
                            Organisasi yang bergerak di bidang Pramuka dan
                            dikenal dengan nama Pramuka Simpang Lima. Ambalan
                            Ir. Soekarno - Fatmawati ini memiliki jargon “WE ARE
                            SCOUT! WE ARE PROUD!” yang menjadi ciri khas
                            tersendiri.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
