import { useState } from "react";
import PJS from "../../../assets/kegiatan/pjs.png";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import TextSection from "@/Components/Partial/TextSection";

export default function Pjs() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [PJS, PJS, PJS];

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
        <section className="p-10">
            <div className="space-y-3 md:flex">
                <div className="md:w-2/5 flex items-center order-2">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`text-secondary transition-all duration-300 ease-in ${
                            currentIndex === 0
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:text-indigo-400"
                        }`}
                    >
                        <CaretLeft size={36} />
                    </button>
                    <img
                        className="w-[77%]"
                        src={images[currentIndex]}
                        alt=""
                    />
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === images.length - 1}
                        className={`text-secondary transition-all duration-300 ease-in ${
                            currentIndex === images.length - 1
                                ? "cursor-not-allowed"
                                : "cursor-pointer hover:text-indigo-400"
                        }`}
                    >
                        <CaretRight size={36} />
                    </button>
                </div>
                <div className="md:w-3/5 text-secondary flex items-center order-1 xl:px-20">
                    <TextSection
                        title="Perkemahan Jum'at Sabtu"
                        className="w-full xl:w-4/5 border-secondary"
                    >
                        Lorem ipsum dolor sit amet, consectetur <br />{" "}
                        adipiscing elit, sed do eiusmod tempor <br /> incididunt
                        ut labore et dolore magna aliqua. <br /> Ut enim ad
                        minim veniam, quis nostrud <br /> exercitation ullamco
                        laboris nisi ut aliquip ex <br /> ea commodo consequat.
                        Duis aute irure <br /> dolor in reprehenderit in
                        voluptate velit esse <br /> cillum dolore eu fugiat
                        nulla pariatur.
                    </TextSection>
                </div>
            </div>
        </section>
    );
}
