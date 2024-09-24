import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import OPK from "../../../assets/kegiatan/OPK.png";

export default function Opk() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section
            ref={ref}
            className="px-5 xl:min-h-screen md:flex items-center justify-center xl:px-20"
        >
            <div className="flex flex-col md:flex-row">
                <div className="h-1/2 md:w-[25%] xl:w-[35%]">
                    <motion.img
                        className="xl:w-full"
                        src={OPK}
                        alt="OPK"
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.1 }
                        }
                        transition={{ duration: 0.5 }}
                    />
                </div>
                <div className="text-white bg-secondary h-1/2 px-5 py-10 space-y-3 md:w-[75%] xl:w-[65%] md:h-[14.7rem] xl:h-[520px] xl:px-20 xl:space-y-7 xl:flex flex-col justify-center">
                    <motion.h1
                        className="text-[16.73px] xl:text-3xl leading-4 font-semibold"
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: -100 }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        Orientasi Pendidikan Kepramukaan
                    </motion.h1>
                    <div className="border xl:border-2 border-white w-full mt-3" />
                    <motion.p
                        className="text-[13.73px] xl:text-xl"
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 100 }
                        }
                        transition={{ duration: 0.5 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
