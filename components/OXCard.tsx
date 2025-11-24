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
        hover:scale-105 hover:-translate-y-2
        active:scale-95
        disabled:cursor-not-allowed
        ${
          isO
            ? "bg-white border-[6px] border-blue-500 hover:border-blue-600 hover:bg-blue-50"
            : "bg-white border-[6px] border-red-500 hover:border-red-600 hover:bg-red-50"
        }
        ${isSelected ? "scale-105 -translate-y-2" : ""}
        ${disabled ? "opacity-70" : ""}
        shadow-xl hover:shadow-2xl
      `}
    >
      {/* O 또는 X 텍스트 */}
      <div className="relative flex items-center justify-center h-full">
        <span 
          className={`font-black text-[12rem] group-hover:scale-110 transition-transform duration-300 ${
            isO ? "text-blue-500" : "text-red-500"
          }`}
        >
          {type}
        </span>
      </div>

      {/* 선택된 상태 표시 */}
      {isSelected && (
        <div
          className={`absolute inset-0 rounded-3xl ${
            isO ? "bg-blue-500/10" : "bg-red-500/10"
          }`}
        />
      )}
    </button>
  );
}
