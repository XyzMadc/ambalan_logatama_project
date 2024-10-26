import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import openRecruitment from "../../../assets/kegiatan/open-recruitmen.png";
import TextSection from "@/Components/Partial/TextSection";

export default function Recruitment() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section ref={ref} className="relative h-[90] bg-secondary pb-10">
            <div className="h-[10vh] xl:h-[20vh] bg-white" />
            <div className="h-[80vh] md:h-[50vh] xl:h-[70vh]" />
            <div className="absolute top-0 inset-x-0 bottom-20 flex flex-col md:flex-row items-end justify-center px-10 xl:px-20 text-white gap-4 md:gap-10 xl:gap-20">
                <div className="">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -100 }
                        }
                        transition={{ duration: 0.5 }}
                        className="md:w-[30rem]"
                        src={openRecruitment}
                        alt="open-recruitmen"
                    />
                </div>
                <motion.div
                    className="md:w-1/2 xl:w-1/2 xl:pr-20 self-center md:mt-40"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <TextSection
                        title="Open Recruitment"
                        className="w-full md:w-72 xl:w-full border-white"
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
            <div className="border-2 border-white w-[90vw] xl:w-[95vw] absolute left-4 xl:left-6 mt-3" />
        </section>
    );
}
