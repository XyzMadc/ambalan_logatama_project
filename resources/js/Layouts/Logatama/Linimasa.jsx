import { NotePencil } from "@phosphor-icons/react";
import blueWave from "../../../assets/logatama/ombak-biru.png";
import purpleWave from "../../../assets/logatama/ombak-ungu.png";

export default function Linimasa() {
    return (
        <section className="h-[70vh] md:h-fit relative">
            <img
                className="absolute -bottom-1 md:-bottom-1"
                src={purpleWave}
                alt=""
            />
            <img
                className="absolute -bottom-2 md:-bottom-8"
                src={blueWave}
                alt=""
            />
            <div className="flex py-[15vh] md:pb-[45vh] md:pt-[20vh] justify-center">
                <div className="py-10 px-16 space-y-4 w-[80vw] rounded-2xl bg-secondary text-center">
                    <div className="flex justify-center">
                        <NotePencil size={80} color="white" />
                    </div>
                    <div className="text-white">
                        <h3 className="font-bold text-lg">Pendaftaran</h3>
                        <span className="text-xs font-light">
                            10 Februari 2025
                        </span>
                    </div>
                    <div className="flex justify-center relative">
                        <div className="bg-white rounded-xl flex justify-center items-center size-8">
                            <span className="text-sm font-bold">1</span>
                        </div>
                        <div className="border-2 border-white w-[6.7rem] absolute bottom-3 left-[4.6rem]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
