// ============================
// 📁 src/pages/Team/TeamMatch.tsx
// ============================

import TeamCard from "@/components/common/TeamCard";
import { teamList } from "@/mock/team";
import { getAppliedTeamIds } from "@/utils/storage";

export default function TeamMatch() {
  const appliedIds = getAppliedTeamIds();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">팀 매칭</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamList.map((team) => (
          <TeamCard
            key={team.id}
            id={team.id}
            title={team.title}
            description={team.description}
            recruiting={team.status === "모집중"}
            applied={appliedIds.includes(team.id)}
          />
        ))}
      </div>
    </div>
  );
}
