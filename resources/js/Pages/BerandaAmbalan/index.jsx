import Footer from "@/Components/Partial/Footer";
import NavbarAmbalan from "@/Components/Partial/NavbarAmbalan";
import AboutSection from "@/Layouts/Beranda/AboutSection";
import AddressSection from "@/Layouts/Beranda/AddressSection";
import GalerySection from "@/Layouts/Beranda/GalerySection";
import HeroSection from "@/Layouts/Beranda/HeroSection";
import QuoteSection from "@/Layouts/Beranda/QuoteSection";
import { Head } from "@inertiajs/react";

export default function BerandaPage() {
    return (
        <>
            <Head title="Beranda" />
            <NavbarAmbalan />
            <main className="min-w-full overflow-hidden">
                <HeroSection />
                <AboutSection />
                <GalerySection />
                <QuoteSection />
                <AddressSection />
            </main>
            <Footer />
        </>
    );
}
