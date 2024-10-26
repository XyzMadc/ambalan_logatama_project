import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bantaraSoekma from "../../../assets/kegiatan/TKU-Penegak.png";
import TextSection from "@/Components/Partial/TextSection";

export default function Pembantaran() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section ref={ref} className="md:h-[40vh] xl:min-h-screen">
            <div className="p-10 space-y-10 md:flex">
                <motion.div
                    className="md:w-[45%] xl:w-[45%] order-2 xl:p-20"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <div className="h-[45vh] w-[65vw] md:w-[30vw] md:h-[30vh] xl:w-[30vw] xl:h-[70vh] bg-secondary mx-auto">
                        <div className="relative h-2/3 flex justify-center items-center">
                            <img
                                className="absolute w-[40vw] md:w-40 xl:w-[18vw] -rotate-[25deg] mr-10"
                                src={bantaraSoekma}
                                alt=""
                            />
                            <img
                                className="absolute w-[40vw] md:w-40 xl:w-[18vw] ml-10 bottom-0"
                                src={bantaraSoekma}
                                alt=""
                            />
                        </div>
                        <div className="h-1/3 text-white flex justify-center items-center text-center">
                            <h1 className="text-2xl xl:text-4xl font-bold after:content-['\A'] after:block">
                                BANTARA <br /> SOEKMA
                            </h1>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="text-secondary order-1 md:w-[55%] xl:px-20 flex items-center"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <TextSection
                        title="PEMBANTARAAN"
                        className="w-2/3 border-secondary"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur.
                    </TextSection>
                </motion.div>
            </div>
        </section>
    );
}
