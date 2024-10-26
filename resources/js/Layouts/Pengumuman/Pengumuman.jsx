import { usePage } from "@inertiajs/react";
import { CaretDown } from "@phosphor-icons/react";
import asetPutra from "../../../assets/pengumuman/aset-pramuka-putra-vr.png";
import asetPutri from "../../../assets/pengumuman/aset-pramuka-putri-vr.png";
import Background from "../../../assets/pengumuman/bg-beranda.png";
import { useErrorToast } from "@/Utils/toastHandle";

export default function PengumumanLayout() {
    const { props } = usePage();
    const { announcements } = props;
    const errorToast = useErrorToast();

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getUTCDate()).padStart(2, "0");
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const year = date.getUTCFullYear();

        return `${day}/${month}/${year}`;
    };

    const handleClick = () => {
        if (announcements.length > 0) {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
            });
        } else {
            errorToast("Tidak ada pengumuman!");
        }
    };

    return (
        <section
            className={`${
                announcements.length > 0
                    ? "h-[115vh] xl:h-[150vh]"
                    : "h-[55vh] xl:h-screen"
            } bg-gradient-to-b from-[#0E062A] via-[#2B1577] to-[#775DD1] flex flex-col overflow-hidden w-full`}
        >
            <div
                className={`${
                    announcements.length > 0 ? "h-3/5" : "h-full"
                } xl:h-[100vh] flex items-end text-white relative justify-center`}
            >
                <img
                    className="w-screen absolute object-cover top-20 scale-125 xl:scale-100"
                    src={Background}
                    alt=""
                />
                <img
                    className="absolute w-[120px] xl:w-[18rem] right-5 xl:right-20 bottom-[4rem] xl:bottom-12"
                    src={asetPutra}
                    alt=""
                />
                <img
                    className="absolute w-24 xl:w-[14.5rem] left-5 xl:left-20 bottom-16 xl:bottom-10"
                    src={asetPutri}
                    alt=""
                />
                <div className="absolute bottom-12 xl:bottom-40">
                    <h1 className="font-bold text-lg xl:text-5xl text-center">
                        PENGUMUMAN <br /> LOGATAMA XVII
                    </h1>
                    <div className="flex justify-center">
                        <button
                            onClick={handleClick}
                            className="text-secondary bg-white p-1 rounded-full mt-10 hover:text-primary transition-all duration-300 ease-in-out"
                        >
                            <CaretDown size={35} />
                        </button>
                    </div>
                </div>
            </div>
            {announcements.length > 0 && (
                <div className="h-2/5 p-10 xl:p-20 flex gap-5 xl:gap-10 snap-mandatory snap-x overflow-x-auto overflow-y-hidden relative">
                    {announcements.map((announce, index) => (
                        <div
                            key={index}
                            className="p-5 bg-white rounded-2xl text-secondary space-y-3 w-64 h-72 snap-center flex-shrink-0"
                        >
                            <div className="text-white rounded-lg bg-secondary px-2 py-1 max-w-fit">
                                <h5 className="text-xs font-semibold">
                                    {formatDate(announce.created_at)}
                                </h5>
                            </div>
                            <h3 className="font-bold text-xl uppercase line-clamp-3">
                                {announce.judul}
                            </h3>
                            <p className="text-sm text-slate-400 capitalize line-clamp-5">
                                {announce.deskripsi}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
