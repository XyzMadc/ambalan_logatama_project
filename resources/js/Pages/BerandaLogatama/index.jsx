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

export default function LogatamaPage() {
    return (
        <>
            <NavbarLogatama />
            <main className="bg-[#633FCA]">
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
