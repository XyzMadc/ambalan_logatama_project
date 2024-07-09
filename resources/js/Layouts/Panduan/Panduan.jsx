import { useState } from "react";
import backgroundMobile from "../../../assets/panduan/bg-panduan-mobile.png";
import backgroundDesktop from "../../../assets/panduan/bg-panduan-dekstop.png";

const InfoCard = ({ title, description, buttonText }) => (
    <div className="space-y-4 p-3 rounded-xl border-primary border-2 bg-[#633FCA] transition-transform duration-500 w-1/2 xl:h-80">
        <h1 className="font-bold text-base xl:text-2xl">{title}</h1>
        <p className="text-xs xl:text-base">{description}</p>
        <button className="border-2 border-primary py-1 px-2 xl:py-2 xl:px-4 rounded-xl shadow-lg text-xs xl:text-base">
            {buttonText}
        </button>
    </div>
);

export default function PanduanLayout() {
    const [activeTab, setActiveTab] = useState("PENGGALANG");
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <section className="h-screen flex items-end xl:items-center bg-gradient-to-b from-secondary from-10% to-[#633FCA] relative overflow-hidden">
            <img className="md:hidden" src={backgroundMobile} alt="" />
            <img className="hidden md:block" src={backgroundDesktop} alt="" />
            <div className="h-[70vh] text-white w-full px-5 text-center space-y-5 absolute">
                <h1 className="text-white font-bold text-base xl:text-3xl">
                    PANDUAN LOMBA LOGATAMA-XVIII
                </h1>
                <div className="p-1 rounded-lg bg-white text-sm w-60 xl:w-80 mx-auto flex justify-between">
                    <button
                        className={`font-bold py-1 w-1/2 rounded-md transition-colors duration-300 ${
                            activeTab === "PENGGALANG"
                                ? "bg-primary text-white"
                                : "bg-white text-primary"
                        }`}
                        onClick={() => handleClick("PENGGALANG")}
                    >
                        PENGGALANG
                    </button>
                    <button
                        className={`font-bold py-1 w-1/2 rounded-md transition-colors duration-300 ${
                            activeTab === "PENEGAK"
                                ? "bg-primary text-white"
                                : "bg-white text-primary"
                        }`}
                        onClick={() => handleClick("PENEGAK")}
                    >
                        PENEGAK
                    </button>
                </div>
                <div className="flex justify-center gap-4 mt-4 transition-transform duration-500 xl:px-40">
                    {activeTab === "PENGGALANG" ? (
                        <>
                            <InfoCard
                                title="PETUNJUK PELAKSANAAN"
                                description="Petunjuk pelaksanaan PENGGALANG."
                                buttonText="Lihat File Juklak"
                            />
                            <InfoCard
                                title="PETUNJUK TEKNIS"
                                description="Petunjuk Teknis PENGGALANG."
                                buttonText="Lihat File Juknis"
                            />
                        </>
                    ) : (
                        <>
                            <InfoCard
                                title="PETUNJUK PELAKSANAAN"
                                description="Petunjuk pelaksanaan PENEGAK."
                                buttonText="Lihat File Juklak"
                            />
                            <InfoCard
                                title="PETUNJUK TEKNIS"
                                description="Petunjuk Teknis PENEGAK."
                                buttonText="Lihat File Juknis"
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
