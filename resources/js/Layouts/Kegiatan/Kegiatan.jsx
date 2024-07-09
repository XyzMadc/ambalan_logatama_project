import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import soekma1 from "../../../assets/kegiatan/soekma-1.png";
import soekma2 from "../../../assets/kegiatan/soekma-2.png";
import soekma3 from "../../../assets/kegiatan/soekma-3.png";
import soekma4 from "../../../assets/kegiatan/soekma-4.png";
import galaxy from "../../../assets/apen/bg 1.png";
import galaxymobile from "../../../assets/apen/galaxymobile.png";

export default function Kegiatan() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
    const images = [soekma1, soekma2, soekma3, soekma4];

    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1280);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (isDesktop && currentIndex < images.length - 3) {
            setCurrentIndex(currentIndex + 1);
        } else if (!isDesktop && currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    return (
        <section
            ref={ref}
            className="h-[90vh] xl:min-h-screen xl:relative xl:overflow-hidden xl:h-0 bg-gradient-to-b from-primary to-secondary to-50%"
        >
            <div className="absolute inset-0 hidden lg:block">
                <img
                    className="w-screen md:block hidden -top-[28vh] absolute"
                    src={galaxy}
                    alt=""
                />
                <img
                    className="w-[100vw] md:hidden absolute"
                    src={galaxymobile}
                    alt=""
                />
            </div>
            <div className="xl:absolute inset-0">
                <div className="text-center space-y-3 xl:space-y-10 text-white py-20 px-5">
                    <div className="space-y-3 xl:space-y-10 xl:px-40">
                        <motion.h1
                            className="font-bold text-lg xl:text-4xl"
                            initial={{ opacity: 0 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 100 }
                            }
                            transition={{ duration: 0.5 }}
                        >
                            Bagaimana kegiatan-kegiatan Ambalan berlangsung
                        </motion.h1>
                        <motion.p
                            className="text-[13px] xl:text-xl"
                            initial={{ opacity: 0 }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 100 }
                            }
                            transition={{ duration: 1.5 }}
                        >
                            Terdapat sekitar 8 kegiatan yang aktif dan produktif
                            dilaksanakan setiap tahun dan diikuti oleh setiap
                            angkatan anggota Ambalan
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex justify-center items-center gap-5"
                        initial={{ opacity: 0 }}
                        animate={
                            inView
                                ? { opacity: 1, y: 0 }
                                : { opacity: 0, y: 100 }
                        }
                        transition={{ duration: 2.5 }}
                    >
                        <button
                            className={`h-fit text-6xl transition-all duration-200 ease-in ${
                                currentIndex === 0
                                    ? "cursor-not-allowed"
                                    : "hover:text-primary"
                            }`}
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                        >
                            &lt;
                        </button>
                        <div className="flex justify-center gap-4">
                            {images
                                .slice(
                                    currentIndex,
                                    currentIndex + (isDesktop ? 3 : 1)
                                )
                                .map((image, index) => (
                                    <div
                                        key={index}
                                        className="rounded-[2rem] min-w-60 w-full overflow-hidden"
                                    >
                                        <a href="#">
                                            <img
                                                className="w-60"
                                                src={image}
                                                alt={`Image ${
                                                    currentIndex + index + 1
                                                }`}
                                            />
                                        </a>
                                    </div>
                                ))}
                        </div>
                        <button
                            className={`h-fit text-6xl transition-all duration-200 ease-in ${
                                (isDesktop &&
                                    currentIndex >= images.length - 3) ||
                                (!isDesktop &&
                                    currentIndex >= images.length - 1)
                                    ? "cursor-not-allowed"
                                    : "hover:text-primary"
                            }`}
                            onClick={handleNext}
                            disabled={
                                (isDesktop &&
                                    currentIndex >= images.length - 3) ||
                                (!isDesktop &&
                                    currentIndex >= images.length - 1)
                            }
                        >
                            &gt;
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
        // <section className="h-[90vh] xl:min-h-screen xl:h-0 bg-gradient-to-b from-primary to-secondary to-50% px-10 py-5 flex justify-center items-center xl:py-20">
        //   <div className="text-center space-y-3 xl:space-y-10 text-white">
        //     <div className="space-y-3 xl:space-y-10 xl:px-40">
        //       <h1 className="font-bold text-lg xl:text-4xl">
        //         Bagaimana kegiatan-kegiatan Ambalan berlangsung
        //       </h1>
        //       <p className="text-[13px] xl:text-xl">
        //         Terdapat sekitar 8 kegiatan yang aktif dan produktif dilaksanakan
        //         setiap tahun dan diikuti oleh setiap angkatan anggota Ambalan
        //       </p>
        //     </div>
        //     <div className="flex justify-center items-center gap-5">
        //       <button
        //         className={`h-fit text-6xl ${
        //           currentIndex === 0 && "cursor-not-allowed"
        //         }`}
        //         onClick={handlePrev}
        //         disabled={currentIndex === 0}
        //       >
        //         &lt;
        //       </button>
        //       <div className="flex justify-center gap-4">
        //         {images
        //           .slice(currentIndex, currentIndex + (isDesktop ? 3 : 1))
        //           .map((image, index) => (
        //             <div
        //               key={index}
        //               className="rounded-[2rem] min-w-60 w-full overflow-hidden"
        //             >
        //               <a href="#">
        //                 <img
        //                   className="w-60"
        //                   src={image}
        //                   alt={`Image ${currentIndex + index + 1}`}
        //                 />
        //               </a>
        //             </div>
        //           ))}
        //       </div>
        //       <button
        //         className={`h-fit text-6xl ${
        //           ((isDesktop && currentIndex >= images.length - 3) ||
        //             (!isDesktop && currentIndex >= images.length - 1)) &&
        //           "cursor-not-allowed"
        //         }`}
        //         onClick={handleNext}
        //         disabled={
        //           (isDesktop && currentIndex >= images.length - 3) ||
        //           (!isDesktop && currentIndex >= images.length - 1)
        //         }
        //       >
        //         &gt;
        //       </button>
        //     </div>
        //   </div>
        //   <div className="absolute lg:-bottom-[103vh] hidden lg:block">
        //     <img
        //       className="w-screen md:block hidden max-h-full"
        //       src={galaxy}
        //       alt=""
        //     />
        //     <img className="w-screen md:hidden" src={galaxymobile} alt="" />
        //   </div>
        // </section>
    );
}
