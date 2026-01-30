import {
  FaRobot,
  FaBrain,
  FaNetworkWired,
  FaProjectDiagram,
  FaChartLine,
  FaCogs,
  FaCamera,
  FaMicrochip,
  FaLanguage,
  FaEye,
  FaCloud,
  FaSearch
} from "react-icons/fa";

const iconMap = {
  ml: <FaBrain size={32} className="text-purple-500" />,
  dl: <FaRobot size={32} className="text-blue-500" />,
  nlp: <FaLanguage size={32} className="text-green-500" />,
  cv: <FaEye size={32} className="text-pink-500" />,
  robotics: <FaMicrochip size={32} className="text-gray-600" />,
  aiethics: <FaCogs size={32} className="text-red-400" />,
  gpt: <FaProjectDiagram size={32} className="text-indigo-500" />,
  datascience: <FaChartLine size={32} className="text-yellow-500" />,
  rl: <FaNetworkWired size={32} className="text-teal-500" />,
  aiinfra: <FaCloud size={32} className="text-blue-400" />,
  vision: <FaCamera size={32} className="text-rose-500" />,
  search: <FaSearch size={32} className="text-orange-500" />
};

function QuizPage() {
  const quizzes = [
    { id: "ml", title: "Machine Learning" },
    { id: "dl", title: "Deep Learning" },
    { id: "nlp", title: "Natural Language Processing" },
    { id: "cv", title: "Computer Vision" },
    { id: "robotics", title: "Robotics" },
    { id: "aiethics", title: "AI Ethics" },
    { id: "gpt", title: "GPT & Transformers" },
    { id: "datascience", title: "Data Science" },
    { id: "rl", title: "Reinforcement Learning" },
    { id: "aiinfra", title: "AI Infrastructure" },
    { id: "vision", title: "Visual Recognition" },
    { id: "search", title: "AI in Search Engines" }
  ];

  return (
    <section
      className="px-6 py-20 min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://scitechdaily.com/images/Brain-Signals-Rotating-Test.gif')"
      }}
    >
      <div className="max-w-7xl mx-auto backdrop-blur-sm bg-black/40 p-6 rounded-xl shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center">AI Knowledge Quizzes</h2>
        <p className="text-center mb-12 text-gray-300 max-w-2xl mx-auto">
          Sharpen your skills and validate your knowledge in various AI domains. Dive into quizzes tailored for aspiring AI experts!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {quizzes.map((quiz) => (
            <a
              key={quiz.id}
              href={`/quiz/${quiz.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/20 hover:scale-105 transition-transform duration-300 text-white hover:border-purple-400 block"
            >
              <div className="mb-4">{iconMap[quiz.id]}</div>
              <h3 className="text-xl font-semibold mb-1">{quiz.title}</h3>
              <p className="text-sm text-gray-200">
                Test your expertise in {quiz.title}.
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuizPage;
