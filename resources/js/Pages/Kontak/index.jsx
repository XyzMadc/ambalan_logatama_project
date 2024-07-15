import React, { useState } from "react";
import NavbarAmbalan from "@/Components/Partial/NavbarAmbalan";
import { City, Envelope, InstagramLogo } from "@phosphor-icons/react";
import { Head, useForm } from "@inertiajs/react";
import { Spinner, useToast } from "@chakra-ui/react";

export default function KontakPage() {
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, errors, post, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });
    const toast = useToast();

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        post("/kontak/mail", {
            onSuccess: () => {
                setIsLoading(false);
                toast({
                    title: "Pesan Terkirim",
                    description: "Terima kasih telah menghubungi kami!",
                    status: "success",
                });
                reset();
            },
            onError: () => {
                setIsLoading(false);
                toast({
                    title: "Pesan Gagal Terkirim",
                    description: "Terjadi kesalahan, silahkan coba lagi.",
                    status: "error",
                });
            },
        });
    };

    return (
        <>
            <Head title="Kontak" />
            <NavbarAmbalan />
            <section className="min-h-[110vh] xl:min-h-screen px-5 xl:px-[120px] py-28 xl:py-0 xl:pt-[100px] bg-secondary">
                <div className="relative xl:flex xl:bg-white">
                    <div className="bg-white p-8 pb-20 space-y-3 xl:w-1/2">
                        <h1 className="text-secondary font-bold text-lg xl:text-3xl">
                            Kontak Kami
                        </h1>
                        <p className="text-secondary font-medium text-[13px] xl:text-lg">
                            Hubungi kami apabila terdapat pertanyaan dan
                            tanggapan lebih lanjut dengan isi form dibawah ini!
                        </p>
                        <form
                            className="w-full max-w-lg mx-auto mt-5"
                            onSubmit={handleSubmit}
                        >
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                    placeholder=" "
                                    value={data.name}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Nama
                                </label>
                                {errors.name && (
                                    <p className="text-red-600 text-sm">
                                        {errors.name}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                    placeholder=" "
                                    value={data.email}
                                    onChange={handleChange}
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Email
                                </label>
                                {errors.email && (
                                    <p className="text-red-600 text-sm">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    className="block py-2.5 px-0 w-full text-sm text-secondary bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                    placeholder=" "
                                    value={data.message}
                                    onChange={handleChange}
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Pesan
                                </label>
                                {errors.message && (
                                    <p className="text-red-600 text-sm">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="text-white bg-secondary hover:bg-primary transition-all duration-200 ease-in focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg w-full px-5 py-2.5 text-center"
                            >
                                {isLoading ? (
                                    <Spinner />
                                ) : (
                                    <p className="text-sm">Kirim</p>
                                )}
                            </button>
                        </form>
                    </div>
                    <div className="absolute xl:relative bottom-[-180px] xl:bottom-0 w-full px-5 xl:w-1/2 xl:flex items-center">
                        <div className="bg-secondary xl:bg-indigo-800 w-full text-white border xl:border-0 border-white px-2 py-5 xl:px-10 xl:py-20 space-y-5 xl:space-y-10 xl:absolute xl:-right-10">
                            <h1 className="text-base xl:text-xl font-medium ml-2">
                                Informasi
                            </h1>
                            <div className="text-xs xl:text-base space-y-3 xl:space-y-10">
                                <div className="flex gap-2 items-center">
                                    <span>
                                        <Envelope size={30} />
                                    </span>
                                    <p>ambalansoekmasmkn7@gmail.com</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span>
                                        <InstagramLogo size={30} />
                                    </span>
                                    <p>@ambalan_smk7semarang</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <span>
                                        <City size={30} />
                                    </span>
                                    <p className="text-justify">
                                        Jl. Simpang Lima No.1, RT.02/RW.01,
                                        Mugassari, Kec. Semarang Sel., Kota
                                        Semarang, Jawa Tengah 50249
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
