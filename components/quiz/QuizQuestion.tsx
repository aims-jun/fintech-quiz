interface QuizQuestionProps {
  question: string;
  showFeedback: boolean;
  isCorrect: boolean;
  explanation?: string;
  isLastQuiz: boolean;
  onNext: () => void;
}

export default function QuizQuestion({
  question,
  showFeedback,
  isCorrect,
  explanation,
  isLastQuiz,
  onNext,
}: QuizQuestionProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-12 mb-12 relative">
      <p className="text-3xl font-bold text-white text-center leading-relaxed">
        {question}
      </p>

      {/* 피드백 및 다음 버튼 */}
      {showFeedback && (
        <div
          className={`mt-8 p-6 rounded-2xl backdrop-blur-sm ${
            isCorrect
              ? "bg-green-500/20 border-2 border-green-400/50"
              : "bg-red-500/20 border-2 border-red-400/50"
          }`}
        >
          <p
            className={`text-2xl font-bold mb-2 ${
              isCorrect ? "text-green-300" : "text-red-300"
            }`}
          >
            {isCorrect ? "정답입니다" : "틀렸습니다"}
          </p>
          {explanation && (
            <p className="text-lg text-gray-200 mb-4">{explanation}</p>
          )}
          <button
            onClick={onNext}
            className="w-full mt-4 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg transition-all hover:shadow-lg"
          >
            {isLastQuiz ? "결과 보기" : "다음 문제"}
          </button>
        </div>
      )}
    </div>
  );
}
