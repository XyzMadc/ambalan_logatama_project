import Logatama from "../../../../assets/logatama.png";
import Galaxy from "../../../../assets/apen/bg 1.png";
import { useEffect, useRef, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import QuestionList from "@/Components/Fragments/QuestionList";
import { useToast } from "@chakra-ui/react";

export default function SoalPage() {
    const { props } = usePage();
    const { soal, tingkat, id: team_id, remainingTime } = props.questions;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(soal.length).fill(null));
    const [doubtFlags, setdoubtFlags] = useState(
        Array(soal.length).fill(false)
    );
    const [sisaWaktu, setSisaWaktu] = useState(remainingTime);
    const [leaveTab, setLeaveTab] = useState(0);
    const questionRefs = useRef([]);
    const toast = useToast();
    useEffect(() => {
        const storedAnswers = props.questions.storedAnswers;
        if (storedAnswers) {
            setAnswers(JSON.parse(storedAnswers));
        }
    }, []);

    useEffect(() => {
        questionRefs.current[currentQuestion]?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    }, [currentQuestion]);

    useEffect(() => {
        const waktu = setInterval(() => {
            setSisaWaktu((prevSisaWaktu) => {
                if (prevSisaWaktu <= 0) {
                    clearInterval(waktu);
                    handleSubmit();
                    return 0;
                }
                return prevSisaWaktu - 1;
            });
        }, 1000);

        return () => clearInterval(waktu);
    }, []);

    // hayo mau pindah tab ya?! 😁, jangan ya dek ya
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                setLeaveTab((leaveTab) => {
                    const newCount = leaveTab + 1;

                    if (newCount === 3) {
                        toast({
                            title: "Anda tidak diizinkan untuk berpindah tab selama mengerjakan soal.",
                            status: "error",
                            duration: 3000,
                            isClosable: true,
                        });
                    } else if (newCount > 3) {
                        router.post(
                            `/lctp/soal/${team_id}/submit`,
                            { jawaban: answers, cheat: "True" },
                            {
                                preserveState: true,
                                preserveScroll: true,
                                onError: (errors) => {
                                    setAnswers(answers);
                                    toast({
                                        title: "Gagal mengerjakan soal",
                                        description: errors,
                                        status: "error",
                                        duration: 3000,
                                        isClosable: true,
                                    });
                                },
                            }
                        );
                    } else {
                        toast({
                            title: "Anda tidak diizinkan untuk berpindah tab selama mengerjakan soal.",
                            status: "warning",
                            duration: 3000,
                            isClosable: true,
                        });
                    }
                    return newCount;
                });
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
        };
    }, [toast]);

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return [hours, minutes, seconds]
            .map((v) => (v > 10 ? v : "0" + v))
            .join(":");
    };

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        const prevAnswer = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
        setCurrentQuestion(index);
        router.post(
            "/lctp/soal/" + team_id,
            { jawaban: newAnswers },
            {
                preserveState: true,
                preserveScroll: true,
                onError: () => {
                    setAnswers(prevAnswer);
                    handleError(
                        `Terjadi kesalahan pada nomor ${
                            index + 1
                        }, ulangi jawaban anda!`
                    );
                },
            }
        );
    };

    const handleSubmit = () => {
        router.post(
            `/lctp/soal/${team_id}/submit`,
            { jawaban: answers },
            {
                preserveState: true,
                preserveScroll: true,
                onError: (errors) => {
                    setAnswers(answers);
                    handleError("Gagal Melakukan Submit");
                },
            }
        );
    };

    const handleDoubt = () => {
        const newDoubtFlags = [...doubtFlags];
        newDoubtFlags[currentQuestion] = !newDoubtFlags[currentQuestion];
        setdoubtFlags(newDoubtFlags);
    };

    const handleClear = () => {
        setAnswers(Array(soal.length).fill(null));
    };

    return (
        <>
            <nav className="bg-gradient-to-t from-primary via-secondary to-tertiary relative overflow-hidden h-[20vh]">
                <div className="absolute -top-[70vh]">
                    <img src={Galaxy} className="w-screen" alt="" />
                </div>
                <div className="absolute inset-0 px-40 py-10">
                    <div className="flex justify-between">
                        <figure className="w-40">
                            <img
                                src={Logatama}
                                className="object-cover w-full"
                                alt=""
                            />
                        </figure>
                        <button
                            className="bg-white text-secondary font-semibold px-10 py-2 rounded-lg shadow-md hover:bg-primary hover:text-white transition duration-300 ease-in-out"
                            onClick={() => router.post("/logout")}
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>
            </nav>
            <div className="h-[80vh] bg-neutral-300 w-full" />
            <main className="absolute top-24 w-full px-10 flex gap-4 h-[36rem] 2xl:h-[40rem] overflow-hidden">
                <div className="px-20 py-10 bg-white rounded space-y-5 w-3/4">
                    <div className="flex justify-between">
                        <h1 className="text-secondary text-xl capitalize font-semibold">
                            Soal LCTP {tingkat}
                        </h1>
                        {/* Kalo mau clear localStorage */}
                        <button
                            className="bg-secondary text-white font-semibold px-5 py-2 rounded tracking-wide"
                            onClick={handleClear}
                        >
                            Clear jawaban
                        </button>
                        <div className="bg-secondary text-white font-semibold px-5 py-2 rounded tracking-wide">
                            Sisa Waktu : {formatTime(sisaWaktu)}
                        </div>
                    </div>
                    <div className="border border-secondary w-full" />
                    <div className="overflow-y-auto space-y-4 h-[65vh] none-scrollbar">
                        {soal.map((question, questionIndex) => (
                            <div
                                key={questionIndex}
                                ref={(ref) =>
                                    (questionRefs.current[questionIndex] = ref)
                                }
                                className="py-5 px-3 border-2 border-secondary flex gap-3 text-secondary"
                            >
                                <span>{questionIndex + 1}.</span>
                                <div className="flex w-full">
                                    <div
                                        className={
                                            question.images ? "w-3/4" : "w-full"
                                        }
                                    >
                                        <p>{question.pertanyaan}</p>
                                        {JSON.parse(question.pilihan).map(
                                            (option, optIndex) => (
                                                <label
                                                    key={optIndex}
                                                    className="block w-fit cursor-pointer"
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`question-${questionIndex}`}
                                                        value={option}
                                                        checked={
                                                            answers[
                                                                questionIndex
                                                            ] === option
                                                        }
                                                        onChange={() =>
                                                            handleAnswerChange(
                                                                questionIndex,
                                                                option
                                                            )
                                                        }
                                                    />
                                                    <span className="ml-2">
                                                        {option}
                                                    </span>
                                                </label>
                                            )
                                        )}
                                    </div>
                                    {question.images && (
                                        <figure className="w-1/4 flex justify-center overflow-hidden">
                                            <img
                                                className="size-60 object-contain"
                                                src={question.images}
                                                alt={
                                                    "image question" +
                                                    (questionIndex + 1)
                                                }
                                            />
                                        </figure>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="py-5 px-10 bg-white rounded w-1/4">
                    <QuestionList
                        questions={soal}
                        answers={answers}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        doubtFlags={doubtFlags}
                    />
                    <button
                        className="mt-4 w-full bg-orange-500 text-white p-2 rounded hover:bg-white hover:border hover:border-orange-500 hover:text-orange-500 transition duration-300 ease-in-out"
                        onClick={handleDoubt}
                    >
                        Ragu Ragu
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-white hover:border hover:border-red-500 hover:text-red-500 transition duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </div>
            </main>
        </>
    );
}
