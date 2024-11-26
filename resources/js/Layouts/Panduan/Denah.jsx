import { MapPin } from "@phosphor-icons/react";
import Denah from "../../../assets/panduan/denah.png";

export default function DenahLayout() {
    return (
        <section className="h-[40vh] xl:h-[70vh] relative xl:flex justify-center">
            <div className="absolute -top-10 xl:-top-[10rem] px-10">
                <div className="border-2 border-primary rounded-xl text-white p-5 xl:p-10 text-center bg-gradient-to-t from-[#32108E] via-[#532FB6] to-[#633FCA] space-y-5 w-[80vw] xl:w-[60vw]">
                    <h1 className="font-bold text-base xl:text-2xl">
                        DENAH LOKASI LOMBA
                    </h1>
                    <div className="border-2 w-full xl:w-[30rem] xl:mx-auto border-white" />
                    <div className="flex items-center justify-center gap-4">
                        <MapPin size={24} weight="fill" />
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
