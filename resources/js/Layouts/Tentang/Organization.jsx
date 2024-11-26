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
        <section
            ref={ref}
            className="relative min-h-screen md:min-h-[35rem] xl:min-h-screen md:flex"
        >
            <div className="bg-secondary h-[25%] w-full absolute -top-px md:hidden" />
            <motion.div
                className="xl:w-[45%] md:w-1/2 relative flex justify-center md:justify-start md:items-start items-center p-10 md:p-0"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <ImageSection
                    src={sejarah}
                    className="xl:size-[290px] md:size-60 md:right-0 md:bottom-40 xl:-right-14 xl:-bottom-20 border-white"
                />
            </motion.div>
            <motion.div
                className="xl:w-[55%] md:w-1/2 text-secondary px-10 md:pl-5 md:px-0 md:pt-20"
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
                    className="w-full md:w-[22rem] xl:w-[60%] border-secondary"
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
