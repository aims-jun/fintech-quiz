"use client";

import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const quizTypes = [
    {
      id: "a",
      label: "에",
      image: "/autodit.png",
      gradient: "bg-linear-to-br from-blue-500 to-cyan-500",
    },
    {
      id: "b",
      label: "임",
      image: "/capture.png",
      gradient: "bg-linear-to-br from-purple-500 to-pink-500",
    },
    {
      id: "c",
      label: "스",
      image: "/claim.png",
      gradient: "bg-linear-to-br from-orange-500 to-red-500",
    },
  ];

  const handleQuizSelect = (id: string) => {
    router.push(`/quiz/${id}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* 배경 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]"></div>

      {/* 배경 애니메이션 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* 헤더 */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400">
              AIMS
            </h1>
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
          <p className="text-3xl md:text-4xl text-white font-bold">
            AI 기반 보험 혁신 기업 에임스와 함께하는 퀴즈
          </p>
        </div>

        {/* 퀴즈 카드들 */}
        <div className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quizTypes.map((quiz, index) => (
              <button
                key={quiz.id}
                onClick={() => handleQuizSelect(quiz.id)}
                className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-12 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* 그라데이션 글로우 효과 */}
                <div
                  className={`absolute inset-0 ${quiz.gradient} opacity-0 group-hover:opacity-20 rounded-3xl transition-opacity duration-500 blur-xl`}
                ></div>

                {/* 테두리 글로우 */}
                <div
                  className={`absolute inset-0 ${quiz.gradient} opacity-0 group-hover:opacity-30 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* 카드 내용 */}
                <div className="relative flex flex-col items-center justify-center gap-6">
                  {/* 이미지 아이콘 */}
                  <div className="group-hover:rotate-12 transition-transform duration-500">
                    <Image
                      src={quiz.image}
                      alt={`${quiz.label} 아이콘`}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain rounded-2xl shadow-2xl"
                      unoptimized
                      priority
                    />
                  </div>

                  {/* 라벨 */}
                  <span className="text-7xl font-black text-white group-hover:scale-110 transition-transform duration-300">
                    {quiz.label}
                  </span>

                  {/* 하단 텍스트 */}
                  <div className="text-gray-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    클릭하여 시작
                  </div>
                </div>

                {/* 반짝이는 효과 */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/10 to-transparent rounded-t-3xl"></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
          <p className="text-gray-400 text-sm">
            핀테크 지식을 테스트하고 에임스에 대해 알아보세요
          </p>
        </div>
      </div>
    </div>
  );
}
