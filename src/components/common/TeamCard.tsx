import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import Button from "./Button";

interface TeamCardProps {
  id: number;
  title: string;
  description: string;
  status: string;
  applied?: boolean; // 지원 여부
}

export default function TeamCard({
  id,
  title,
  description,
  status,
  applied = false,
}: TeamCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/team/${id}`)}
      className={clsx(
        "p-4 rounded-xl border transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01] cursor-pointer",
        applied
          ? "bg-green-50 border-green-400"
          : "bg-white border-gray-200"
      )}
    >
      <div className="flex items-start justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <Button
          className={clsx(
            "text-xs px-2 py-1 rounded-full",
            applied
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700"
          )}
        >
          {applied ? "지원 완료" : status}
        </Button>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}