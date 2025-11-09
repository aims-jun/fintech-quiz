interface QuizHeaderProps {
  label: string;
}

export default function QuizHeader({ label }: QuizHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-7xl font-black text-white mb-4">{label} 퀴즈</h1>
      <p className="text-2xl text-gray-300">
        문제를 읽고 O 또는 X를 선택하세요
      </p>
    </div>
  );
}

