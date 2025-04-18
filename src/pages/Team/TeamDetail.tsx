// 📄 src/pages/Team/TeamDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { teamList } from "@/mock/team";
import {
  getAppliedTeamIds,
  saveAppliedTeam,
} from "@/utils/storage";
import { useEffect, useState } from "react";

const TeamDetail = () => {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const numericId = Number(teamId);
  const team = teamList.find((t) => t.id === numericId);

  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const appliedIds = getAppliedTeamIds();
    setApplied(appliedIds.includes(numericId));
  }, [numericId]);

  const handleApply = () => {
    if (applied) return;
    saveAppliedTeam(numericId);
    setApplied(true);
    alert("✅ 지원이 완료되었습니다!");
    navigate(-1); // 이전 페이지로 이동
  };

  if (!team) {
    return <div className="p-4">존재하지 않는 팀입니다.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        {team.title}
      </h1>
      <p className="text-gray-600 mb-4">{team.description}</p>
      <p className="text-sm text-gray-500 mb-6">
        상태: {team.status}
      </p>

      <button
        onClick={handleApply}
        disabled={applied}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          applied
            ? "bg-gray-300 text-white cursor-not-allowed"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
      >
        {applied ? "지원 완료" : "지원하기"}
      </button>
    </div>
  );
};

export default TeamDetail;