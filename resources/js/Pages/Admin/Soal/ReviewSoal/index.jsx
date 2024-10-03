import ContentSoal from "@/Components/Fragments/ContentSoal";
import HeaderSoal from "@/Components/Fragments/HeaderSoal";

export default function ReviewSoal({ tingkat, data_review_soal }) {
    return (
        <>
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
