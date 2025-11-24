"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import OXCard from "@/components/OXCard";
import QuizHeader from "@/components/quiz/QuizHeader";
import QuizQuestion from "@/components/quiz/QuizQuestion";
import ResultScreen from "@/components/quiz/ResultScreen";
import { getRandomQuizzes } from "@/data/quizzes";

export default function QuizPage() {
  const router = useRouter();
  
  // 랜덤으로 5개의 퀴즈를 선택 (컴포넌트 마운트 시 한 번만 실행)
  const randomQuizzes = useMemo(() => getRandomQuizzes(5), []);
  
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0); // 맞춘 개수 카운팅
  const [feedback, setFeedback] = useState<{
    show: boolean;
    isCorrect: boolean;
    explanation?: string;
  }>({ show: false, isCorrect: false });
  const [showWrongEffect, setShowWrongEffect] = useState(false);
  const [shake, setShake] = useState(false);

  const currentQuiz = randomQuizzes[currentQuizIndex];
  const totalQuizzes = randomQuizzes.length;
  const isLastQuiz = currentQuizIndex === totalQuizzes - 1;

  const handleSelect = (answer: boolean) => {
    if (feedback.show) return; // 피드백 표시 중에는 선택 불가

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuiz.answer;

    // 정답일 때 폭죽 터트리기! 🎉
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1); // 정답 카운트 증가
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
      <ResultScreen
        correctCount={correctCount}
        totalQuizzes={totalQuizzes}
        onGoHome={() => router.push("/")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-50 flex flex-col items-center justify-center p-8 relative">
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

      {/* 오답 빨간 플래시 효과 */}
      {showWrongEffect && (
        <div className="fixed inset-0 bg-red-500 pointer-events-none z-50 animate-red-flash"></div>
      )}

      <div
        className={`relative z-10 max-w-[1600px] w-full ${
          shake ? "animate-shake" : ""
        }`}
      >
        <QuizHeader />

        <QuizQuestion
          question={currentQuiz.question}
          showFeedback={feedback.show}
          isCorrect={feedback.isCorrect}
          explanation={feedback.explanation}
          isLastQuiz={isLastQuiz}
          onNext={handleNext}
        />

        {/* O/X 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
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
            className="px-12 py-6 bg-white border-4 border-gray-300 hover:border-gray-900 text-gray-900 rounded-2xl font-bold text-xl transition-all hover:shadow-lg"
          >
            ← 홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
}

