import Sidebar from "@/Components/Partial/Sidebar";
import { usePage } from "@inertiajs/react";
import { ListBullets } from "@phosphor-icons/react";
import React from "react";

export default function SoalAdmin() {
    const { url } = usePage();
    return (
        <section className="min-h-screen overflow-hidden flex">
            <Sidebar url={url} />
            <div className="w-4/5 p-10 space-y-10 overflow-hidden max-h-screen">
                <div className="space-y-5">
                    <h1 className="text-xl font-semibold text-secondary">
                        Soal Lomba Cerdas Tangkas Pramuka
                    </h1>
                    <div className="flex justify-center gap-16 text-white">
                        <button className="bg-red-800 w-1/2 h-36 rounded-lg space-y-3 hover:bg-red-700 transition-colors duration-200 ease-in-out">
                            <h3 className="text-2xl font-semibold">
                                SOAL LCTP PENYISIHAN
                            </h3>
                            <h5 className="text-lg font-semibold">
                                GOLONGAN PENGGALANG
                            </h5>
                        </button>
                        <button className="bg-yellow-500 w-1/2 h-36 rounded-lg space-y-3 hover:bg-yellow-400 transition-colors duration-200 ease-in-out">
                            <h3 className="text-2xl font-semibold">
                                SOAL LCTP PENYISIHAN
                            </h3>
                            <h5 className="text-lg font-semibold">
                                GOLONGAN PENEGAK
                            </h5>
                        </button>
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="text-xl font-semibold text-secondary">
                        Dipublikasikan
                    </h1>
                    <div className="overflow-y-auto space-y-4 h-[22rem] none-scrollbar">
                        {/* tak kei 2 gawe contoh seko design, ngko muncul tergantung soal seng meh di publikasike */}
                        <div className="p-6 rounded-lg bg-secondary text-white space-y-2">
                            <div className="border-2 border-white rounded-lg py-1 px-4 w-fit font-semibold text-sm">
                                PENYISIHAN
                            </div>
                            <h2 className="text-2xl font-semibold">
                                SIMULASI 1 LCTP LOGATAMA GOLONGAN PENGGALANG
                            </h2>
                            <span className="text-sm ml-5 font-medium">
                                45 Soal
                            </span>
                            <div className="flex justify-between">
                                <button>
                                    <ListBullets size={20} />
                                </button>
                                <div className="flex gap-4">
                                    <button className="bg-white px-5 py-[6px] rounded-lg text-sm font-bold text-secondary">
                                        Hasil
                                    </button>
                                    <button className="bg-white px-5 py-[6px] rounded-lg text-sm font-bold text-secondary">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-lg bg-secondary text-white space-y-2">
                            <div className="border-2 border-white rounded-lg py-1 px-4 w-fit font-semibold text-sm">
                                PENYISIHAN
                            </div>
                            <h2 className="text-2xl font-semibold">
                                SIMULASI 1 LCTP LOGATAMA GOLONGAN PENGGALANG
                            </h2>
                            <span className="text-sm ml-5 font-medium">
                                45 Soal
                            </span>
                            <div className="flex justify-between">
                                <button>
                                    <ListBullets size={20} />
                                </button>
                                <div className="flex gap-4">
                                    <button className="bg-white px-5 py-[6px] rounded-lg text-sm font-bold text-secondary">
                                        Hasil
                                    </button>
                                    <button className="bg-white px-5 py-[6px] rounded-lg text-sm font-bold text-secondary">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
