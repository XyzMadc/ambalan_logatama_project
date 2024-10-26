import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import objekKardusOren from "../../../assets/beranda/objek-kardus-oren.png";
import objekKardusBiru from "../../../assets/beranda/objek-kardus-biru-crop.png";
import BadenPowell from "../../../assets/beranda/baden-powell.png";
import meteor from "../../../assets/apen/meteor.png";

export default function QuoteSection() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section
            ref={ref}
            className="h-[60vh] md:h-[50vh] xl:w-full xl:h-[110vh] relative overflow-hidden -top-2"
        >
            <div className="h-full rounded-b-full xl:rounded-bl-[500px] xl:rounded-br-[500px] md:w-[145vw] w-[190vw] xl:w-[115vw] absolute -left-[185px] xl:-left-[8vw] bg-gradient-to-t from-primary to-secondary pr-[170px] pl-[180px]">
                <div className="px-5 space-y-10 md:px-0 md:flex xl:pt-[120px] relative">
                    <img
                        className="absolute hidden md:block md:top-[24rem] md:left-40 xl:top-[35rem] xl:left-60 md:w-32 xl:w-40"
                        src={meteor}
                        alt="meteor"
                    />
                    <img
                        className="absolute hidden md:block md:top-[22rem] md:right-20 xl:top-[26rem] xl:right-72 md:w-28 xl:w-40"
                        src={meteor}
                        alt="meteor"
                    />
                    <div className="relative flex justify-center md:w-2/5 md:h-[20rem] xl:w-1/3">
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={
                                inView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -100 }
                            }
                            transition={{ duration: 0.5 }}
                            className="absolute w-48 md:w-full xl:w-[410px] -bottom-3 md:-bottom-5 md:-left-6 xl:-left-9"
                            src={objekKardusBiru}
                            alt="objekKardusBiru"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={
                                inView
                                    ? { opacity: 1, x: 0 }
                                    : { opacity: 0, x: -100 }
                            }
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="w-40 md:w-72 xl:w-[375px] xl:absolute xl:-top-[105px] xl:right-10 z-0"
                            src={BadenPowell}
                            alt="BadenPowell"
                        />
                        <motion.img
                            initial={{ opacity: 0 }}
                            animate={
                                inView
                                    ? { opacity: 1, x: 0, rotate: -30 }
                                    : { opacity: 0, x: -100, rotate: 30 }
                            }
                            transition={{ duration: 0.5, delay: 1 }}
                            className="absolute w-[110px] md:w-40 xl:w-[235px] -bottom-14 md:-bottom-20 xl:top-[200px] right-[122px] md:right-24 xl:right-32"
                            src={objekKardusOren}
                            alt="objekKardusOren"
                        />
                    </div>
                    <motion.div
                        className="relative md:w-3/5 xl:w-2/3 md:pt-20 xl:pt-0"
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 100 }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-5xl md:text-6xl font-bold text-white">
                            “
                        </span>
                        <div className="text-white space-y-1 xl:space-y-5 absolute top-7 md:top-[120px] xl:top-10 px-5 xl:px-8">
                            <h1 className="text-sm md:text-lg xl:text-3xl font-bold">
                                Semakin besar tanggung jawab yang diberikan
                                Pembina Pramuka kepada pemimpin patrolinya,
                                semakin mereka akan merespons.”
                            </h1>
                            <div className="inline-flex items-center">
                                <p className="text-[11px] md:text-sm xl:text-lg font-medium">
                                    Robert Stephenson Smyth Baden-Powell
                                </p>
                                <div className="border md:border-2 border-white ml-2 w-10 md:w-28" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
