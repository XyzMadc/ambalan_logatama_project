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
            className="bg-primary xl:bg-white xl:min-h-screen xl:h-0 relative -top-px px-10 pb-10 xl:p-0"
        >
            <motion.div
                className="space-y-4 xl:flex xl:py-20"
                initial={{ opacity: 0, y: 100 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="order-2 xl:w-[45%] xl:flex justify-end xl:relative">
                    <ImageSection
                        src={sejarah}
                        className="left-[114px] bottom-[-58px] border-white size-[290px]"
                    />
                </div>
                <div className="text-white xl:text-secondary order-1 xl:w-[55%] xl:px-20 xl:flex items-center">
                    <TextSection
                        title={
                            <>
                                SEJARAH AMBALAN <br /> Ir. SOEKARNO - FATMAWATI{" "}
                            </>
                        }
                        className="w-full border-white xl:border-secondary"
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
