import { Plus } from "@phosphor-icons/react";
import PertanyaanSoal from "./PertanyaanSoal";

export default function ContentSoal() {
    return (
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
            <div className="overflow-y-auto space-y-4 h-[30rem] none-scrollbar">
                <PertanyaanSoal />
            </div>
            <button className="bg-secondary text-white flex items-center gap-3 justify-center font-semibold py-2 px-4 rounded-xl text-sm mx-auto">
                <Plus size={20} />
                <p>Tambahkan Soal</p>
            </button>
        </main>
    );
}
