import LayoutAdminLogatama from "@/Layouts/Admin/Logatama";
import { Head, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { Camera } from "@phosphor-icons/react/dist/ssr";
import { useErrorToast, useSuccessToast } from "@/Utils/toastHandle";

export default function DokumentasiAdmin() {
    const { data, setData, post, reset } = useForm({
        name_file: "",
        file: null,
    });
    const handleSuccess = useSuccessToast();
    const handleError = useErrorToast();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData({
                ...data,
                file,
                name_file: file.name,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin-logatama/dokumentasi", {
            onSuccess: () =>
                handleSuccess("Berhasil mengupload dokumentasi", reset),
            onError: () => handleError("Gagal mengupload dokumentasi"),
        });
    };

    useEffect(() => {
        return () => {
            if (data.file && data.file instanceof File) {
                URL.revokeObjectURL(data.file);
            }
        };
    }, [data.file]);

    return (
        <>
            <Head title="Dokumentasi" />
            <LayoutAdminLogatama title="DOKUMENTASI KEGIATAN">
                <form
                    onSubmit={handleSubmit}
                    className="p-5 shadow-lg shadow-slate-700 rounded-lg max-w-2xl"
                >
                    <div className="flex justify-between">
                        <div className="mb-4 space-y-6">
                            <label className="text-xl font-medium text-center text-white bg-secondary py-2 px-4 rounded-md">
                                Foto ( Image Upload )
                            </label>
                        </div>
                        <div className="space-y-4">
                            <div className="size-60 flex justify-center items-center rounded-md relative overflow-hidden hover:cursor-pointer hover:opacity-90 transition-opacity duration-200 ease-in">
                                <div
                                    className={`absolute inset-0 flex justify-center items-center ${
                                        data.name_file
                                            ? "bg-primary bg-opacity-30"
                                            : "bg-secondary"
                                    }`}
                                >
                                    <span className="text-white text-lg font-bold flex flex-col items-center">
                                        <Camera size={64} />
                                        Upload File
                                    </span>
                                </div>
                                <input
                                    name="image"
                                    type="file"
                                    onChange={handleImageChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                {data.file && (
                                    <img
                                        src={URL.createObjectURL(data.file)}
                                        alt="uploaded"
                                        className="object-cover w-full h-full"
                                    />
                                )}
                            </div>
                            <p className="text-sm text-gray-500 text-center border border-slate-500 rounded-lg p-2 w-full">
                                {data.name_file ? data.name_file : "Nama File"}
                            </p>
                            <p className="text-sm text-gray-500 text-center border border-slate-500 rounded-lg p-2 w-full">
                                Maksimal 300Kb, Tipe file: .JPG, .JPEG, .PNG
                            </p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-secondary text-white py-2 px-10 rounded-lg"
                    >
                        Kirim
                    </button>
                </form>
            </LayoutAdminLogatama>
        </>
    );
}
