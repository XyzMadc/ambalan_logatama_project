import { useState } from "react";
import galaxy from "../../../../assets/login-soal/galaxy.png";
import maskot from "../../../../assets/login-soal/maskot.png";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { Head, useForm } from "@inertiajs/react";
import { Spinner, useToast } from "@chakra-ui/react";

export default function loginSoal() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [isLoading, setIsLoading] = useState(false);
    const { data, setData, errors, post, reset } = useForm({
        username: "",
        password: "",
    });
    const toast = useToast();

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        post("/login", {
            onSuccess: () => {
                setIsLoading(false);
                toast({
                    title: "Login Sukses",
                    description: "Selamat Mengerjakan!",
                    status: "success",
                });
                reset();
            },
            onError: () => {
                setIsLoading(false);
                toast({
                    title: "Login Gagal",
                    description: "Terjadi kesalahan, silahkan coba lagi.",
                    status: "error",
                });
            },
        });
    };
    return (
        <main className="min-h-screen overflow-hidden relative bg-gradient-to-b from-[#0E062A] via-[#2B1577] to-[#775DD1]">
            <img className="w-screen absolute" src={galaxy} alt="" />
            <section className="absolute inset-0 flex justify-center items-center py-20">
                <div className="h-full text-white w-1/2 flex flex-col items-center justify-evenly">
                    <h1 className="text-3xl font-bold">LOGATAMA XVII</h1>
                    <span>LOGO</span>
                    <form
                        className="w-full max-w-lg mx-auto mt-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="relative z-0 mb-6 w-full group">
                             {errors.attempt && (
                                    <p className="text-white text-md p-4 mb-5 bg-red-500 rounded">
                                        {errors.attempt}   
                                         
                                    </p>
                                )}
                            <input
                                value={data.username}
                                onChange={handleChange}
                                name="username"
                                type="text"
                                placeholder="Username"
                                className="w-full py-2 text-[#2B1577] font-semibold pl-4 pr-10 text-base placeholder:text-sm bg-white border-none rounded-xl shadow-md focus:outline-none"
                            />
                            {errors.username && (
                                <p className="text-red-600 text-sm">
                                    {errors.username}
                                </p>
                            )}
                            {errors.error && (
                                <p className="text-red-600 text-sm">
                                    {errors.error}
                                </p>
                            )}
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <input
                                value={data.password}
                                onChange={handleChange}
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full py-2 text-[#2B1577] font-semibold pl-4 pr-10 text-base placeholder:text-sm bg-white border-none rounded-xl shadow-md focus:outline-none"
                            />
                            <span
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#2B1577] text-xl"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <Eye /> : <EyeClosed />}
                            </span>
                            {errors.password && (
                                <p className="text-red-600 text-sm">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-secondary hover:bg-primary transition-all duration-200 ease-in focus:ring-2 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg w-full px-5 py-2.5 text-center"
                            disabled={!!errors.attempt}>
                            {isLoading ? (
                                <Spinner />
                            ) : (
                                <p className="text-sm">Kirim</p>
                            )}
                            
                        </button>
                    </form>
                </div>
                <figure className="w-1/2 flex justify-center">
                    <img className="w-[20rem]" src={maskot} alt="" />
                </figure>
            </section>
        </main>
    );
}
