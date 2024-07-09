import Denah from "../../../assets/panduan/denah.png";
import Map from "../../../assets/panduan/map.png";

export default function DenahLayout() {
    return (
        <section className="h-[40vh] xl:h-[60vh] relative xl:flex justify-center">
            <div className="absolute -top-20 xl:-top-[14rem] px-10">
                <div className="border-2 border-primary rounded-xl text-white p-5 xl:p-10 text-center bg-gradient-to-t from-[#32108E] via-[#532FB6] to-[#633FCA] space-y-5 w-[80vw] xl:w-[60vw]">
                    <h1 className="font-bold text-base xl:text-2xl">
                        DENAH LOKASI LOMBA
                    </h1>
                    <div className="border-2 w-full xl:w-[30rem] xl:mx-auto border-white" />
                    <div className="flex items-center justify-center gap-4">
                        <span>
                            <img src={Map} alt="" />
                        </span>
                        <h3 className="xl:text-lg">SMK Negeri 7 Semarang</h3>
                    </div>
                    <figure className="flex justify-center">
                        <img
                            className="w-60 xl:w-[32rem] object-cover"
                            src={Denah}
                            alt=""
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
