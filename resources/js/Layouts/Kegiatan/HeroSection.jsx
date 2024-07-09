import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CaretDown } from "@phosphor-icons/react";
import hero from "../../../assets/kegiatan/hero-section.png";

export default function HeroSection() {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false,
    });

    const handleClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    };
    return (
        <section ref={ref} className="min-h-screen relative">
            <div className="absolute inset-0 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-gradient-to-t after:from-primary after:via-secondary after:to-tertiary after:opacity-60">
                <img className="w-full h-full object-cover" src={hero} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center absolute inset-0">
                <motion.h1
                    className="text-white text-lg xl:text-3xl font-bold text-center tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    MENGENAL KEGIATAN PRODUKTIF <br /> AMBALAN Ir. SOEKARNO -{" "}
                    <br /> FATMAWATI
                </motion.h1>
                <motion.button
                    onClick={handleClick}
                    className="text-secondary bg-white p-1 rounded-full mt-10 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }
                    }
                    transition={{ duration: 1 }}
                >
                    <CaretDown size={35} />
                </motion.button>
            </div>
        </section>
    );
}
