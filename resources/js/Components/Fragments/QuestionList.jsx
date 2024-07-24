// src/components/QuestionList.js
const QuestionList = ({
  questions,
  answers,
  markedForReview,
  currentQuestion,
  setCurrentQuestion,
}) => {
  return (
    <div>
      <h2 className="text-xl mb-4">Nomor Soal</h2>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((question, index) => {
          const answered = answers[index] !== null;
          const marked = markedForReview[index];
          const isCurrent = currentQuestion === index;

          return (
            <button
              key={question.id}
              onClick={() => setCurrentQuestion(index)}
              className={`p-2 text-white rounded ${
                isCurrent
                  ? "bg-blue-800"
                  : marked
                  ? "bg-orange-500"
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
};

export default QuestionList;
