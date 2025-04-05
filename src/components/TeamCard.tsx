// 📄 src/components/TeamCard.tsx
import { useNavigate } from "react-router-dom";
import clsx from "clsx"; // ✅ 조건부 클래스 조합용
import Button from "./Button";

interface TeamCardProps {
  id: number;
  title: string;
  description: string;
  status: string;
  applied?: boolean; // ✅ 지원 여부
}

export default function TeamCard({ id, title, description, status, applied }: TeamCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/team/${id}`)}
      className={clsx(
        "p-4 rounded-xl cursor-pointer transition shadow",
        applied
          ? "bg-green-50 border border-green-400" // ✅ 지원 완료된 팀 스타일
          : "bg-white hover:bg-gray-50" // ✅ 일반 팀 스타일
      )}
    >
      <h2 className="text-lg font-semibold mb-1 text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <Button className="text-xs px-2 py-1 rounded-full">
        {applied ? "지원 완료" : status} {/* ✅ 지원 완료시 버튼 텍스트 변경 */}
      </Button>
    </div>
  );
}
