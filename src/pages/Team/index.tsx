// 📄 src/pages/Team.tsx
import { teamList } from "@/mock/team";
import TeamCard from "../../components/common/TeamCard";
import { getAppliedTeamIds } from "../../utils/storage"; // ✅ 지원 여부 확인 유틸

export default function Team() {
  // 지원한 팀 ID 목록을 가져옴
  const appliedIds = getAppliedTeamIds(); // ✅ 지원한 팀 ID 목록

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-primary mb-4">모집 중인 팀</h1>
      <div className="space-y-3">
        {teamList.map((team) => (
          <TeamCard
            key={team.id}
            id={team.id}
            title={team.title}
            description={team.description}
            status={team.status}
            applied={appliedIds.includes(team.id)} // ✅ 지원 여부 전달
          />
        ))}
      </div>
    </div>
  );
}
