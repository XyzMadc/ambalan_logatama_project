import Logatama from "../../../../assets/logatama.png";
import Galaxy from "../../../../assets/apen/bg 1.png";
import { useEffect, useState } from "react";
import QuestionList from "../../../Components/Fragments/QuestionList";
import { usePage } from "@inertiajs/react";


export default function SoalPage() {
    const { props } = usePage();
    const { questions } = props;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [markedForReview, setMarkedForReview] = useState(
        Array(questions.length).fill(false)
    );


    useEffect(() => {
        const storedAnswers = localStorage.getItem("answers");
        if (storedAnswers) {
            setAnswers(JSON.parse(storedAnswers));
        }
    }, []);

    const handleAnswerChange = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
        // Save to localStorage
        localStorage.setItem("answers", JSON.stringify(newAnswers));
    };

    const handleSubmit = () => {
        console.log("Selected answers:", answers);
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
                        <button className="bg-white text-secondary font-semibold px-5 py-2 rounded tracking-wide">
                            LOGOUT
                        </button>
                    </div>
                </div>
            </nav>
            <div className="h-[80vh] bg-neutral-300 w-full" />
            <main className="absolute top-32 w-full px-10 flex gap-4">
                <div className="px-20 py-10 bg-white rounded space-y-5 w-3/4">
                    <div className="flex justify-between">
                        <h1 className="text-secondary text-xl font-semibold">
                            Soal LCTP Penggalang
                        </h1>
                        <button className="bg-secondary text-white font-semibold px-5 py-2 rounded tracking-wide">
                            Sisa Waktu : 30:00:00
                        </button>
                    </div>
                    <div className="border border-secondary w-full" />
                    <div className="overflow-y-auto space-y-4 h-[65vh] none-scrollbar">
                        {questions.map((question, index) => (
                            <div
                                key={index}
                                className="py-5 px-3 border-2 border-secondary flex gap-3 text-secondary"
                            >
                                <span>{index + 1}.</span>
                                <div>
                                    <p>{question.pertanyaan}</p>
                                    {JSON.parse(question.pilihan).map((option, index) => (
                                        <label key={index} className="block">
                                            <input
                                                type="radio"
                                                name={`question-${index + 1}`}
                                                value={option}
                                                checked={
                                                    answers[index + 1] ===
                                                    option
                                                }
                                                onChange={() =>
                                                    handleAnswerChange(option)
                                                }
                                            />
                                            <span className="ml-2">
                                                {option}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="py-5 px-3 border-2 border-secondary flex gap-3 text-secondary">
            <span>{currentQuestion + 1}.</span>
            <div className="space-y-3">
              <p>{questions[currentQuestion].text}</p>
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="block">
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={() => handleAnswerChange(option)}
                  />
                  <span className="ml-2">{option}</span>
                </label>
              ))}
            </div>
          </div> */}
                    {/* <div className="flex justify-between">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="bg-secondary text-white px-4 py-2 rounded disabled:opacity-50"
            >
              SOAL SEBELUMNYA
            </button>
            <button
              onClick={markForReview}
              className={`px-4 py-2 rounded text-white ${
                markedForReview[currentQuestion]
                  ? "bg-orange-500"
                  : "bg-secondary"
              }`}
            >
              RAGU-RAGU
            </button>
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1}
              className="bg-secondary text-white px-4 py-2 rounded disabled:opacity-50"
            >
              SOAL SELANJUTNYA
            </button>
          </div> */}
                </div>
                <div className="p-10 bg-white rounded w-1/4">
                    <QuestionList
                        questions={questions}
                        answers={answers}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                    />
                    <button
                        onClick={handleSubmit}
                        className="mt-4 w-full bg-red-500 text-white p-2 rounded"
                    >
                        Submit
                    </button>
                </div>
            </main>
        </>
    );
}
