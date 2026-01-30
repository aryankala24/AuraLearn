import { useParams } from "react-router-dom";
import { useState } from "react";
import quizData from "./quizData";

function QuizSection() {
  const { quizId } = useParams();
  const questions = quizData[quizId];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showScore, setShowScore] = useState(false);

  if (!questions) {
    return <div className="text-center text-xl text-red-600 pt-32">Invalid quiz selected.</div>;
  }

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowScore(true);
      }
    }, 800);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setShowScore(false);
  };

  const backgroundImage = `/${quizId}.gif`;

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 pt-28 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full max-w-4xl bg-white/20 backdrop-blur-xl p-10 rounded-3xl border border-white/30 shadow-2xl animate-fade-in-down">
        <h2 className="text-4xl font-bold mb-8 text-center capitalize text-white drop-shadow">
          {quizId} Quiz
        </h2>

        {showScore ? (
          <div className="text-center text-white space-y-6">
            <p className="text-3xl font-semibold drop-shadow-lg">
              🎉 You scored {score} out of {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <div className="space-y-6 text-white">
            <div className="mb-4">
              <p className="text-lg">Question {currentQuestion + 1} of {questions.length}</p>
              <h3 className="text-2xl font-semibold mt-2 drop-shadow">{questions[currentQuestion].question}</h3>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {questions[currentQuestion].options.map((option, idx) => {
                const isCorrect = option === questions[currentQuestion].answer;
                const isSelected = selectedOption === option;

                let optionClass = "px-5 py-4 rounded-xl text-white text-left transition-all duration-300 border hover:bg-white/30";

                if (selectedOption) {
                  if (isSelected && isCorrect) {
                    optionClass = "px-5 py-4 rounded-xl border border-green-400 bg-green-500/30 text-green-100 font-semibold";
                  } else if (isSelected && !isCorrect) {
                    optionClass = "px-5 py-4 rounded-xl border border-red-400 bg-red-500/30 text-red-100 font-semibold";
                  } else {
                    optionClass += " opacity-50 cursor-not-allowed";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => !selectedOption && handleAnswer(option)}
                    className={optionClass}
                    disabled={!!selectedOption}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizSection;
