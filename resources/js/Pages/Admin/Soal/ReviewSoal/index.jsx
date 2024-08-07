import ContentSoal from "@/Components/Fragments/ContentSoal";
import HeaderSoal from "@/Components/Fragments/HeaderSoal";
import { CaretLeft, Check, List, Plus, Trash, X } from "@phosphor-icons/react";

export default function ReviewSoal() {
    return (
        <>
            <section className="min-h-screen w-full bg-neutral-300">
                <HeaderSoal />
                <ContentSoal />
                {/* <header className="flex justify-between bg-white p-4 shadow-xl">
                    <div className="flex gap-2 text-secondary items-center">
                        <button>
                            <CaretLeft size={24} weight="bold" />
                        </button>
                        <h1 className="font-bold text-sm">
                            SOAL LCTP PENYISIHAN GOLONGAN PENEGAK
                        </h1>
                    </div>
                    <button className="bg-secondary text-white font-bold py-[6px] px-4 rounded-xl text-sm">
                        Simpan
                    </button>
                </header>
                <main className="px-10 py-4 space-y-4">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex gap-4 text-secondary font-bold">
                            <h2>45 SOAL</h2>
                            <h3 className="text-slate-500">(45 poin)</h3>
                        </div>
                        <button className="bg-secondary text-white flex items-center gap-3 justify-center font-semibold py-2 px-4 rounded-xl">
                            <Plus size={20} />
                            <p>Tambahkan Soal</p>
                        </button>
                    </div>
                    <div className="overflow-y-auto space-y-4 h-[28rem] none-scrollbar">
                        <div className="p-5 bg-white rounded text-secondary font-semibold space-y-3 text-xs">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3">
                                    <button className="p-1 rounded border border-slate-400">
                                        <List size={16} />
                                    </button>
                                    <div className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                                        <p>Pilihan Ganda</p>
                                    </div>
                                    <div className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                                        <p>1 poin</p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                                        Edit
                                    </button>
                                    <button className="p-1 rounded border border-slate-400">
                                        <Trash size={16} />
                                    </button>
                                </div>
                            </div>
                            <p className="mb-2">
                                Bisa membuat perencanaan setiap akan melakukan
                                tindakan merupakan contoh penerapan dasa darma
                                nomor...
                            </p>
                            <p className="text-slate-400">Pilihan Jawaban</p>
                            <div className="grid grid-flow-col grid-rows-3 gap-4">
                                <div className="flex gap-1 items-center">
                                    <X color="red" />
                                    <p>3</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <Check color="green" />
                                    <p>7</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <X color="red" />
                                    <p>2</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <X color="red" />
                                    <p>6</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <X color="red" />
                                    <p>4</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="bg-secondary text-white flex items-center gap-3 justify-center font-semibold py-2 px-4 rounded-xl text-sm mx-auto">
                        <Plus size={20} />
                        <p>Tambahkan Soal</p>
                    </button>
                </main> */}
            </section>
        </>
    );
}
