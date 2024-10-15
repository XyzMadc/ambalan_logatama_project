import { useEffect, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import { Spinner } from "@chakra-ui/react";

export default function Rekapitulasi() {
    const { props } = usePage();
    const { pesertaRekapitulasi, bidangList } = props;
    const [activeTab, setActiveTab] = useState("PENGGALANG");
    const [currentBidang, setCurrentBidang] = useState(
        pesertaRekapitulasi.bidang
    );
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(false);
    }, [props]);

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    const handleNext = () => {
        const currentIndex = bidangList.indexOf(currentBidang);
        const nextIndex = (currentIndex + 1) % bidangList.length;
        const nextBidang = bidangList[nextIndex];

        if (currentIndex === bidangList.length - 1) return;
        setCurrentBidang(nextBidang);
        setIsLoading(true);
        router.visit(`/pengumuman?bidang=${nextBidang}`, {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => setIsLoading(false),
        });
    };

    const handlePrevious = () => {
        const currentIndex = bidangList.indexOf(currentBidang);
        const prevIndex =
            (currentIndex - 1 + bidangList.length) % bidangList.length;
        const prevBidang = bidangList[prevIndex];

        if (currentIndex === 0) return;
        setCurrentBidang(prevBidang);
        setIsLoading(true);
        router.visit(`/pengumuman?bidang=${prevBidang}`, {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => setIsLoading(false),
        });
    };

    const formatBidangName = (bidang) => {
        return bidang
            .split("_")
            .map((kata) => kata.charAt(0) + kata.slice(1))
            .join(" ");
    };

    return (
        <section className="bg-gradient-to-b from-[#0E062A] to-[#2B1577] text-center pb-5">
            <svg viewBox="0 0 100 25" className="rotate-180">
                <path d="M0,25 Q50,0 100,25 L100,50 L0,50 Z" fill="#fff" />
            </svg>
            <div className="text-white space-y-5">
                <h1 className="font-semibold text-lg xl:text-3xl uppercase">
                    Rekapitulasi Kejuaraan
                </h1>
                <div className="p-1 rounded-lg bg-white text-sm w-60 xl:w-[20rem] mx-auto flex justify-between">
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
                <h3 className="font-semibold uppercase text-lg xl:text-2xl text-slate-300">
                    {activeTab === "PENGGALANG"
                        ? "BIDANG " +
                          formatBidangName(currentBidang) +
                          " PENGGALANG"
                        : "BIDANG " +
                          formatBidangName(currentBidang) +
                          " PENEGAK"}
                </h3>
            </div>
            <div className="flex justify-center px-2 xl:px-20 gap-1 xl:gap-5">
                <div className="my-auto">
                    <button
                        className={`text-4xl xl:text-6xl text-white font-bold p-1 ${
                            currentBidang === bidangList[0]
                                ? "cursor-not-allowed"
                                : "hover:text-primary"
                        }`}
                        onClick={handlePrevious}
                        disabled={currentBidang === bidangList[0]}
                    >
                        &lt;
                    </button>
                </div>
                <div className="text-white space-y-4 xl:space-y-8 flex-1">
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg xl:text-2xl text-slate-300">
                            PUTRA
                        </h3>
                        <div>
                            {(activeTab === "PENGGALANG"
                                ? pesertaRekapitulasi.penggalang.putra
                                : pesertaRekapitulasi.penegak.putra
                            ).map((peserta, index) => (
                                <div
                                    key={index}
                                    className="odd:bg-gradient-to-t odd:from-[#32108E] odd:to-[#532FB6] even:bg-[#633FCA] border-2 border-[#A586FF] py-2 px-3 xl:py-4 xl:px-6 rounded-2xl flex justify-between items-center font-semibold"
                                >
                                    <div className="flex gap-3 items-center">
                                        <span>{index + 1}.</span>
                                        {isLoading ? (
                                            <Spinner />
                                        ) : (
                                            <h4 className="text-sm xl:text-base font-medium capitalize">
                                                {peserta.pangkalan}
                                            </h4>
                                        )}
                                    </div>
                                    {isLoading ? (
                                        <Spinner />
                                    ) : (
                                        <span>{peserta[currentBidang]}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold text-lg xl:text-2xl text-slate-300">
                            PUTRI
                        </h3>
                        <div>
                            {(activeTab === "PENGGALANG"
                                ? pesertaRekapitulasi.penggalang.putri
                                : pesertaRekapitulasi.penegak.putri
                            ).map((peserta, index) => (
                                <div
                                    key={index}
                                    className="odd:bg-gradient-to-t odd:from-[#32108E] odd:to-[#532FB6] even:bg-[#633FCA] border-2 border-[#A586FF] py-2 px-3 xl:py-4 xl:px-6 rounded-2xl flex justify-between items-center font-semibold"
                                >
                                    <div className="flex gap-3 items-center">
                                        <span>{index + 1}.</span>
                                        {isLoading ? (
                                            <Spinner />
                                        ) : (
                                            <h4 className="text-sm xl:text-base font-medium capitalize">
                                                {peserta.pangkalan}
                                            </h4>
                                        )}
                                    </div>
                                    {isLoading ? (
                                        <Spinner />
                                    ) : (
                                        <span>{peserta[currentBidang]}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="my-auto">
                    <button
                        className={`text-4xl xl:text-6xl text-white font-bold p-1 ${
                            currentBidang === bidangList[bidangList.length - 1]
                                ? "cursor-not-allowed"
                                : "hover:text-primary"
                        }`}
                        onClick={handleNext}
                        disabled={
                            currentBidang === bidangList[bidangList.length - 1]
                        }
                    >
                        &gt;
                    </button>
                </div>
            </div>
            <button className="bg-white rounded-2xl py-2 xl:py-3 px-8 text-secondary font-bold text-xs xl:text-sm mt-10 hover:scale-110 transition-all duration-200">
                Lihat Rekapitulasi Nilai
            </button>
        </section>
    );
}
