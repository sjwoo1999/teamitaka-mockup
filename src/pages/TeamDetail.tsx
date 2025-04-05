import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { teamList } from "../data/teams";
import { teamMembers } from "../data/teamMembers";
import {
  getAppliedTeamIds,
  saveAppliedTeam,
  removeAppliedTeam,
  saveAppliedTeamWithDate,
  removeAppliedTeamWithDate,
} from "../utils/storage";

export default function TeamDetail() {
  const { id } = useParams();
  const numericId = Number(id);
  const team = teamList.find((t) => t.id === numericId);
  const members = teamMembers[numericId] || [];

  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const appliedIds = getAppliedTeamIds();
    if (appliedIds.includes(numericId)) {
      setApplied(true);
    }
  }, [numericId]);

  if (!team) return <div className="p-4">존재하지 않는 팀입니다.</div>;

  const handleApply = () => {
    saveAppliedTeam(team.id);
    saveAppliedTeamWithDate(team.id);
    setApplied(true);
  };

  const handleCancel = () => {
    removeAppliedTeam(team.id);
    removeAppliedTeamWithDate(team.id);
    setApplied(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{team.title}</h1>
      <span
        className={`inline-block text-xs text-white px-2 py-1 rounded-full mb-4 ${
          team.status === "모집중" ? "bg-primary" : "bg-gray-400"
        }`}
      >
        {team.status}
      </span>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{team.description}</p>

      <h2 className="text-lg font-semibold text-gray-700 mb-2">기술 태그</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {team.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <h2 className="text-lg font-semibold text-gray-700 mb-2">팀원 구성</h2>
      <ul className="space-y-2 mb-6">
        {members.map((member, idx) => (
          <li
            key={idx}
            className="bg-white shadow rounded-lg px-4 py-2 flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-medium text-gray-800">{member.name}</p>
              <p className="text-xs text-gray-500">{member.role}</p>
            </div>
            <span className="text-xl">{member.profile}</span>
          </li>
        ))}
      </ul>

      {team.status !== "모집중" ? (
        <button
          disabled
          className="w-full bg-gray-200 text-gray-400 font-medium py-2 rounded-xl text-sm cursor-not-allowed"
        >
          모집이 마감된 팀입니다
        </button>
      ) : applied ? (
        <>
          <div className="text-center mt-4 text-green-600 text-sm font-medium animate-pulse">
            🎉 지원이 완료되었습니다!
          </div>
          <button
            onClick={handleCancel}
            className="w-full mt-4 bg-gray-200 text-gray-700 font-medium py-2 rounded-xl text-sm hover:bg-gray-300"
          >
            지원 취소하기
          </button>
        </>
      ) : (
        <button
          onClick={handleApply}
          className="w-full bg-primary text-white font-medium py-2 rounded-xl text-sm"
        >
          팀 지원하기
        </button>
      )}
    </div>
  );
}
