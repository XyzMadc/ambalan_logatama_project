export default function Jenjang() {
    return (
        <section className="h-[100vh] bg-secondary md:py-[15vh] p-10 space-y-10 text-center text-white">
            <h1 className="text-2xl font-bold">JENJANG PERLOMBAAN</h1>
            <div className="relative border-2 border-primary md:inset-x-[30vw] md:h-[400px] md:w-[600px] rounded-2xl flex flex-col md:flex-row">
                <div className="space-y-5 border-b-4 md:border-r-4 md:border-b-0 border-primary p-10 bg-gradient-to-l from-secondary from-10% to-[#633FCA] rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
                    <h3 className="font-semibold text-xl">PENGGALANG</h3>
                    <p className="text-xs tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>
                    <button className="text-base font-semibold py-2 px-4 rounded-2xl bg-white text-secondary">
                        Selengkapnya
                    </button>
                </div>
                <div className="space-y-5 p-10 bg-gradient-to-t from-secondary from-10% to-[#633FCA] rounded-b-xl md:rounded-b-none md:rounded-r-xl">
                    <h3 className="font-semibold text-xl">PENEGAK</h3>
                    <p className="text-xs tracking-wide">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>
                    <button className="text-base font-semibold py-2 px-4 rounded-2xl bg-white text-secondary">
                        Selengkapnya
                    </button>
                </div>
            </div>
        </section>
    );
}
