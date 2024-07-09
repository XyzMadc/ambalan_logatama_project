import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sejarah from "../../../assets/tentang/sejarah-1.png";
import ImageSection from "@/Components/Partial/ImageSection";
import TextSection from "@/Components/Partial/TextSection";

export default function Organization() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section ref={ref} className="relative min-h-screen xl:flex">
            <div className="bg-secondary h-[25%] w-full absolute -top-px xl:hidden" />
            <motion.div
                className="xl:w-[45%] relative flex justify-center xl:justify-start items-center p-10 xl:p-0"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <ImageSection
                    src={sejarah}
                    className="xl:size-[290px] right-[88px] bottom-14 border-white"
                />
            </motion.div>
            <motion.div
                className="xl:w-[55%] text-secondary px-10 xl:px-0"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <TextSection
                    title={
                        <>
                            ORGANISASI AMBALAN <br /> Ir. SOEKARNO - FATMAWATI{" "}
                        </>
                    }
                    className="w-full xl:w-[60%] border-secondary"
                >
                    Dewan Ambalan adalah suatu wadah <br /> pembinaan
                    kepemimpinan yang terdiri dari <br /> para Pramuka Penegak
                    yang sudah dilantik <br /> dan bertugas merencanakan,
                    mengelola, <br /> serta menggerakkan kegiatan di Ambalan{" "}
                    <br /> yang bersangkutan dengan bimbingan <br /> pembinanya.
                </TextSection>
            </motion.div>
        </section>
    );
}
