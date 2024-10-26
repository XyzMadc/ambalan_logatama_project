import Sidebar from "@/Components/Partial/Sidebar";
import { Head, usePage } from "@inertiajs/react";

export default function dashboardAdmin() {
    const { url, props } = usePage();
    const semuaBidang = props.semuaBidang;
    const semuaPeserta = props.peserta;
    return (
        <>
            <Head title="Admin Dashboard" />
            <section className="min-h-screen max-h-screen overflow-hidden flex">
                <Sidebar url={url} />
                <div className="w-4/5 p-10 space-y-10">
                    <div className="flex justify-center gap-16">
                        <div className="bg-[#2B1577] w-1/2 py-8 rounded-lg flex flex-col items-center justify-center gap-4">
                            <h3 className="text-2xl font-semibold text-white">
                                Total Peserta Penggalang
                            </h3>
                            <h2 className="text-3xl font-semibold text-white">
                                999999
                            </h2>
                        </div>
                        <div className="bg-[#2B1577] w-1/2 py-8 rounded-lg flex flex-col items-center justify-center gap-4">
                            <h3 className="text-2xl font-semibold text-white">
                                Total Peserta Penegak
                            </h3>
                            <h2 className="text-3xl font-semibold text-white">
                                999999
                            </h2>
                        </div>
                    </div>
                    <div className="snap-y snap-mandatory overflow-y-auto max-h-96 shadow-2xl">
                        {semuaBidang.map((bidang) => (
                            <div
                                id={bidang}
                                key={bidang}
                                className="space-y-4 rounded-lg p-6 font-semibold text-[#2B1577] snap-center"
                            >
                                <h1 className="text-lg">
                                    REKAPITULASI NILAI {bidang.toUpperCase()}{" "}
                                    PENGGALANG
                                </h1>
                                <div className="w-full border bg-[#2B1577]" />
                                <div className="space-y-3 px-5 py-1">
                                    {semuaPeserta.penggalang.map(
                                        (peserta, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center py-2 px-4 rounded-lg shadow-login-admin-atas text-sm"
                                            >
                                                <span>
                                                    {peserta.pangkalan +
                                                        " - " +
                                                        peserta.kategori}
                                                </span>
                                                <div className="flex gap-4 items-center">
                                                    <div className="rounded-lg py-1 px-8 border border-[#2B1577]">
                                                        <span>
                                                            {peserta[bidang]}
                                                        </span>
                                                    </div>
                                                    <button className="bg-[#2B1577] text-white rounded-lg py-1 px-10">
                                                        Detail
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                <h1 className="text-lg">
                                    REKAPITULASI NILAI {bidang.toUpperCase()}{" "}
                                    PENEGAK
                                </h1>
                                <div className="w-full border bg-[#2B1577]" />
                                <div className="space-y-3 px-5 py-1">
                                    {semuaPeserta.penegak.map(
                                        (peserta, index) => (
                                            <div
                                                key={index}
                                                className="flex justify-between items-center py-2 px-4 rounded-lg shadow-login-admin-atas text-sm"
                                            >
                                                <span>
                                                    {peserta.pangkalan +
                                                        " - " +
                                                        peserta.kategori}
                                                </span>
                                                <div className="flex gap-4 items-center">
                                                    <div className="rounded-lg py-1 px-8 border border-[#2B1577]">
                                                        <span>
                                                            {peserta[bidang]}
                                                        </span>
                                                    </div>
                                                    <button className="bg-[#2B1577] text-white rounded-lg py-1 px-10">
                                                        Detail
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
