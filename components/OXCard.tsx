"use client";

interface OXCardProps {
  type: "O" | "X";
  onSelect: (answer: boolean) => void;
  isSelected?: boolean;
  disabled?: boolean;
}

export default function OXCard({
  type,
  onSelect,
  isSelected = false,
  disabled = false,
}: OXCardProps) {
  const isO = type === "O";

  return (
    <button
      onClick={() => onSelect(isO)}
      disabled={disabled}
      className={`
        group relative overflow-hidden
        w-full aspect-square
        rounded-3xl
        transform transition-all duration-300
        hover:scale-110 hover:-translate-y-2
        active:scale-95
        disabled:cursor-not-allowed
        ${
          isO
            ? "bg-linear-to-br from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-700"
            : "bg-linear-to-br from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700"
        }
        ${isSelected ? "scale-105 -translate-y-2" : ""}
        ${disabled ? "opacity-70" : ""}
        shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]
      `}
    >
      {/* 배경 패턴 효과 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),transparent)]" />
      </div>

      {/* 반짝이는 효과 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/20 to-transparent" />
      </div>

      {/* O 또는 X 텍스트 */}
      <div className="relative flex items-center justify-center h-full">
        <span className="text-white font-black text-9xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-300">
          {type}
        </span>
      </div>

      {/* 테두리 글로우 효과 */}
      <div
        className={`
        absolute inset-0 rounded-3xl transition-opacity duration-300
        ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
        ${isO ? "ring-4 ring-blue-300" : "ring-4 ring-red-300"}
      `}
      />
    </button>
  );
}
