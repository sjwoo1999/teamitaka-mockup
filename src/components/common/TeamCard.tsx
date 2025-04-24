import { FC } from "react";
import { Users } from "lucide-react";
import classNames from "classnames";

interface TeamCardProps {
  title: string;
  description: string;
  recruiting: boolean;
}

const TeamCard: FC<TeamCardProps> = ({ title, description, recruiting }) => {
  const buttonClass = classNames(
    "px-3 py-1 text-sm rounded-full",
    recruiting ? "bg-primary text-white" : "bg-gray-100 text-gray-700"
  );

  const cardClass = classNames(
    "rounded-xl border px-4 py-4 shadow-sm space-y-2",
    recruiting ? "bg-[#FFF9F7] border-[#FFE5DB]" : "bg-white border-gray-200"
  );

  return (
    <div className={cardClass}>
      <h3 className="text-lg font-semibold text-primary leading-snug">
        {title}
      </h3>
      <p className="text-sm text-gray-700">{description}</p>

      <div className="flex items-center gap-2">
        <Users className="text-primary" size={20} />
        <span className="text-xs text-gray-500">팀 구성 중</span>
      </div>

      <div className="flex justify-end mt-2">
        <button className={buttonClass}>
          {recruiting ? "모집중" : "모집 완료"}
        </button>
      </div>
    </div>
  );
};

export default TeamCard;