import ContentSoal from "@/Components/Fragments/ContentSoal";
import HeaderSoal from "@/Components/Fragments/HeaderSoal";
import { Head } from "@inertiajs/react";

export default function ReviewSoal({ tingkat, data_review_soal }) {
    return (
        <>
            <Head title="Review Soal" />
            <section className="min-h-screen w-full bg-neutral-300">
                <HeaderSoal tingkat={tingkat} />
                <ContentSoal
                    data_review_soal={data_review_soal}
                    tingkat={tingkat}
                />
            </section>
        </>
    );
}
