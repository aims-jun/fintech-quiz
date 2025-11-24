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
    <div className="bg-white border-4 border-gray-200 rounded-3xl shadow-xl p-16 mb-16 relative">
      <p className="text-5xl font-bold text-gray-900 text-center leading-relaxed">
        {question}
      </p>

      {/* 피드백 및 다음 버튼 */}
      {showFeedback && (
        <div
          className={`mt-12 p-10 rounded-2xl ${
            isCorrect
              ? "bg-green-50 border-4 border-green-500"
              : "bg-red-50 border-4 border-red-500"
          }`}
        >
          <p
            className={`text-4xl font-bold mb-4 ${
              isCorrect ? "text-green-700" : "text-red-700"
            }`}
          >
            {isCorrect ? "✓ 정답입니다" : "✗ 틀렸습니다"}
          </p>
          {explanation && (
            <p className="text-2xl text-gray-700 mb-6">{explanation}</p>
          )}
          <button
            onClick={onNext}
            className="w-full mt-6 px-12 py-6 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-bold text-2xl transition-all hover:shadow-lg"
          >
            {isLastQuiz ? "결과 보기" : "다음 문제"}
          </button>
        </div>
      )}
    </div>
  );
}
