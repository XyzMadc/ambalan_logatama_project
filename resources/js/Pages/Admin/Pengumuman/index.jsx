import Sidebar from "@/Components/Partial/Sidebar";
import { Spinner } from "@chakra-ui/react";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function pengumumanAdmin() {
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, post, errors, reset } = useForm({
        judul: "",
        deskripsi: "",
    });
    const { url } = usePage();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        post("/admin-logatama/pengumuman", {
            onSuccess: () => {
                setIsLoading(false);
                toast({
                    title: "Pengumuman ditambahkan",
                    description: "Pengumuman berhasil ditambahkan!",
                    status: "success",
                });
                reset();
            },
            onError: () => {
                setIsLoading(false);
                toast({
                    title: "Pengumuman Gagal Ditambahkan",
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
        <section className="min-h-screen overflow-hidden flex">
            <Sidebar url={url} />
            <div className="w-4/5  px-10 py-14">
                <div className="space-y-8">
                    <h1 className="text-xl font-semibold">TAMBAH PENGUMUMAN</h1>
                    <form onSubmit={handleSubmit} className="space-y-10">
                        <div>
                            <input
                                value={data.judul}
                                onChange={handleChange}
                                name="judul"
                                type="text"
                                placeholder="Isi Judul"
                                className="w-full py-2 font-semibold text-base placeholder:text-sm placeholder:text-slate-400 border rounded-md border-slate-300 focus:outline-none"
                            />
                            {errors.judul && (
                                <p className="text-red-600 text-sm">
                                    {errors.judul}
                                </p>
                            )}
                        </div>
                        <div>
                            <textarea
                                name="deskripsi"
                                id="deskripsi"
                                value={data.deskripsi}
                                onChange={handleChange}
                                placeholder="Isi Deskripsi"
                                rows={8}
                                className="w-full py-2 font-semibold text-base placeholder:text-sm placeholder:text-slate-400 border rounded-md border-slate-300 focus:outline-none"
                            />
                            {errors.deskripsi && (
                                <p className="text-red-600 text-sm">
                                    {errors.deskripsi}
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
                </div>
            </div>
        </section>
    );
}
