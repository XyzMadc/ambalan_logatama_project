import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import pasukan14 from "../../../assets/kegiatan/pasukan-14.png";
import ImageSection from "@/Components/Partial/ImageSection";
import TextSection from "@/Components/Partial/TextSection";

export default function Pasukan14() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section
            ref={ref}
            className="h-[85vh] xl:min-h-screen xl:h-0 p-10 xl:px-0 xl:py-10"
        >
            <div className="space-y-4 xl:flex">
                <motion.div
                    className="order-2 xl:w-[45%] xl:flex justify-end xl:relative"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <ImageSection
                        src={pasukan14}
                        className="left-[114px] bottom-[-58px] border-white size-[290px]"
                    />
                </motion.div>
                <motion.div
                    className="text-secondary order-1 xl:w-[55%] xl:px-20 xl:flex items-center"
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <TextSection
                        title="Pasukan 14"
                        className="w-full border-secondary"
                    >
                        Kegiatan pramuka di SMK Negeri 7 Semarang di mulai dari
                        tahun 1975. Kegiatan awalnya dahulu tidak memiliki
                        gugusdepan, sehingga tercetus keinginan untuk membuat
                        gugusdepan, yaitu Ambalan. Ambalan sendiri adalah
                        organisasi pramuka yang beranggotakan pramuka penegak.
                    </TextSection>
                </motion.div>
            </div>
        </section>
    );
}
