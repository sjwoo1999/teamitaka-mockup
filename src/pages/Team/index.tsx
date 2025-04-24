// ============================
// 📁 src/pages/Team/index.tsx
// ============================

import { teamList } from "@/mock/team";
import TeamCard from "@/components/common/TeamCard";
import { getAppliedTeamIds } from "@/utils/storage";

export default function Team() {
  const appliedIds = getAppliedTeamIds();

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
            recruiting={team.status === "모집중"}
            applied={appliedIds.includes(team.id)}
          />
        ))}
      </div>
    </div>
  );
}