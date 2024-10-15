import lombaGalangMobile from "../../../assets/logatama/lomba-galang-mobile.png";

export default function LombaGalang() {
    return (
        <section className="overflow-hidden w-full text-center md:h-[90vh] h-[70vh] relative">
            <figure className="relative">
                <img className="w-[150vw]" src={lombaGalangMobile} alt="" />
                <div className="absolute inset-0 bg-primary bg-opacity-30" />
            </figure>
            <svg viewBox="0 0 100 25" className="absolute top-0 rotate-180">
                <path d="M0,21 Q50,0 120,25 L0,30 L0,0 Z" fill="#775DD1" />
            </svg>

            <div className="absolute md:hidden top-[12rem] bg-secondary text-white w-[90%] rounded-r-3xl p-10 text-left space-y-3">
                <h1 className="font-bold text-base">
                    Lomba Galang Tegak Utama <br /> (LOGATAMA) XVIII
                </h1>
                <div className="border border-white w-full" />
                <p className="text-xs">
                    Lomba galang tegak utama adalah Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </section>
    );
}
