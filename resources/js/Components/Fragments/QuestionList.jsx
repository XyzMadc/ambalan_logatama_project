export default function QuestionList({
    questions,
    answers,
    currentQuestion,
    setCurrentQuestion,
}) {
    return (
        <div className="max-h-[29.7rem] overflow-y-auto none-scrollbar">
            <h1 className="text-secondary text-xl font-semibold mb-4">
                Nomor Soal
            </h1>
            <div className="grid grid-cols-5 gap-2">
                {questions.map((question, index) => {
                    const answered = answers[index] !== null;
                    const isCurrent = currentQuestion === index;

                    return (
                        <button
                            key={question.id}
                            onClick={() => setCurrentQuestion(index)}
                            className={`p-2 text-white rounded ${
                                isCurrent
                                    ? "bg-blue-800"
                                    : answered
                                    ? "bg-green-500"
                                    : "bg-gray-400"
                            }`}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
