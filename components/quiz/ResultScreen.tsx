interface ResultScreenProps {
  correctCount: number;
  totalQuizzes: number;
  onGoHome: () => void;
}

export default function ResultScreen({
  correctCount,
  totalQuizzes,
  onGoHome,
}: ResultScreenProps) {
  // 점수에 따른 상품 결정
  const getReward = () => {
    if (correctCount >= 5) {
      return {
        name: "초콜릿 2개",
        emoji: "🍫🍫",
        message: "완벽해요! 초콜릿 2개를 받아가세요!",
      };
    } else {
      return {
        name: "초콜릿",
        emoji: "🍫",
        message: "초콜릿을 받아가세요!",
      };
    }
  };

  const reward = getReward();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center p-8 relative">
      {/* 서브틀한 배경 패턴 */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 40px),
                          repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 40px)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <div className="mb-12">
          <div className="inline-block px-10 py-4 bg-gray-900 text-white rounded-full text-xl font-bold mb-8">
            AIMS Insurance.ai
          </div>
          <h1 className="text-8xl font-black text-gray-900 mb-6">퀴즈 완료</h1>
        </div>
        <div className="bg-white border-4 border-gray-200 rounded-3xl shadow-xl p-20 mb-12">
          <p className="text-4xl text-gray-700 font-semibold mb-8">
            모든 퀴즈를 완료했습니다!
          </p>

          {/* 점수 표시 */}
          <div className="mb-10">
            <div
              className="text-8xl font-black mb-4"
              style={{ color: "#d21b6a" }}
            >
              {correctCount} / {totalQuizzes}
            </div>
          </div>

          {/* 상품 표시 */}
          <div className="mb-8">
            <div className="text-9xl mb-6">{reward.emoji}</div>
            <p
              className="text-5xl font-black mb-4"
              style={{ color: "#d21b6a" }}
            >
              {reward.name}
            </p>
            <p className="text-3xl text-gray-600 font-semibold">
              {reward.message}
            </p>
          </div>

          <p className="text-2xl text-gray-500 mt-8">
            에임스와 함께해 주셔서 감사합니다
          </p>
        </div>
        <div className="flex gap-6 justify-center">
          <button
            onClick={onGoHome}
            className="px-12 py-6 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-bold text-2xl transition-all hover:shadow-lg"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
