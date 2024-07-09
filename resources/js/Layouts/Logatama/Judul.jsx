import Maskot from "../../../assets/logatama/maskot.png";
import galaxy from "../../../assets/apen/bg 1.png";
import galaxyMobile from "../../../assets/logatama/galaxy-mobile.png";

export default function Judul() {
    return (
        <section className="h-[90vh] bg-gradient-to-t from-primary via-secondary to-tertiary relative">
            <img className="w-screen md:hidden" src={galaxyMobile} alt="" />
            <img
                className="w-screen md:block hidden max-h-full"
                src={galaxy}
                alt=""
            />
            <main className="absolute inset-0">
                <div className="flex flex-col h-full justify-end px-5">
                    <figure className="flex justify-center">
                        <img
                            className="md:w-[300px] w-[200px]"
                            src={Maskot}
                            alt=""
                        />
                    </figure>
                    <div className="text-white space-y-3">
                        <h1 className="font-bold text-base">
                            Lomba Galang Tegak Utama <br /> (LOGATAMA) XVIII
                        </h1>
                        <p className="text-xs tracking-wide">
                            Salam Pramuka! <br />
                            Halo kakak-kakak dan adik-adik semua, terima kasih
                            telah mengunjungi website resmi logatama ini.
                            Logatama XVIII akan segera diadakan jadi bagi yang
                            berminat serta belum daftar silahkan lihat info
                            pendaftaran dan segera mendaftar. Ayo Buruan..!
                        </p>
                    </div>
                </div>
            </main>
        </section>
    );
}
