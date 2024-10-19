import Runtime from "@/Components/Partial/Runtime";
import { Book, Megaphone, Note } from "@phosphor-icons/react";

export default function Pendaftaran() {
    return (
        <section className="relative bg-white">
            <div className="absolute hidden md:block -top-[20rem] bg-secondary text-white w-[70%] rounded-r-3xl p-7 text-left space-y-6">
                <h1 className="font-bold text-2xl md:text-3xl">
                    Lomba Galang Tegak Utama <br /> (LOGATAMA) XVIII
                </h1>
                <div className="border border-white w-full" />
                <p className="text-md md:text-lg">
                    Lomba galang tegak utama adalah Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                </p>
            </div>

            <div className="flex md:flex-row pb-20 justify-center md:gap-20 flex-col items-center gap-10">
                <Runtime
                    title="Pendaftaran"
                    text="m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e."
                    icon={Note}
                />
                <Runtime
                    title="Panduan"
                    text="m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e."
                    icon={Book}
                />
                <Runtime
                    title="Pengumuman"
                    text="m ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e."
                    icon={Megaphone}
                />
            </div>
        </section>
    );
}
