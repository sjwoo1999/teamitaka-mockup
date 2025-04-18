// 📄 src/pages/Match/index.tsx
import { useState } from "react";
import { teamList } from "@/mock/team"; // teamList는 mock에서 가져옴
import TeamCard from "@/components/common/TeamCard";
import { getAppliedTeamIds } from "@/utils/storage";

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
      <h1 className="text-xl font-bold text-primary mb-4">🎯 맞춤형 팀 찾기</h1>
      <p className="text-sm text-gray-600 mb-4">
        관심 분야에 따라 당신에게 어울리는 팀을 추천해드릴게요.
      </p>

      {/* 태그 필터 */}
      <div className="flex flex-wrap gap-2 mb-6">
        {uniqueTags.map((tag, idx) => (
          <button
            key={idx}
            className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
              selectedTag === tag
                ? "bg-primary text-white border-primary font-semibold ring-2 ring-primary/40"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* 결과 리스트 */}
      <div className="space-y-3">
        {filteredList.length === 0 ? (
          <p className="text-sm text-gray-400 text-center mt-8">
            😢 해당 태그에 맞는 팀이 없어요.
          </p>
        ) : (
          filteredList.map((team) => (
            <TeamCard
              key={team.id}
              id={team.id}
              title={team.title}
              description={team.description}
              status={team.status}
              applied={appliedIds.includes(team.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}