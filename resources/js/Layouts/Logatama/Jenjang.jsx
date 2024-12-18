export default function Jenjang() {
    return (
        <section className="bg-secondary p-10 space-y-10 text-center text-white">
            <h1 className="text-2xl font-bold">JENJANG PERLOMBAAN</h1>
            <div className="relative mx-auto md:px-72 rounded-2xl flex flex-col md:flex-row">
                <div className="space-y-5 border-4 border-primary border-b-0 md:border-b-4 p-10 bg-gradient-to-l from-secondary from-10% to-[#633FCA] rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
                    <h3 className="font-semibold text-xl">PENGGALANG</h3>
                    <p className="text-xs xl:text-sm tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>
                    <button className="text-base font-semibold py-2 px-4 rounded-2xl bg-white text-secondary hover:scale-110 transition-all duration-200 ease-out">
                        Selengkapnya
                    </button>
                </div>
                <div className="space-y-5 p-10 bg-gradient-to-t border-4 border-primary md:border-l-0 from-secondary from-10% to-[#633FCA] rounded-b-xl md:rounded-b-none md:rounded-r-xl">
                    <h3 className="font-semibold text-xl">PENEGAK</h3>
                    <p className="text-xs xl:text-sm tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>
                    <button className="text-base font-semibold py-2 px-4 rounded-2xl bg-white text-secondary hover:scale-110 transition-all duration-200 ease-out">
                        Selengkapnya
                    </button>
                </div>
            </div>
        </section>
    );
}
