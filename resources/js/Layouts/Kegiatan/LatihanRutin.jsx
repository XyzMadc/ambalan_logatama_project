import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import pasukan14 from "../../../assets/kegiatan/pasukan-14.png";
import ImageSection from "@/Components/Partial/ImageSection";
import TextSection from "@/Components/Partial/TextSection";

export default function LatihanRutin() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section ref={ref} className="h-[95vh] bg-secondary relative -top-px">
            <div className="px-10 xl:px-0 xl:flex">
                <motion.div
                    className="relative flex justify-end items-center bottom-10 pt-10 order-2 xl:w-1/2"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <ImageSection
                        src={pasukan14}
                        className="left-24 -bottom-16 xl:bottom-[-105px] xl:left-40 border-secondary"
                    />
                </motion.div>
                <motion.div
                    className="text-white order-1 xl:w-1/2 xl:pl-40"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <TextSection title="LATIHAN RUTIN" line="white">
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
