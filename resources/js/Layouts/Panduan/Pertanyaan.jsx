import AccordionPertanyaan from "@/Components/Partial/AccordionPertanyaan";
import { usePage } from "@inertiajs/react";

export default function Pertanyaan() {
    const { props } = usePage();
    const { faqs } = props;
    return (
        <section className="bg-gradient-to-b from-[#0E062A] via-[#2B1577] to-[#775DD1] py-10 px-5 rounded-t-2xl xl:rounded-t-3xl text-white text-center space-y-10">
            <h1 className="text-base xl:text-2xl font-bold">
                PERTANYAAN SERING DIAJUKAN
            </h1>
            <div className="space-y-4 xl:space-y-2 text-left xl:flex flex-col items-center xl:px-20">
                {faqs.map((faq) => (
                    <AccordionPertanyaan
                        question={faq.pertanyaan}
                        answer={faq.jawaban}
                    />
                ))}
            </div>
        </section>
    );
}
