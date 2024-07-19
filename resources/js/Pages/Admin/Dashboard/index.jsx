import Sidebar from "@/Components/Partial/Sidebar";
import { usePage } from "@inertiajs/react";

export default function dashboardAdmin() {
    const { url } = usePage();
    return (
        <section className="min-h-screen overflow-hidden flex">
            <Sidebar url={url} />
            <div className="w-4/5 p-10 space-y-10">
                <div className="flex justify-center gap-16">
                    <div className="bg-[#2B1577] w-1/3 h-36 rounded-lg" />
                    <div className="bg-[#2B1577] w-1/3 h-36 rounded-lg" />
                    <div className="bg-[#2B1577] w-1/3 h-36 rounded-lg" />
                </div>
                <div className="snap-y snap-mandatory overflow-y-auto max-h-96 shadow-2xl">
                    <div
                        id="lctp"
                        className="space-y-4 rounded-lg p-6 font-semibold text-[#2B1577] snap-center"
                    >
                        <h1 className="text-lg">
                            REKAPITULASI NILAI LCTP PENGGALANG
                        </h1>
                        <div className="w-full border bg-[#2B1577]" />
                        <div className="space-y-3 px-5 py-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center py-2 px-4 rounded-lg shadow-login-admin-atas text-sm"
                                >
                                    <span>Peserta</span>
                                    <div className="flex gap-4 items-center">
                                        <div className="rounded-lg py-1 px-8 border border-[#2B1577]">
                                            <span>000.000</span>
                                        </div>
                                        <button className="bg-[#2B1577] text-white rounded-lg py-1 px-10">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        id="lctp"
                        className="space-y-4 rounded-lg p-6 font-semibold text-[#2B1577] snap-center"
                    >
                        <h1 className="text-lg">
                            REKAPITULASI NILAI LCTP PENEGAK
                        </h1>
                        <div className="w-full border bg-[#2B1577]" />
                        <div className="space-y-3 px-5 py-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center py-2 px-4 rounded-lg shadow-login-admin-atas text-sm"
                                >
                                    <span>Peserta</span>
                                    <div className="flex gap-4 items-center">
                                        <div className="rounded-lg py-1 px-8 border border-[#2B1577]">
                                            <span>000.000</span>
                                        </div>
                                        <button className="bg-[#2B1577] text-white rounded-lg py-1 px-10">
                                            Detail
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
