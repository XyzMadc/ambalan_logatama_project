import Footer from "@/Components/Partial/Footer";
import NavbarAmbalan from "@/Components/Partial/NavbarAmbalan";
import AjangPerlombaan from "@/Layouts/Kegiatan/AjangPerlombaan";
import BhaktiSoekma from "@/Layouts/Kegiatan/BhaktiSoekma";
import HeroSection from "@/Layouts/Kegiatan/HeroSection";
import Kegiatan from "@/Layouts/Kegiatan/Kegiatan";
import LatihanRutin from "@/Layouts/Kegiatan/LatihanRutin";
import Opk from "@/Layouts/Kegiatan/Opk";
import Pasukan14 from "@/Layouts/Kegiatan/Pasukan14";
import Pembantaran from "@/Layouts/Kegiatan/Pembantaran";
import Pjs from "@/Layouts/Kegiatan/Pjs";
import Recruitment from "@/Layouts/Kegiatan/Recruitment";

export default function KegiatanPage() {
    return (
        <>
            <NavbarAmbalan />
            <main className="min-w-full overflow-hidden">
                <HeroSection />
                <Kegiatan />
                <Pasukan14 />
                <Recruitment />
                <LatihanRutin />
                <Pembantaran />
                <Opk />
                <Pjs />
                <BhaktiSoekma />
                <AjangPerlombaan />
            </main>
            <Footer />
        </>
    );
}
