import Sidebar from "@/Components/Partial/Sidebar";
import { Spinner } from "@chakra-ui/react";
import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function rekapAdmin() {
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, post, errors, reset } = useForm({
        peringkat: "",
        nama_pangkalan: "",
        skor_nilai: "",
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
                        <input
                            value={data.peringkat}
                            onChange={handleChange}
                            name="peringkat"
                            type="text"
                            placeholder="Isi peringkat"
                            className="w-full py-2 font-semibold text-base placeholder:text-sm placeholder:text-slate-400 border rounded-md border-slate-300 focus:outline-none"
                        />
                        {errors.peringkat && (
                            <p className="text-red-600 text-sm">
                                {errors.peringkat}
                            </p>
                        )}
                        <input
                            value={data.nama_pangkalan}
                            onChange={handleChange}
                            name="nama_pangkalan"
                            type="text"
                            placeholder="Isi Nama Pangkatan"
                            className="w-full py-2 font-semibold text-base placeholder:text-sm placeholder:text-slate-400 border rounded-md border-slate-300 focus:outline-none"
                        />
                        {errors.nama_pangkalan && (
                            <p className="text-red-600 text-sm">
                                {errors.nama_pangkalan}
                            </p>
                        )}
                        <textarea
                            name="skor_nilai"
                            id="skor_nilai"
                            value={data.skor_nilai}
                            onChange={handleChange}
                            placeholder="Isi Skor Nilai"
                            rows={8}
                            className="w-full py-2 font-semibold text-base placeholder:text-sm placeholder:text-slate-400 border rounded-md border-slate-300 focus:outline-none"
                        />
                        {errors.skor_nilai && (
                            <p className="text-red-600 text-sm">
                                {errors.skor_nilai}
                            </p>
                        )}
                        <button
                            type="submit"
                            className="text-white bg-secondary hover:bg-primary transition-all duration-200 ease-in focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg px-10 py-2 text-center"
                        >
                            {isLoading ? (
                                <Spinner />
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
