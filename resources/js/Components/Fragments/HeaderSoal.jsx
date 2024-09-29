import { Link } from "@inertiajs/react";
import { CaretLeft } from "@phosphor-icons/react";

export default function HeaderSoal({ tingkat }) {
    return (
        <header className="flex justify-between bg-white p-4 shadow-xl">
            <div className="flex gap-2 text-secondary items-center">
                <Link href="/admin-logatama/soal-lctp">
                    <CaretLeft size={24} weight="bold" />
                </Link>
                <h1 className="font-bold text-sm uppercase">
                    SOAL LCTP PENYISIHAN GOLONGAN {tingkat}
                </h1>
            </div>
            <button className="bg-secondary text-white font-bold py-[6px] px-4 rounded-xl text-sm">
                Simpan
            </button>
        </header>
    );
}
