// 📄 src/pages/Match.tsx
import { useState } from "react";
import { teamList } from "../data/teams";
import TeamCard from "../components/TeamCard";
import { getAppliedTeamIds } from "../utils/storage"; 

export default function Match() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const appliedIds = getAppliedTeamIds();

  const uniqueTags = Array.from(
    new Set(teamList.flatMap((team) => team.tags))
  );

  const filteredList = selectedTag
    ? teamList.filter((team) => team.tags.includes(selectedTag))
    : teamList;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-primary mb-4">맞춤형 팀 찾기</h1>
      <p className="text-sm text-gray-600 mb-4">
        관심 분야에 따라 당신에게 어울리는 팀을 추천해드릴게요.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {uniqueTags.map((tag, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 text-xs rounded-full border ${
              selectedTag === tag
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 border-gray-300"
            }`}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
          >
            #{tag}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredList.map((team) => (
          <TeamCard
            key={team.id}
            id={team.id}
            title={team.title}
            description={team.description}
            status={team.status}
            applied={appliedIds.includes(team.id)}
          />
        ))}
      </div>
    </div>
  );
}