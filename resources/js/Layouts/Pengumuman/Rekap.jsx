import { useState } from "react";
import { usePage } from '@inertiajs/react';
// import pesertaRekapitulasi from "../../Services/pesertaRekapitulasi.json";

export default function Rekapitulasi() {
    const [activeTab, setActiveTab] = useState("PENGGALANG");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const { props } = usePage();
    const { pesertaRekapitulasi } = props;
    const bidang = pesertaRekapitulasi.bidang;

    return (
        <section className="h-screen xl:h-auto bg-gradient-to-b from-[#0E062A] to-[#2B1577] text-center xl:pb-[120px]">
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
                <h3 className="font-semibold text-lg xl:text-2xl text-slate-300">
                    {activeTab === "PENGGALANG"
                        ? "BIDANG " + bidang.toUpperCase() + " PENGGALANG"
                        : "BIDANG " + bidang.toUpperCase() + " PENEGAK"}
                </h3>
            </div>
            <div className="flex justify-center px-2 xl:px-20 gap-1 xl:gap-5">
                <div className="my-auto">
                    <button className="text-4xl xl:text-6xl text-white font-bold p-1">
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
                                        <span>{index + 1}</span>
                                        <h4 className="text-sm xl:text-base font-medium capitalize">
                                            {peserta.pangkalan}
                                        </h4>
                                    </div>
                                    <span>{peserta[bidang]}</span>
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
                                        <span>{index + 1}</span>
                                        <h4 className="text-sm xl:text-base font-medium capitalize">
                                        {peserta.pangkalan}
                                        </h4>
                                    </div>
                                    <span>{peserta[bidang]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <di className="my-auto">
                    <button className="text-4xl xl:text-6xl text-white font-bold p-1">
                        &gt;
                    </button>
                </di>
            </div>
            <button className="bg-white rounded-2xl py-2 xl:py-3 px-8 text-secondary font-bold text-xs xl:text-sm mt-10">
                Lihat Rekapitulasi Nilai
            </button>
        </section>
    );
}
