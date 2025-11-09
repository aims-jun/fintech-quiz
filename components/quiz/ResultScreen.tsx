interface ResultScreenProps {
  label: string;
  onGoHome: () => void;
}

export default function ResultScreen({ label, onGoHome }: ResultScreenProps) {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8">
      {/* 배경 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <h1 className="text-6xl font-black text-white mb-8">
          {label} 퀴즈 완료
        </h1>
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-12 mb-8">
          <p className="text-3xl text-gray-200">모든 퀴즈를 완료했습니다</p>
        </div>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onGoHome}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold transition-all hover:shadow-lg"
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
