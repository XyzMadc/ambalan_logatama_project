import Logatama from "../../../../../assets/logatama.png";
import Galaxy from "../../../../../assets/apen/bg 1.png";
import { useRef } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Spinner } from "@chakra-ui/react";
import { UploadSimple } from "@phosphor-icons/react";
import { handleError, handleSuccess } from "@/Utils/toastHandle";

export default function CreateSoal({ soal }) {
    const { url } = usePage();
    const method = url.split("/")[4];
    const pilihan = soal ? JSON.parse(soal.pilihan) : "";
    const jawaban = soal ? soal.jawaban : "";
    const { data, setData, post, patch, processing, errors } = useForm({
        question: soal ? soal.pertanyaan : "",
        imageFile: null,
        oldImage: soal ? soal.images : null,
        options: [
            {
                value: pilihan[0],
                isEditing: false,
                isSelected: pilihan[0] == jawaban,
                isAnswered: pilihan[0] == jawaban,
            },
            {
                value: pilihan[1],
                isEditing: false,
                isSelected: pilihan[1] == jawaban,
                isAnswered: pilihan[1] == jawaban,
            },
            {
                value: pilihan[2],
                isEditing: false,
                isSelected: pilihan[2] == jawaban,
                isAnswered: pilihan[2] == jawaban,
            },
            {
                value: pilihan[3],
                isEditing: false,
                isSelected: pilihan[3] == jawaban,
                isAnswered: pilihan[3] == jawaban,
            },
        ],
    });

    const fileInputRef = useRef(null);

    const handleEdit = (index, condition) => {
        const newOptions = [...data.options];
        newOptions[index].isEditing = condition;
        setData("options", newOptions);
    };

    const handleChange = (index, value) => {
        const newOptions = [...data.options];
        newOptions[index].value = value;
        setData("options", newOptions);
    };

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("imageFile", file);
        }
    };

    const handleRadioChange = (index) => {
        const newOptions = data.options.map((option, i) => ({
            ...option,
            isAnswered: i === index,
            isSelected: i === index,
        }));
        setData("options", newOptions);
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (method === "edit") {
            patch(url + "/update", {
                onSuccess: () => handleSuccess("Berhasil mengubah soal"),
                onError: () => handleError("Gagal mengubah soal"),
            });
        } else {
            post(url, {
                onSuccess: () => handleSuccess("Berhasil membuat soal"),
                onError: () => handleError("Gagal membuat soal"),
            });
        }
    };
    return (
        <section className="min-h-screen bg-neutral-300">
            <nav className="bg-gradient-to-t from-primary via-secondary to-tertiary relative overflow-hidden h-[10rem]">
                <div className="absolute -top-[85vh]">
                    <img src={Galaxy} className="w-screen" alt="" />
                </div>
                <div className="absolute inset-0 px-32 py-10">
                    <div className="flex justify-between">
                        <figure className="w-40">
                            <img
                                src={Logatama}
                                className="object-cover w-full"
                                alt=""
                            />
                        </figure>
                        <div className="flex items-center">
                            <button
                                className="bg-white text-secondary font-semibold w-28 py-2 rounded-lg shadow-md hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                                onClick={handleSave}
                                disabled={processing}
                            >
                                {processing ? (
                                    <Spinner size={"md"} />
                                ) : (
                                    "Simpan"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="absolute top-28 w-full px-10 flex gap-4 h-[34rem] 2xl:h-[38rem]">
                <div className="p-5 bg-white rounded flex flex-col justify-between gap-4 w-full">
                    <div className="flex gap-2 h-[18.5rem]">
                        <div className="relative w-full">
                            <textarea
                                className="w-full h-full p-4 border-2 border-secondary rounded-lg focus:outline-none focus:border-secondary resize-none text-secondary font-semibold"
                                value={data.question}
                                onChange={(e) =>
                                    setData("question", e.target.value)
                                }
                            />
                            {errors.question && (
                                <p className="text-red-600 text-sm">
                                    {errors.question}
                                </p>
                            )}
                            <div className="absolute inset-0 flex justify-center items-center pointer-events-none text-slate-400 font-semibold transition-opacity duration-200">
                                {!data.question && "Ketik pertanyaan disini"}
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <button
                                    className="bg-secondary text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-primary hover:scale-105 transition-all duration-500 ease-in-out"
                                    onClick={handleUpload}
                                >
                                    <UploadSimple size={20} /> Upload Gambar
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        {(data.imageFile || data.oldImage) && (
                            <figure className="p-2 border-2 border-secondary rounded-lg w-[28rem] overflow-hidden">
                                <img
                                    src={
                                        data.imageFile
                                            ? URL.createObjectURL(
                                                  data.imageFile
                                              )
                                            : data.oldImage
                                    }
                                    className="h-full object-contain rounded-lg mx-auto"
                                    alt=""
                                />
                                {errors.imageFile && (
                                    <p className="text-red-600 text-sm">
                                        {errors.imageFile}
                                    </p>
                                )}
                            </figure>
                        )}
                    </div>
                    <div className="space-y-3">
                        {data.options.map((option, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4"
                            >
                                <input
                                    type="radio"
                                    name="option"
                                    checked={option.isSelected}
                                    onChange={() => handleRadioChange(index)}
                                />
                                <label
                                    className="flex items-center w-fit cursor-pointer space-x-4"
                                    onClick={() => handleEdit(index, true)}
                                >
                                    {option.isEditing ? (
                                        <input
                                            type="text"
                                            className="text-sm text-gray-500 border border-secondary rounded-lg p-1"
                                            value={option.value}
                                            onChange={(e) =>
                                                handleChange(
                                                    index,
                                                    e.target.value
                                                )
                                            }
                                            onBlur={() =>
                                                handleEdit(index, false)
                                            }
                                            autoFocus
                                        />
                                    ) : (
                                        <span
                                            className={`${
                                                option.value
                                                    ? "text-secondary"
                                                    : "text-purple-400"
                                            } font-medium text-base`}
                                        >
                                            {option.value ||
                                                "Ketik opsi jawaban di sini"}
                                        </span>
                                    )}
                                </label>
                                {errors[`options.${index}.value`] && (
                                    <p className="text-red-600 text-sm">
                                        {errors[`options.${index}.value`]}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="w-full border border-secondary self-end" />
                </div>
            </main>
        </section>
    );
}
