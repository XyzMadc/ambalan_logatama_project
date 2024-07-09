import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import objekKardusOren from "../../../assets/beranda/objek-kardus-oren.png";
import objekKardusBiru from "../../../assets/beranda/objek-kardus-biru-crop.png";
import BadenPowell from "../../../assets/beranda/baden-powell.png";
import meteor from "../../../assets/apen/meteor.png"

export default function QuoteSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <section
      ref={ref}
      className="h-[60vh] xl:w-full xl:h-[110vh] relative overflow-hidden -top-px"
    >
      <div className="h-full rounded-b-full xl:rounded-bl-[500px] xl:rounded-br-[500px] md:w-[145vw] w-[190vw] xl:w-[115vw] absolute -left-[185px] xl:-left-[8vw] bg-gradient-to-t from-primary to-secondary pr-[170px] pl-[180px]">
        <div className="px-5 space-y-10 xl:flex xl:pt-[120px] relative">
        <img className="absolute hidden md:block top-[35rem] left-60 w-40" src={meteor} alt="" />
        <img className="absolute hidden md:block top-[26rem] right-72 w-40" src={meteor} alt="" />
          <div className="relative flex justify-center xl:w-1/3">
            <motion.img
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute w-48 xl:w-[410px] -bottom-3 xl:bottom-[-265px] xl:-left-9"
              src={objekKardusBiru}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: .5 }}
              className="w-40 xl:w-[375px] xl:absolute xl:-top-[105px] xl:right-0 z-0"
              src={BadenPowell}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1, x: 0, rotate: -30 } : { opacity: 0, x: -100, rotate: 30 }}
              transition={{ duration: .5, delay: 1 }}
              className="absolute w-[110px] xl:w-[235px] -bottom-14 xl:top-[200px] right-[122px] md:right-[340px] xl:right-[92px]"
              src={objekKardusOren}
              alt=""
            />
          </div>
          <motion.div
            className="relative xl:w-2/3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-5xl xl:text-6xl font-bold text-white">“</span>
            <div className="text-white space-y-1 xl:space-y-5 absolute top-7 xl:top-10 px-5 xl:px-8">
              <h1 className="text-sm xl:text-3xl font-bold">
                Semakin besar tanggung jawab yang diberikan Pembina Pramuka
                kepada pemimpin patrolinya, semakin mereka akan merespons.”
              </h1>
              <div className="inline-flex items-center">
                <p className="text-[11px] xl:text-lg font-medium">
                  Robert Stephenson Smyth Baden-Powell
                </p>
                <div className="border xl:border-2 border-white ml-2 w-10 xl:w-28" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
