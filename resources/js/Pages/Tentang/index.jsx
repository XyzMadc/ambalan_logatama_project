import Footer from "@/Components/Partial/Footer";
import NavbarAmbalan from "@/Components/Partial/NavbarAmbalan";
import HeroSection from "@/Layouts/Tentang/HeroSection";
import History from "@/Layouts/Tentang/History";
import Organization from "@/Layouts/Tentang/Organization";
import Sejarah from "@/Layouts/Tentang/Sejarah";

export default function TentangPage() {
  return (
    <>
      <NavbarAmbalan />
      <HeroSection />
      <History />
      <Sejarah />
      <Organization />
      <Footer />
    </>
  );
}
