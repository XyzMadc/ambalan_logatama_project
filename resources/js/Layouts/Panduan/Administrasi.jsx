import downloadFile from "../../Services/downloadFileAdministrasi.json";
import syaratAdministrasi from "../../Services/syaratAdministrasi.json";

export default function Administrasi() {
    return (
        <section className="bg-gradient-to-b from-tertiary from-10% via-secondary to-[#2B1577] pb-20 relative -top-2">
            <svg viewBox="0 0 100 25" className="rotate-180">
                <path d="M0,25 Q50,0 100,25 L100,50 L0,50 Z" fill="#fff" />
            </svg>
            <div className="text-white px-5 xl:px-80 text-center space-y-10">
                <h1 className="text-lg xl:text-3xl font-bold">
                    ADMINISTRASI PERLOMBAAN
                </h1>
                <div className="flex justify-center gap-5 flex-wrap">
                    {syaratAdministrasi.map((syarat, index) => (
                        <div
                            key={index}
                            className="py-3 xl:py-6 bg-gradient-to-t from-secondary from-10% to-[#633FCA] border-2 border-primary rounded-xl w-40 xl:w-80"
                        >
                            <h4 className="text-xs xl:text-lg">
                                {syarat.text}
                            </h4>
                        </div>
                    ))}
                </div>
                <div className="flex xl:flex-col xl:items-center justify-center flex-wrap w-full gap-5">
                    {downloadFile.map((file, index) => (
                        <div
                            key={index}
                            className="border-2 border-primary rounded-xl text-white py-2 px-4 xl:w-[25rem]"
                        >
                            <h4 className="text-[.75rem]">{file.text}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
