"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleQuizStart = () => {
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-gray-50 via-white to-gray-50">
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

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* 헤더 */}
        <div className="text-center mb-24 animate-fade-in-down">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-6 h-6 bg-black rotate-45"></div>
            <h1 className="text-9xl font-black text-gray-900">QUIZ</h1>
            <div className="w-6 h-6 bg-black rotate-45"></div>
          </div>
          <p className="text-5xl text-gray-600 font-semibold mb-4">
            퀴즈풀고 간식 받아가세요!
          </p>
        </div>

        {/* 시작하기 버튼 */}
        <div className="max-w-md w-full">
          <button
            onClick={handleQuizStart}
            className="w-full rounded-3xl p-12 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in-up"
            style={{ backgroundColor: "#d21b6a" }}
          >
            <span className="text-6xl font-black text-white">시작하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
