import { Plus } from "@phosphor-icons/react";
import PertanyaanSoal from "./PertanyaanSoal";
import { Link } from "@inertiajs/react";

export default function ContentSoal({ data_review_soal, tingkat }) {
    return (
        <main className="px-10 py-4 space-y-4">
            <div className="flex justify-between items-center text-sm">
                <div className="flex gap-4 text-secondary font-bold">
                    <h2>{data_review_soal.length} SOAL</h2>
                    <h3 className="text-slate-500">
                        (
                        {data_review_soal.reduce(
                            (accumulator, currentItem) =>
                                accumulator + currentItem.poin,
                            0
                        )}{" "}
                        poin)
                    </h3>
                </div>
                <Link
                    href={`/admin-logatama/daftar-soal/${tingkat}/create`}
                    className="bg-secondary text-white flex items-center gap-3 justify-center font-semibold py-2 px-4 rounded-xl"
                >
                    <Plus size={20} />
                    <p>Tambahkan Soal</p>
                </Link>
            </div>
            <div className="overflow-y-auto space-y-4 none-scrollbar">
                {data_review_soal.map((data) => (
                    <PertanyaanSoal
                        key={data.id}
                        data={data}
                        questionOptions={JSON.parse(data.pilihan)}
                    />
                ))}
            </div>
            <Link
                href={`/admin-logatama/daftar-soal/${tingkat}/create`}
                className="bg-secondary text-white flex items-center gap-3 justify-center font-semibold py-2 px-4 rounded-xl text-sm mx-auto w-fit"
            >
                <Plus size={20} />
                <p>Tambahkan Soal</p>
            </Link>
        </main>
    );
}
