import { useState, useEffect } from "react";
import lombaGalangMobile from "../../../assets/logatama/lomba-galang-mobile.png";

export default function Merchandise() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(2);

    const images = [
        lombaGalangMobile,
        lombaGalangMobile,
        lombaGalangMobile,
        lombaGalangMobile,
        lombaGalangMobile,
    ];

    const text = [
        "Merchandise 1",
        "Merchandise 2",
        "Merchandise 3",
        "Merchandise 4",
        "Merchandise 5",
    ];

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1024) {
                setItemsToShow(4);
            } else {
                setItemsToShow(2);
            }
        };

        updateItemsToShow();
        window.addEventListener("resize", updateItemsToShow);

        return () => window.removeEventListener("resize", updateItemsToShow);
    }, []);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < images.length - itemsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className="h-[50vh] xl:h-auto bg-secondary text-center text-white space-y-10">
            <h1 className="font-bold text-2xl">MERCHANDISE</h1>
            <div className="flex justify-center gap-3">
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`text-4xl xl:text-7xl transition-all duration-200 ease-in-out ${
                        currentIndex === 0
                            ? "cursor-not-allowed"
                            : "hover:text-primary"
                    }`}
                >
                    &lt;
                </button>
                <div className="flex gap-5">
                    {currentIndex <= images.length - itemsToShow && (
                        <div className="flex gap-4">
                            {[...Array(itemsToShow)].map((_, offset) => (
                                <div
                                    key={currentIndex + offset}
                                    className="bg-gradient-to-r from-secondary from-10% to-[#633FCA] rounded-xl border-2 border-primary px-2 py-1"
                                >
                                    <div className="size-32 xl:size-56 rounded-xl overflow-hidden border-2 border-primary">
                                        <img
                                            className="size-full object-cover hover:scale-125 transition-transform duration-200 ease-in cursor-zoom-in"
                                            src={images[currentIndex + offset]}
                                            alt=""
                                        />
                                    </div>
                                    <p className="xl:text-2xl xl:font-semibold">
                                        {text[currentIndex + offset]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <button
                    onClick={handleNext}
                    disabled={currentIndex >= images.length - itemsToShow}
                    className={`text-4xl xl:text-7xl transition-all duration-200 ease-in-out ${
                        currentIndex >= images.length - itemsToShow
                            ? "cursor-not-allowed"
                            : "hover:text-primary"
                    }`}
                >
                    &gt;
                </button>
            </div>
            <button className="py-2 px-4 bg-white text-sm font-semibold rounded-full text-secondary">
                Pesan Merchandise
            </button>
        </section>
    );
}
