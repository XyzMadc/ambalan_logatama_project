import Footer from "@/Components/Partial/Footer";
import NavbarLogatama from "@/Components/Partial/NavbarLogatama";
import Dokumentasi from "@/Layouts/Pengumuman/Dokumentasi";
import PengumumanLayout from "@/Layouts/Pengumuman/Pengumuman";
import Rekapitulasi from "@/Layouts/Pengumuman/Rekap";
import TechnicalMeeting from "@/Layouts/Pengumuman/TM";
import { Head } from "@inertiajs/react";

export default function PengumumanPage() {
    return (
        <>
            <Head title="Pengumuman" />
            <header>
                <NavbarLogatama />
            </header>
            <PengumumanLayout />
            <TechnicalMeeting />
            <Rekapitulasi />
            <Dokumentasi />
            <footer className="bg-[#633FCA]">
                <Footer />
            </footer>
        </>
    );
}
