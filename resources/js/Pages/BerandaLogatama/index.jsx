import Footer from "@/Components/Partial/Footer";
import NavbarLogatama from "@/Components/Partial/NavbarLogatama";
import Jenjang from "@/Layouts/Logatama/Jenjang";
import Jigle from "@/Layouts/Logatama/Jigle";
import Judul from "@/Layouts/Logatama/Judul";
import Linimasa from "@/Layouts/Logatama/Linimasa";
import LombaGalang from "@/Layouts/Logatama/LombaGalang";
import Merchandise from "@/Layouts/Logatama/Merchandise";
import Pendaftaran from "@/Layouts/Logatama/Pendaftaran";
import Teaser from "@/Layouts/Logatama/Teaser";
import { Head } from "@inertiajs/react";

export default function LogatamaPage() {
    return (
        <>
            <Head title="Beranda" />
            <NavbarLogatama />
            <main className="bg-secondary">
                <Judul />
                <LombaGalang />
                <Pendaftaran />
                <Linimasa />
                <Jenjang />
                <Merchandise />
                <Jigle />
                <Teaser />
            </main>
            <footer className="bg-[#633FCA]">
                <Footer />
            </footer>
        </>
    );
}
