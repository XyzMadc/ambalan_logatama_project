import CardKegiatan from "../Ui/CardKegiatan";
import soekma1 from "../../assets/kegiatan/soekma-1.png";
import soekma2 from "../../assets/kegiatan/soekma-2.png";
import soekma3 from "../../assets/kegiatan/soekma-3.png";
import soekma4 from "../../assets/kegiatan/soekma-4.png";

export default function GaleryKegiatan() {
  return (
    <div className="snap-x snap-mandatory overflow-x-auto flex gap-7 border">
      <CardKegiatan href="#" src={soekma1} />
      <CardKegiatan href="#" src={soekma2} />
      <CardKegiatan href="#" src={soekma3} />
      <CardKegiatan href="#" src={soekma4} />
    </div>
  );
}
