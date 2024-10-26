import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import sejarah from "../../../assets/tentang/sejarah-1.png";
import ImageSection from "@/Components/Partial/ImageSection";
import TextSection from "@/Components/Partial/TextSection";

export default function History() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section
            ref={ref}
            className="bg-primary md:bg-white xl:min-h-screen xl:h-0 relative -top-px px-10 pb-10 md:p-0"
        >
            <motion.div
                className="space-y-4 md:flex md:py-20"
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="order-2 md:w-1/2 xl:w-[45%] md:flex justify-end">
                    <ImageSection
                        src={sejarah}
                        className="left-6 top-48 xl:-left-8 border-white xl:size-72 size-56"
                    />
                </div>
                <div className="text-white md:text-secondary order-1 md:w-1/2 xl:w-[55%] md:px-5 xl:px-20 md:flex items-center">
                    <TextSection
                        title={
                            <>
                                SEJARAH AMBALAN <br /> Ir. SOEKARNO - FATMAWATI{" "}
                            </>
                        }
                        className="w-full border-white md:border-secondary"
                    >
                        Kegiatan pramuka di SMK Negeri 7 Semarang di mulai dari
                        tahun 1975. Kegiatan awalnya dahulu tidak memiliki
                        gugusdepan, sehingga tercetus keinginan untuk membuat
                        gugusdepan, yaitu Ambalan. Ambalan sendiri adalah
                        organisasi pramuka yang beranggotakan pramuka penegak.
                    </TextSection>
                </div>
            </motion.div>
        </section>
    );
}
