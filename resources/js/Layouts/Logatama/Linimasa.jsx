import {
    FileArrowUp,
    NotePencil,
    Trophy,
    UsersThree,
} from "@phosphor-icons/react";
import blueWave from "../../../assets/logatama/ombak-biru.png";
import purpleWave from "../../../assets/logatama/ombak-ungu.png";

export default function Linimasa() {
    return (
        <section className="h-[90vh] md:h-[130vh] relative bg-white">
            <img
                className="absolute -bottom-1 md:bottom-0"
                src={purpleWave}
                alt=""
            />
            <img
                className="absolute -bottom-2 md:-bottom-6"
                src={blueWave}
                alt=""
            />
            <div className="py-[15vh] text-center">
                <h2 className="text-3xl font-bold text-secondary mb-10">
                    Linimasa
                </h2>
                <div className="max-w-72 xl:max-w-fit overflow-x-auto snap-x snap-mandatory rounded-3xl mx-auto py-10 bg-secondary shadow-2xl">
                    <div className="flex">
                        <div className="text-white w-72 flex-shrink-0 flex flex-col items-center gap-6 snap-center">
                            <NotePencil size={100} />
                            <div>
                                <h3 className="text-center font-bold text-lg">
                                    Pendaftaran
                                </h3>
                                <p className="text-center text-sm text-gray-300">
                                    10 Februari 2025
                                </p>
                            </div>
                            <div className="flex items-center w-full justify-end">
                                <div className="py-1.5 px-3.5 bg-white text-secondary rounded-lg flex items-center justify-center font-bold">
                                    1
                                </div>
                                <div className="h-1 w-32 bg-white" />
                            </div>
                        </div>

                        <div className="text-white w-72 flex-shrink-0 flex flex-col items-center gap-6 snap-center">
                            <UsersThree size={100} />
                            <div>
                                <h3 className="text-center font-bold text-lg">
                                    Technical Meeting
                                </h3>
                                <p className="text-center text-sm text-gray-300">
                                    23 Februari 2025
                                </p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="h-1 w-32 bg-white" />
                                <div className="py-1.5 px-3.5 bg-white text-secondary rounded-lg flex items-center justify-center font-bold">
                                    2
                                </div>
                                <div className="h-1 w-32 bg-white" />
                            </div>
                        </div>

                        <div className="text-white w-72 flex-shrink-0 flex flex-col items-center gap-6 snap-center">
                            <FileArrowUp size={100} />
                            <div>
                                <h3 className="text-center font-bold text-lg">
                                    Pengumpulan Karya
                                </h3>
                                <p className="text-center text-sm text-gray-300">
                                    5 Maret 2025
                                </p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="h-1 w-32 bg-white" />
                                <div className="py-1.5 px-3.5 bg-white text-secondary rounded-lg flex items-center justify-center font-bold">
                                    3
                                </div>
                                <div className="h-1 w-32 bg-white" />
                            </div>
                        </div>

                        <div className="text-white w-72 flex-shrink-0 flex flex-col items-center gap-6 snap-center">
                            <Trophy size={100} />
                            <div>
                                <h3 className="text-center font-bold text-lg">
                                    Pelaksanaan Lomba
                                </h3>
                                <p className="text-center text-sm text-gray-300">
                                    12 Maret 2025
                                </p>
                            </div>
                            <div className="flex items-center w-full">
                                <div className="h-1 w-32 bg-white" />
                                <div className="py-1.5 px-3.5 bg-white text-secondary rounded-lg flex items-center justify-center font-bold">
                                    4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
