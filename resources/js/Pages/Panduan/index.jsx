import Footer from "@/Components/Partial/Footer";
import NavbarLogatama from "@/Components/Partial/NavbarLogatama";
import Administrasi from "@/Layouts/Panduan/Administrasi";
import DenahLayout from "@/Layouts/Panduan/Denah";
import PanduanLayout from "@/Layouts/Panduan/Panduan";
import Pertanyaan from "@/Layouts/Panduan/Pertanyaan";
import Syarat from "@/Layouts/Panduan/Syarat";

export default function PanduanPage() {
    return (
        <>
            <header>
                <NavbarLogatama />
            </header>
            <PanduanLayout />
            <Syarat />
            <Administrasi />
            <DenahLayout />
            <Pertanyaan />
            <footer className="bg-[#775DD1]">
                <Footer />
            </footer>
        </>
    );
}
