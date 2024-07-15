import { useState } from "react";
import galaxy from "../../../assets/login-soal/galaxy.png";
import maskot from "../../../assets/login-soal/maskot.png";
import { Eye, EyeClosed } from "@phosphor-icons/react";
export default function loginSoal() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <main className="min-h-screen overflow-hidden relative bg-gradient-to-b from-[#0E062A] via-[#2B1577] to-[#775DD1]">
            <img className="w-screen absolute" src={galaxy} alt="" />
            <section className="absolute inset-0 flex justify-center items-center py-20">
                <div className="h-full text-white w-1/2 flex flex-col items-center justify-evenly">
                    <h1 className="text-3xl font-bold">LOGATAMA XVII</h1>
                    <span>LOGO</span>
                    <div className="flex flex-col items-center justify-center w-full px-[120px] gap-5">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full py-2 text-black pl-4 pr-10 text-base placeholder:text-sm bg-white border-none rounded-xl shadow-md focus:outline-none"
                        />
                        <div className="relative w-full">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-full py-2 text-black pl-4 pr-10 text-base placeholder:text-sm bg-white border-none rounded-xl shadow-md focus:outline-none"
                            />
                            <span
                                className="absolute right-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-neutral-500 text-xl"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <Eye /> : <EyeClosed />}
                            </span>
                        </div>
                    </div>
                </div>
                <figure className="w-1/2 flex justify-center">
                    <img className="w-[20rem]" src={maskot} alt="" />
                </figure>
            </section>
        </main>
    );
}
