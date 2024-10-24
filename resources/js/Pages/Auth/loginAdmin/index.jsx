import { useErrorToast, useSuccessToast } from "@/Utils/toastHandle";
import { Spinner } from "@chakra-ui/react";
import { Head, useForm } from "@inertiajs/react";
import { Eye, EyeClosed } from "@phosphor-icons/react";
import { useState } from "react";

export default function loginAdmin() {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, errors, post, reset, processing } = useForm({
        username: "",
        password: "",
    });
    const handleSuccess = useSuccessToast();
    const handleError = useErrorToast();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/login", {
            onSuccess: () => handleSuccess("Selamat Datang Admin!", reset),
            onError: () => handleError("Login Gagal"),
        });
    };

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    return (
        <>
            <Head title="Login Admin" />
            <section className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0 flex">
                    <div className="w-1/3 h-full bg-[#49319B] pl-20 py-20">
                        <div className="w-full h-full bg-gradient-to-b from-[#291472] via-[#341E82] to-[#49319B] flex flex-col justify-center items-center gap-5 rounded-l-xl shadow-login-admin-kiri">
                            <figure>
                                <svg
                                    className="size-20 text-white"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9 3a3 3 0 100-6 3 3 0 000 6z"
                                    />
                                </svg>
                            </figure>
                            <span className="text-white font-bold text-4xl">
                                LOGATAMA
                            </span>
                            <span className="text-white font-bold text-4xl">
                                XVII
                            </span>
                        </div>
                    </div>
                    <div className="w-2/3 h-full pr-20 py-20">
                        <div className="w-full h-full flex flex-col justify-center items-center text-[#2B1577] gap-5 rounded-r-xl shadow-login-admin-kanan">
                            <h2 className="text-3xl font-bold">
                                Log In as Admin
                            </h2>
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
                                        className="w-full py-2 font-semibold pl-4 pr-10 text-base placeholder:text-sm bg-white border-none rounded-xl shadow-md focus:outline-none"
                                    />
                                    {errors.username && (
                                        <p className="text-red-600 text-sm">
                                            {errors.username}
                                        </p>
                                    )}
                                </div>
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        value={data.password}
                                        onChange={handleChange}
                                        name="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                        className="w-full py-2 font-semibold pl-4 pr-10 text-base placeholder:text-sm bg-white border-none rounded-xl shadow-md focus:outline-none"
                                    />
                                    <span
                                        className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-500 text-xl"
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
                                    disabled={!!errors.attempt}
                                >
                                    {processing ? (
                                        <Spinner />
                                    ) : (
                                        <p className="text-sm">Masuk</p>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
