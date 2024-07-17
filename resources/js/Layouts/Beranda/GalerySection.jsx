import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import hariPramuka from "../../../assets/beranda/hari-pramuka.png";
import lctpKwarcab from "../../../assets/beranda/lctp-kwarcab.png";
import vrPutra from "../../../assets/beranda/aset-pramuka-putra-vr.png";
import objekKardusOren from "../../../assets/beranda/objek-kardus-oren.png";
import objekKardusBiru from "../../../assets/beranda/objek-kardus-biru-crop.png";
import lengkungungu2 from "../../../assets/apen/galeri-ungu.png";
import lengkungbiru from "../../../assets/apen/galeri-biru.png";
import meteor from "../../../assets/apen/meteor.png";

export default function GalerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [hariPramuka, lctpKwarcab, hariPramuka, lctpKwarcab];
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const text = [
    "Hari Pramuka ke-64",
    "LCTP KWARCAB",
    "Hari Pramuka ke-64",
    "LCTP KWARCAB",
  ];

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
    <section ref={ref} className="overflow-hidden xl:h-[150vh] text-white">
      <div className="xl:h-[70vh] h-[20vh] relative">
        <div className="xl:h-[50vh] h-[12vh] relative">
          <img className="absolute xl:-bottom-2 bottom-0" src={lengkungungu2} alt="" />
          <img
            className="absolute xl:-bottom-5 -bottom-2 rotate-[-.3deg] w-[102vw] -left-[1px]"
            src={lengkungbiru}
            alt=""
          />
        </div>
        <img className="absolute hidden md:block md:top-20 xl:top-36 xl:left-2 md:w-20 xl:w-24" src={meteor} alt="" />
        <img className="absolute hidden md:block md:top-28 xl:top-56 md:left-[30%] xl:left-[36%] md:w-32 xl:w-44" src={meteor} alt="" />
        <img className="absolute hidden md:block md:top-32 xl:top-80 md:-right-7 xl:-right-5 md:w-28 xl:w-32" src={meteor} alt="" />
        <div className="xl:h-[20vh] h-[8vh] bg-secondary" />
      </div>
      <div className="px-5 py-10 xl:px-10 md:-top-px xl:pt-0 flex xl:h-full bg-secondary relative">
        <div className="text-center w-3/5 space-y-5 xl:space-y-5">
          <motion.h1
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="font-semibold text-sm md:text-xl xl:text-4xl xl:font-bold"
          >
            GALERI AMBALAN SOEKMA
          </motion.h1>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="xl:mt-5"
          >
            <p className="text-xs md:text-lg xl:text-xl xl:tracking-wide xl:mt-10">
              Penjelasan deskripsi mengenai galeri ambalan soekma
            </p>
            <p className="hidden xl:block text-xl xl:tracking-wide">
              deskripsi singkat beberapa kata menjadi paragraf
            </p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center md:gap-5 xl:gap-5"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
          >
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`text-4xl xl:text-7xl z-0 transition-all duration-200 ease-in-out ${
                currentIndex === 0 ? "cursor-not-allowed" : "hover:text-primary"
              }`}
            >
              &lt;
            </button>
            <div className="xl:flex xl:gap-20">
              {currentIndex <= images.length && (
                <div className="overflow-hidden min-w-24 md:min-w-52 xl:min-w-60">
                  <figure className="overflow-hidden h-[22vh] md:h-[20vh] xl:h-[40vh]">
                    <img
                      className="w-40 md:w-52 xl:w-60"
                      src={images[currentIndex]}
                      alt=""
                    />
                  </figure>
                  <div className="py-2 xl:py-4 bg-gradient-to-t from-violet-600 via-violet-800 to-violet-800 text-center rounded-b-xl">
                    <span className="text-xs md:text-lg xl:text-xl font-medium text-white">
                      {text[currentIndex]}
                    </span>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleNext}
              disabled={currentIndex >= images.length - 1}
              className={`text-4xl xl:text-7xl z-0 transition-all duration-200 ease-in-out ${
                currentIndex >= images.length - 1
                  ? "cursor-not-allowed"
                  : "hover:text-primary"
              }`}
            >
              &gt;
            </button>
          </motion.div>
        </div>
        <motion.div
          className="w-2/5 relative"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <img
            className="absolute w-28 md:w-48 xl:w-[240px] bottom-6 md:-bottom-6 xl:top-[14.5rem] -right-4 md:right-8 xl:right-10"
            src={objekKardusOren}
            alt=""
          />
          <img
            className="absolute w-14 md:w-24 xl:w-32 bottom-10 right-14 md:top-80 xl:top-[22rem] md:right-40 xl:right-[190px]"
            src={objekKardusBiru}
            alt=""
          />
          <img
            className="w-full md:w-[15rem] xl:w-[310px] absolute top-10 xl:top-0 xl:right-20"
            src={vrPutra}
            alt=""
          />
        </motion.div>
        <img
          className="absolute md:top-[24rem] xl:top-[30rem] xl:left-72 w-24 hidden md:block"
          src={meteor}
          alt=""
        />
        <img
          className="absolute md:top-[18rem] xl:top-[26rem] md:right-72 xl:right-96 w-32 hidden md:block"
          src={meteor}
          alt=""
        />
      </div>
    </section>
  );
}
