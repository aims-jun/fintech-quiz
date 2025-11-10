"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import OXCard from "@/components/OXCard";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import ResultScreen from "@/components/quiz/ResultScreen";
import { getQuizSetByType } from "@/data/quizzes";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizType = params.type as string;

  const quizSet = getQuizSetByType(quizType);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState<{
    show: boolean;
    isCorrect: boolean;
    explanation?: string;
  }>({ show: false, isCorrect: false });
  const [showWrongEffect, setShowWrongEffect] = useState(false);
  const [shake, setShake] = useState(false);

  if (!quizSet) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-gray-600 mb-8">
            퀴즈를 찾을 수 없습니다.
          </p>
          <button
            onClick={() => router.push("/")}
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all"
          >
            ← 홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const currentQuiz = quizSet.quizzes[currentQuizIndex];
  const totalQuizzes = quizSet.quizzes.length;
  const isLastQuiz = currentQuizIndex === totalQuizzes - 1;

  const handleSelect = (answer: boolean) => {
    if (feedback.show) return; // 피드백 표시 중에는 선택 불가

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuiz.answer;

    // 정답일 때 폭죽 터트리기! 🎉
    if (isCorrect) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      // 정답 소리 재생
      const correctSound = new Audio("/sounds/correct.mp3");
      correctSound.play().catch(() => {
        // 자동재생 차단 등의 이유로 실패할 수 있음
      });
    } else {
      // 오답일 때 화면 흔들기 + 빨간 플래시
      setShake(true);
      setShowWrongEffect(true);

      setTimeout(() => {
        setShake(false);
      }, 500);

      setTimeout(() => {
        setShowWrongEffect(false);
      }, 500);

      // 오답 소리 재생
      const wrongSound = new Audio("/sounds/wrong.mp3");
      wrongSound.play().catch(() => {
        // 자동재생 차단 등의 이유로 실패할 수 있음
      });
    }

    // 즉시 피드백 표시
    setFeedback({
      show: true,
      isCorrect,
      explanation: currentQuiz.explanation,
    });
  };

  const handleNext = () => {
    setFeedback({ show: false, isCorrect: false });
    setSelectedAnswer(null);

    if (isLastQuiz) {
      setShowResult(true);
    } else {
      setCurrentQuizIndex(currentQuizIndex + 1);
    }
  };

  // 결과 화면
  if (showResult) {
    return (
      <ResultScreen label={quizSet.label} onGoHome={() => router.push("/")} />
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-8 relative">
      {/* 배경 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]"></div>

      {/* 오답 빨간 플래시 효과 */}
      {showWrongEffect && (
        <div className="fixed inset-0 bg-red-500 pointer-events-none z-50 animate-red-flash"></div>
      )}

      <div
        className={`relative z-10 max-w-6xl w-full ${
          shake ? "animate-shake" : ""
        }`}
      >
        <QuizHeader label={quizSet.label} />

        <QuizQuestion
          question={currentQuiz.question}
          showFeedback={feedback.show}
          isCorrect={feedback.isCorrect}
          explanation={feedback.explanation}
          isLastQuiz={isLastQuiz}
          onNext={handleNext}
        />

        {/* O/X 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <OXCard
            type="O"
            onSelect={handleSelect}
            isSelected={selectedAnswer === true}
            disabled={feedback.show}
          />
          <OXCard
            type="X"
            onSelect={handleSelect}
            isSelected={selectedAnswer === false}
            disabled={feedback.show}
          />
        </div>

        {/* 홈 버튼 */}
        <div className="text-center">
          <button
            onClick={() => router.push("/")}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-xl font-semibold transition-all hover:shadow-lg"
          >
            ← 홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}
