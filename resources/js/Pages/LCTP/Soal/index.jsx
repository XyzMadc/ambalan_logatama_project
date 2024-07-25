import Logatama from "../../../../assets/logatama.png";
import Galaxy from "../../../../assets/apen/bg 1.png";
import { useEffect, useRef, useState } from "react";
import { router, usePage } from "@inertiajs/react";
import QuestionList from "@/Components/Fragments/QuestionList";

export default function SoalPage() {
    const { props } = usePage();
    const  questions  = props.questions.soal;
    const tingkat = props.questions.tingkat;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const questionRefs = useRef([]);

    useEffect(() => {
        const storedAnswers = localStorage.getItem("answers");
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

    const handleAnswerChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
        localStorage.setItem("answers", JSON.stringify(newAnswers));
    };

    const handleSubmit = () => {
        console.log("Selected answers:", answers);
    };

    const handleClear = () => {
        setAnswers(Array(questions.length).fill(null));
        localStorage.removeItem("answers");
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
                            // onClick={() => router.post("/logout")}
                        >
                            LOGOUT
                        </button>
                    </div>
                </div>
            </nav>
            <div className="h-[80vh] bg-neutral-300 w-full" />
            <main className="absolute top-24 w-full px-10 flex gap-4 h-[36rem] overflow-hidden">
                <div className="px-20 py-10 bg-white rounded space-y-5 w-3/4">
                    <div className="flex justify-between">
                        <h1 className="text-secondary text-xl font-semibold">
                            Soal LCTP {capitalizeFirstLetter(tingkat)}
                        </h1>
                        {/* Kalo mau clear localStorage */}
                        <button
                            className="bg-secondary text-white font-semibold px-5 py-2 rounded tracking-wide"
                            onClick={handleClear}
                        >
                            Clear jawaban
                        </button>
                        <button className="bg-secondary text-white font-semibold px-5 py-2 rounded tracking-wide">
                            Sisa Waktu : 30:00:00
                        </button>
                    </div>
                    <div className="border border-secondary w-full" />
                    <div className="overflow-y-auto space-y-4 h-[65vh] none-scrollbar">
                        {questions.map((question, questionIndex) => (
                            <div
                                key={questionIndex}
                                ref={(ref) =>
                                    (questionRefs.current[questionIndex] = ref)
                                }
                                className="py-5 px-3 border-2 border-secondary flex gap-3 text-secondary"
                            >
                                <span>{questionIndex + 1}.</span>
                                <div className="flex">
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
                                                    className="block"
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
                                                className="w-full object-contain h-full"
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
                        questions={questions}
                        answers={answers}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                    />
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
