import { useEffect, useState } from "react";
import { teamList } from "../data/teams";
import {
  getAppliedTeamIds,
  getAppliedTeamDetails,
} from "../utils/storage";

interface TagStat {
  [tag: string]: number;
}

export default function Profile() {
  const [appliedTeams, setAppliedTeams] = useState<typeof teamList>([]);
  const [topTags, setTopTags] = useState<string[]>([]);
  const [activityLog, setActivityLog] = useState<
    { id: number; date: string; title: string }[]
  >([]);

  useEffect(() => {
    const appliedIds = getAppliedTeamIds();
    const filteredTeams = teamList.filter((team) => appliedIds.includes(team.id));
    setAppliedTeams(filteredTeams);

    // ✅ 관심 태그 통계
    const tagStats: TagStat = {};
    filteredTeams.forEach((team) => {
      team.tags.forEach((tag) => {
        tagStats[tag] = (tagStats[tag] || 0) + 1;
      });
    });

    const sortedTags = Object.entries(tagStats)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([tag]) => tag);

    setTopTags(sortedTags);

    // ✅ 활동 이력 기록
    const details = getAppliedTeamDetails();
    const merged = details
      .map((record) => {
        const team = teamList.find((t) => t.id === record.id);
        return team
          ? {
              id: team.id,
              title: team.title,
              date: record.date,
            }
          : null;
      })
      .filter(Boolean) as { id: number; title: string; date: string }[];

    setActivityLog(
      merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-primary mb-4">나의 활동 요약</h1>

      {/* 📊 요약 카드 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-sm text-gray-500">총 지원한 팀</p>
          <p className="text-2xl font-bold text-primary">{appliedTeams.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-4 text-center">
          <p className="text-sm text-gray-500">모집 중인 팀</p>
          <p className="text-2xl font-bold text-green-600">
            {
              appliedTeams.filter((team) => team.status === "모집중").length
            }
          </p>
        </div>
      </div>

      {/* 🏷️ 관심 태그 */}
      <div className="mb-6">
        <h2 className="text-md font-semibold text-gray-700 mb-2">관심 분야 Top 3</h2>
        <div className="flex flex-wrap gap-2">
          {topTags.length === 0 ? (
            <p className="text-sm text-gray-400">아직 관심 태그가 없어요.</p>
          ) : (
            topTags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-primary text-white text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))
          )}
        </div>
      </div>

      {/* 🕓 활동 이력 */}
      <div>
        <h2 className="text-md font-semibold text-gray-700 mb-2">지원 활동 이력</h2>
        {activityLog.length === 0 ? (
          <p className="text-sm text-gray-400">아직 활동 이력이 없습니다.</p>
        ) : (
          <ul className="space-y-2">
            {activityLog.map((entry, idx) => (
              <li
                key={idx}
                className="bg-white shadow rounded-lg px-4 py-2 flex justify-between items-center"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">{entry.title}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(entry.date).toLocaleString("ko-KR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
