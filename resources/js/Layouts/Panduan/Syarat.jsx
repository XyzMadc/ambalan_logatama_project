import CardSyarat from "@/Components/Partial/CardSyarat";
import syaratPendaftaran from "../../Services/syaratPendaftaran";

export default function Syarat() {
    return (
        <section className="h-screen xl:h-[110vh] pt-28 px-5 text-secondary space-y-10 text-center">
            <h1 className="font-bold text-2xl">SYARAT PENDAFTARAN</h1>
            <div className="space-y-5 xl:space-y-8">
                {syaratPendaftaran.map((syarat, index) => (
                    <CardSyarat key={index}>{syarat.text}</CardSyarat>
                ))}
            </div>
        </section>
    );
}
