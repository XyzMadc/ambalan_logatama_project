import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ambalanSoekma from "../../../assets/tentang/sejarah-2.png";
import awalMula from "../../../assets/tentang/sejarah-3.png";
import CardHistory from "@/Components/Ui/CardHistory";

export default function Sejarah() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });
    return (
        <section ref={ref} className="min-h-screen relative">
            <div className="bg-secondary h-[25%] xl:h-1/2 w-full bottom-0 xl:top-0 absolute" />
            <div className="absolute inset-0 px-16 py-10 flex flex-col xl:flex-row justify-center items-center gap-6 xl:gap-40">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <CardHistory src={ambalanSoekma} title="AMBALAN SOEKMA">
                        Ambalan SOEKMA (Ir. Soekarno -{" "}
                        <br className="hidden xl:block" /> Fatmawati). Pada
                        tanggal 24 <br className="hidden xl:block" />
                        Februari Februari 1981 Ambalan Ir.{" "}
                        <br className="hidden xl:block" /> Soekarno sudah mulai{" "}
                        <br className="hidden xl:block" />
                        dirumuskan dan terbentuk pada{" "}
                        <br className="hidden xl:block" /> tahun 1983. Sedangkan
                        untuk <br className="hidden xl:block" />
                        Ambalan Fatmawati lahir pada{" "}
                        <br className="hidden xl:block" /> tanggal 18 April
                        1988.
                    </CardHistory>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
                    }
                    transition={{ duration: 0.5 }}
                >
                    <CardHistory src={awalMula} title="AWAL MULA">
                        Saat itu STM hanya berisi siswa{" "}
                        <br className="hidden xl:block" /> laki-laki, jadi
                        lahirlah Ambalan Ir. <br className="hidden xl:block" />{" "}
                        Soekarno terlebih dahulu. Namun,{" "}
                        <br className="hidden xl:block" /> lama-kelamaan banyak{" "}
                        <br className="hidden xl:block" />
                        perempuan menjadi siswi di{" "}
                        <br className="hidden xl:block" /> STEMBA sehingga
                        dipikirkan untuk <br className="hidden xl:block" />
                        membuat satuan tersendiri, yaitu{" "}
                        <br className="hidden xl:block" /> Ambalan Fatmawati.
                    </CardHistory>
                </motion.div>
            </div>
        </section>
    );
}
