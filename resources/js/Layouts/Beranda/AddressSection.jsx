import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AddressSection() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  return (
    <section ref={ref} className="h-[55vh] xl:h-[70vh]">
      <div className="px-10 space-y-4 py-10 xl:flex xl:p-20 xl:items-center">
        <motion.div
          className="text-center text-violet-900 space-y-5 xl:w-1/2 xl:space-y-12 xl:px-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-bold text-base xl:text-4xl xl:tracking-wider xl:mt-4">
            PANGKALAN AMBALAN Ir. <br /> SOEKARNO - FATMAWATI
          </h1>
          <p className="text-[13px] xl:text-lg font-semibold">
            Jl. Simpang Lima No. 1, RT.02/RW.01, Mugassari, Kec. Semarang Sel.,
            Kota Semarang, Jawa Tengah <br className="hidden xl:block" /> 50249
          </p>
          <div className="border border-violet-900 w-[266px] xl:w-full mt-2 mx-auto" />
        </motion.div>
        <motion.div
          className="flex justify-center xl:w-1/2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <figure className="w-[266px] xl:w-[572px] h-[163px] xl:h-[295px] border">
            <iframe
              className="w-[266px] xl:w-[572px] h-[163px] xl:h-[295px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.1523400023025!2d110.41902527489735!3d-6.991331368469174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b5ec9c768e9%3A0x23b2fb89a9518453!2sSMK%20Negeri%207%20Semarang%20(STM%20Pembangunan)!5e0!3m2!1sid!2sid!4v1716723346866!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
