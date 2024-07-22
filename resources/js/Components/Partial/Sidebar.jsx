import {
    Clipboard,
    NotePencil,
    SquaresFour,
    WarningCircle,
} from "@phosphor-icons/react";
import SidebarButton from "../Ui/sidebarButton";
import { router } from "@inertiajs/react";

export default function Sidebar({ url }) {
    const handleLogout = () => {
        router.get("/logout");
    };
    return (
        <div className="w-1/5 bg-[#2B1577] h-screen py-10 flex flex-col justify-between">
            <div className="space-y-16">
                <div className="px-4">
                    <h1 className="text-white font-bold text-2xl text-center">
                        LOGATAMA XVII
                    </h1>
                </div>
                <div className="pl-10 text-white space-y-2">
                    <SidebarButton
                        active={url === "/admin-logatama/dashboard"}
                        icon={SquaresFour}
                        text="Dashboard"
                        link="/admin-logatama/dashboard"
                    />
                    <SidebarButton
                        active={url === "/admin-logatama/pengumuman"}
                        icon={WarningCircle}
                        text="Pengumuman"
                        link="/admin-logatama/pengumuman"
                    />
                    <SidebarButton
                        active={url === "/admin-logatama/soal"}
                        icon={NotePencil}
                        text="Soal LCTP"
                        link="/admin-logatama/soal"
                    />
                    <SidebarButton
                        active={url === "/admin-logatama/rekap-juara"}
                        icon={Clipboard}
                        text="Rekap Juara"
                        link="/admin-logatama/rekap-juara"
                    />
                </div>
            </div>
            <div className="text-center">
                <button
                    className="bg-white rounded-lg text-[#2B1577] font-medium px-10 py-2"
                    onClick={handleLogout}
                >
                    Keluar
                </button>
            </div>
        </div>
    );
}
