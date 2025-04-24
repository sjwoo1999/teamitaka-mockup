// 📄 src/components/common/ProjectCard.tsx
import { FC } from "react";
import { UserCircle } from "lucide-react";
import classNames from "classnames";
import { getStatusStyle } from "@/utils/statusUtils";

interface ProjectCardProps {
  title: string;
  description: string;
  teamExp: string;
  status: "진행 중" | "오늘 시작" | "예정";
  dDay: number;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  teamExp,
  status,
  dDay,
}) => {
  const statusStyle = getStatusStyle(status);

  return (
    <div className="rounded-xl bg-[#FFF9F7] border border-[#FFE5DB] px-4 py-4 shadow-sm space-y-2">
      <h3 className="text-lg font-semibold text-primary leading-snug">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>

      <div className="flex items-center gap-2">
        <UserCircle className="text-primary" size={20} />
        <span className="text-xs text-gray-500">{teamExp}</span>
      </div>

      <div className="flex justify-between items-center text-sm mt-1">
        <span className="text-muted">상태: {status}</span>
        <span className="text-muted">D-Day: {dDay > 0 ? `+${dDay}` : dDay}</span>
      </div>

      <div className="flex gap-2 mt-2">
        <button className={classNames("px-3 py-1 text-sm rounded-full", statusStyle.bg, statusStyle.text)}>
          프로젝트 진행
        </button>
        <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700">
          프로젝트 수정
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;