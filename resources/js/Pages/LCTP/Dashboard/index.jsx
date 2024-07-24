import Logatama from "../../../../assets/logatama.png";
import Galaxy from "../../../../assets/apen/bg 1.png";
import { usePage } from "@inertiajs/react";

export default function DashboardSoal() {
    const { props } = usePage();
    const { userTestData } = props;
    function capitalizeFirstLetter(str) {
        if (str.length === 0) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <>
            <main className="min-h-screen overflow-hidden">
                <nav className="bg-gradient-to-t from-primary via-secondary to-tertiary relative overflow-hidden h-[20vh]">
                    <div className="absolute -top-[85vh]">
                        <img src={Galaxy} className="w-screen" alt="" />
                    </div>
                    <div className="absolute inset-0 px-32 py-10">
                        <div className="flex justify-between">
                            <div>
                                <figure className="w-40">
                                    <img
                                        src={Logatama}
                                        className="object-cover w-full"
                                        alt=""
                                    />
                                </figure>
                                <span className="text-white font-bold">
                                    “Show Your Ability with Innovative Culture
                                    and Technology”
                                </span>
                            </div>
                            <button className="bg-white text-secondary font-semibold px-10 rounded">
                                LOGOUT
                            </button>
                        </div>
                    </div>
                </nav>
                <section className="py-10 px-16 space-y-5">
                    <h3 className="text-xl font-semibold text-secondary">
                        Untuk Anda
                    </h3>
                    <div className="bg-gradient-to-t from-[#32108E] from-70% via-[#532FB6] to-[#633FCA] text-white rounded-lg shadow-md max-w-sm">
                        <div className="relative py-3 px-8">
                            <h2 className="text-xl font-semibold mt-9">
                                Soal LCTP {capitalizeFirstLetter(userTestData.tingkat)}
                            </h2>
                            <div className="absolute top-4 -right-10 bg-red-500 text-base px-3 py-1 font-semibold">
                                {userTestData.status}
                            </div>
                        </div>
                        <div className="border-4 border-[#32108E] rounded-b-lg bg-white text-secondary">
                            <div className="px-5 py-5 pb-10 text-sm font-bold space-y-2">
                                <div className="flex justify-between items-center mb-4">
                                    <h4>{userTestData.jumlahSoal}</h4>
                                    <h4>{userTestData.waktu}</h4>
                                </div>
                                <h4>LCTP {capitalizeFirstLetter(userTestData.tingkat)}</h4>
                                <h4>/lctp/soal/{userTestData.team_id}</h4>
                                <h4>{userTestData.mulai} - {userTestData.berakhir.split(' ')[3]}</h4>
                            </div>
                            <div className="flex justify-between items-center p-5 border-t border-[#3A1797]">
                                <span className="text-[#5431B8] text-sm font-medium">
                                    {userTestData.tesStatus}
                                </span>
                                <button className="bg-[#5431B8] hover:bg-primary transition-colors duration-150 ease-in text-white font-semibold px-5 py-1 rounded">
                                    {/* nanti redirect /lctp/soa/{userTestData.team_id} */}
                                    MASUK KE SOAL
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
