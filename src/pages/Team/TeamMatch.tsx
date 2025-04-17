// 📄 src/pages/TeamMatch.tsx
import TeamCard from "../../components/TeamCard";
import { teamList } from "../../data/teams";

export default function TeamMatch() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">팀 매칭</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamList.map((team) => (
          <TeamCard key={team.id} {...team} />
        ))}
      </div>
    </div>
  );
}