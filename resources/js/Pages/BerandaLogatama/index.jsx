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
      <Judul />
      <LombaGalang />
      <Pendaftaran />
      <Linimasa />
      <Jenjang />
      <Merchandise />
      <Jigle />
      <Teaser />
      <footer className="bg-[#633FCA]">
        <Footer />
      </footer>
    </>
  );
}
