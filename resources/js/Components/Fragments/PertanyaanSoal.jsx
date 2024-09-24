import { List, Trash } from "@phosphor-icons/react";
import AnswerSoal from "./AnswerSoal";

export default function PertanyaanSoal() {
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
                        <p>1 poin</p>
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
                Bisa membuat perencanaan setiap akan melakukan tindakan
                merupakan contoh penerapan dasa darma nomor...
            </p>
            <p className="text-slate-400">Pilihan Jawaban</p>
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <AnswerSoal isCorrect={false} answer="3" />
                <AnswerSoal isCorrect={true} answer="7" />
                <AnswerSoal isCorrect={false} answer="2" />
                <AnswerSoal isCorrect={false} answer="6" />
                <AnswerSoal isCorrect={false} answer="4" />
            </div>
        </div>
    );
}
