import Footer from "@/Components/Partial/Footer";
import NavbarLogatama from "@/Components/Partial/NavbarLogatama";
import HeroSection from "@/Layouts/Tentang/HeroSection";
import History from "@/Layouts/Tentang/History";
import Organization from "@/Layouts/Tentang/Organization";
import Sejarah from "@/Layouts/Tentang/Sejarah";
import { Head } from "@inertiajs/react";

export default function TentangPage() {
    return (
        <>
            <Head title="Tentang" />
            <NavbarLogatama />
            <HeroSection />
            <History />
            <Sejarah />
            <Organization />
            <Footer />
        </>
    );
}
