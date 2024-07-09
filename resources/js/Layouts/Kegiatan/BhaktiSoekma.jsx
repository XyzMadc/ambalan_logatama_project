import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PJS from "../../../assets/kegiatan/pjs.png";
import TextSection from "@/Components/Partial/TextSection";

export default function BhaktiSoekma() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section ref={ref} className="h-[105vh] relative">
      <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-secondary" />
      <div className="absolute inset-0 p-10">
        <div className="space-y-3 text-white xl:flex">
          <motion.div
            className="xl:w-1/2 xl:flex justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img className="w-[500px]" src={PJS} alt="" />
          </motion.div>
          <motion.div
            className="xl:w-1/2 xl:pr-[95px]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <TextSection title="BHAKTI SOEKMA" className="w-full border-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </TextSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
