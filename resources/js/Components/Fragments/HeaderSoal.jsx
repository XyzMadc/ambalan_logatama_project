import { CaretLeft } from "@phosphor-icons/react";

export default function HeaderSoal() {
    return (
        <header className="flex justify-between bg-white p-4 shadow-xl">
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
    );
}
