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
        <img className="absolute hidden md:block top-36 left-2 w-24" src={meteor} alt="" />
        <img className="absolute hidden md:block top-56 left-[36%] w-44" src={meteor} alt="" />
        <img className="absolute hidden md:block top-80 -right-5 w-32" src={meteor} alt="" />
        <div className="xl:h-[20vh] h-[8vh] bg-secondary" />
      </div>
      <div className="px-5 py-10 xl:px-10 xl:pt-0 flex xl:h-full bg-secondary relative">
        <div className="text-center w-3/5 space-y-5 xl:space-y-5">
          <motion.h1
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="font-semibold text-sm xl:text-4xl xl:font-bold"
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
            <p className="text-xs xl:text-xl xl:tracking-wide xl:mt-10">
              Penjelasan deskripsi mengenai galeri ambalan soekma
            </p>
            <p className="hidden xl:block text-xl xl:tracking-wide">
              deskripsi singkat beberapa kata menjadi paragraf
            </p>
          </motion.div>
          <motion.div
            className="flex items-center justify-center xl:gap-5"
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
                <div className="overflow-hidden min-w-24 xl:min-w-60">
                  <figure className="overflow-hidden h-[22vh] xl:h-[40vh]">
                    <img
                      className="w-40 xl:w-60"
                      src={images[currentIndex]}
                      alt=""
                    />
                  </figure>
                  <div className="py-2 xl:py-4 bg-gradient-to-t from-violet-600 via-violet-800 to-violet-800 text-center rounded-b-xl">
                    <span className="text-xs xl:text-xl font-medium text-white">
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
            className="absolute w-28 xl:w-[240px] bottom-6 xl:top-[14.5rem] -right-4 xl:right-10"
            src={objekKardusOren}
            alt=""
          />
          <img
            className="absolute w-14 xl:w-32 bottom-10 right-14 xl:top-[22rem] xl:right-[190px]"
            src={objekKardusBiru}
            alt=""
          />
          <img
            className="w-full xl:w-[310px] absolute top-10 xl:top-0 xl:right-20"
            src={vrPutra}
            alt=""
          />
        </motion.div>
        <img
          className="absolute top-[30rem] left-72 w-24 hidden md:block"
          src={meteor}
          alt=""
        />
        <img
          className="absolute top-[26rem] right-96 w-32 hidden md:block"
          src={meteor}
          alt=""
        />
      </div>
    </section>
  );
}
