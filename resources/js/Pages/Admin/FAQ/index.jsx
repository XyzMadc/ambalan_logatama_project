import LayoutAdminLogatama from "@/Layouts/Admin/Logatama";
import { Spinner, useToast } from "@chakra-ui/react";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function faqAdmin() {
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, post, errors, reset } = useForm({
        pertanyaan: "",
        jawaban: "",
    });
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        post("/admin-logatama/faq", {
            onSuccess: () => {
                setIsLoading(false);
                toast({
                    title: "FAQ ditambahkan",
                    description: "FAQ berhasil ditambahkan!",
                    status: "success",
                });
                reset();
            },
            onError: () => {
                setIsLoading(false);
                toast({
                    title: "FAQ Gagal Ditambahkan",
                    description: "Terjadi kesalahan, silahkan coba lagi.",
                    status: "error",
                });
            },
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <LayoutAdminLogatama title="FREQUENTLY ASKED QUESTION">
            <form onSubmit={handleSubmit} className="space-y-10">
                <div>
                    <input
                        value={data.pertanyaan}
                        onChange={handleChange}
                        name="pertanyaan"
                        type="text"
                        placeholder="Isi Pertanyaan"
                        className="w-full py-2 font-semibold text-base placeholder:text-sm placeholder:text-slate-400 border rounded-md border-slate-300 focus:outline-none"
                    />
                    {errors.pertanyaan && (
                        <p className="text-red-600 text-sm">{errors.pertanyaan}</p>
                    )}
                </div>
                <div>
                    <textarea
                        name="jawaban"
                        id="jawaban"
                        value={data.jawaban}
                        onChange={handleChange}
                        placeholder="Isi jawaban"
                        rows={8}
                        className="w-full py-2 font-semibold text-base placeholder:text-sm placeholder:text-slate-400 border rounded-md border-slate-300 focus:outline-none"
                    />
                    {errors.jawaban && (
                        <p className="text-red-600 text-sm">
                            {errors.jawaban}
                        </p>
                    )}
                </div>
                <button
                    type="submit"
                    className="text-white bg-secondary hover:bg-primary transition-all duration-200 ease-in focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-10 py-2 text-center"
                >
                    {isLoading ? (
                        <Spinner size="md" />
                    ) : (
                        <p className="text-sm">Kirim</p>
                    )}
                </button>
            </form>
        </LayoutAdminLogatama>
    );
}