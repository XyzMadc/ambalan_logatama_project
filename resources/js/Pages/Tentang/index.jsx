import Footer from "@/Components/Partial/Footer";
import NavbarAmbalan from "@/Components/Partial/NavbarAmbalan";
import HeroSection from "@/Layouts/Tentang/HeroSection";
import History from "@/Layouts/Tentang/History";
import Organization from "@/Layouts/Tentang/Organization";
import Sejarah from "@/Layouts/Tentang/Sejarah";
import { Head } from "@inertiajs/react";

export default function TentangPage() {
    return (
        <>
            <Head title="About" />
            <NavbarAmbalan />
            <HeroSection />
            <History />
            <Sejarah />
            <Organization />
            <Footer />
        </>
    );
}
