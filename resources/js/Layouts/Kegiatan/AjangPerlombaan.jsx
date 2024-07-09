import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PJS from "../../../assets/kegiatan/pjs.png";
import OPK from "../../../assets/kegiatan/OPK.png";
import TextSection from "@/Components/Partial/TextSection";

export default function AjangPerlombaan() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [PJS, OPK];

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    return (
        <section ref={ref} className="p-10 pb-20">
            <div className="space-y-3 xl:flex">
                <motion.div
                    className="xl:w-2/5 flex items-center order-2 gap-2"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`text-secondary transition-all duration-300 ease-in text-5xl ${
                            currentIndex === 0 && "cursor-not-allowed"
                        } ${currentIndex !== 0 && "hover:text-indigo-400"}`}
                    >
                        &lt;
                    </button>
                    <img
                        className="w-[77%]"
                        src={images[currentIndex]}
                        alt=""
                    />
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === images.length - 1}
                        className={`text-secondary transition-all duration-300 ease-in text-5xl ${
                            currentIndex === images.length - 1 &&
                            "cursor-not-allowed"
                        } ${
                            currentIndex !== images.length - 1 &&
                            "hover:text-indigo-400"
                        }`}
                    >
                        &gt;
                    </button>
                </motion.div>
                <motion.div
                    className="xl:w-3/5 text-secondary flex items-center order-1 xl:px-20 xl:pb-32"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <TextSection
                        title="Ajang Perlombaan"
                        className="w-full xl:w-4/5 border-secondary"
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
