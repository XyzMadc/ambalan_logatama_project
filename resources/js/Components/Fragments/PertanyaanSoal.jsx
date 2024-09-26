import { List, Trash } from "@phosphor-icons/react";
import AnswerSoal from "./AnswerSoal";

export default function PertanyaanSoal({id,semuaPilihan}) {
    return (
        <div className="p-5 bg-white rounded text-secondary font-semibold space-y-3 text-xs">
            <div className="flex justify-between items-center">
                <div className="flex gap-3">
                    <button className="p-1 rounded border border-slate-400 text-secondary">
                        <List size={16} />
                    </button>
                    <div className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                        <p>Pilihan Ganda</p>
                    </div>
                    <div className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                        <p>{id.poin} poin</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="py-1 px-4 flex items-center justify-center rounded border border-slate-400">
                        Edit
                    </button>
                    <button className="p-1 rounded border border-slate-400 text-secondary">
                        <Trash size={16} />
                    </button>
                </div>
            </div>
            <p className="mb-2">
                {id.pertanyaan}
            </p>
            <p className="text-slate-400">Pilihan Jawaban</p>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
            {semuaPilihan.map((pilihan, index) => (
                <AnswerSoal key={index} isCorrect={false} answer={pilihan} />
            ))}
                {/* <AnswerSoal isCorrect={false} answer="4" /> */}
            </div>
        </div>
    );
}
