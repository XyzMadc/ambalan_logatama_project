import { CaretDown } from "@phosphor-icons/react";
import asetPutra from "../../../assets/pengumuman/aset-pramuka-putra-vr.png";
import asetPutri from "../../../assets/pengumuman/aset-pramuka-putri-vr.png";
import Background from "../../../assets/pengumuman/bg-beranda.png";
import announcements from "../../Services/pengumuman.json";

export default function PengumumanLayout() {
    return (
        <section className="h-[115vh] xl:h-[150vh] bg-gradient-to-b from-[#0E062A] via-[#2B1577] to-[#775DD1] flex flex-col overflow-hidden w-full">
            <div className="h-3/5 xl:h-[100vh] flex items-end text-white relative justify-center">
                <img
                    className="w-screen absolute object-cover top-20 scale-125 xl:scale-100"
                    src={Background}
                    alt=""
                />
                <img
                    className="absolute w-[120px] xl:w-[20rem] right-5 xl:right-20 bottom-[4rem] xl:bottom-0"
                    src={asetPutra}
                    alt=""
                />
                <img
                    className="absolute w-24 xl:w-[16rem] left-5 xl:left-20 bottom-16 xl:bottom-0"
                    src={asetPutri}
                    alt=""
                />
                <div className="absolute bottom-12 xl:bottom-40">
                    <h1 className="font-bold text-lg xl:text-5xl text-center">
                        PENGUMUMAN <br /> LOGATAMA XVII
                    </h1>
                    <div className="flex justify-center">
                        <button
                            // onClick={handleClick}
                            className="text-secondary bg-white p-1 rounded-full mt-10 hover:text-primary transition-all duration-300 ease-in-out cursor-pointer"
                        >
                            <CaretDown size={35} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-2/5 p-10 xl:p-20 flex gap-5 xl:gap-10 snap-mandatory snap-x overflow-x-auto relative">
                {announcements.map((announce, index) => (
                    <div
                        key={index}
                        className="p-5 bg-white rounded-2xl text-secondary space-y-3 w-64 h-72 snap-center flex-shrink-0"
                    >
                        <div className="text-white rounded-lg bg-secondary px-2 py-1 max-w-fit">
                            <h5 className="text-xs font-semibold">
                                {announce.tanggal}
                            </h5>
                        </div>
                        <h3 className="font-bold text-xl uppercase">
                            {announce.judul}
                        </h3>
                        <p className="text-sm text-slate-400 capitalize">
                            informasi {announce.judul}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
