// 📄 src/pages/ProjectDetail.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { projectList } from "../data/projects";
import { teamMembers } from "../data/members";

interface Member {
  name: string;
  role: string;
  status: string;
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectList.find((p) => p.id === Number(id));
  const members: Member[] = (teamMembers as Record<number, Member[]>)[Number(id)] || [];

  const [evaluated, setEvaluated] = useState<boolean[]>(new Array(members.length).fill(false));
  const [loading, setLoading] = useState(false);
  const [scores, setScores] = useState<number[]>(new Array(members.length).fill(0));

  const isAllEvaluated = evaluated.every((v) => v);
  const averageScore = isAllEvaluated
    ? (scores.reduce((acc, cur) => acc + cur, 0) / scores.length).toFixed(1)
    : null;

  if (!project) return <div className="p-4">존재하지 않는 프로젝트입니다.</div>;

  const handleEvaluate = (idx: number) => {
    setLoading(true);
    setTimeout(() => {
      const updated = [...evaluated];
      updated[idx] = true;
      setEvaluated(updated);
      setLoading(false);

      if (updated.every((v) => v)) {
        setTimeout(() => {
          navigate("/complete");
        }, 1000);
      }
    }, 1000);
  };

  const handleScoreChange = (idx: number, score: number) => {
    const updated = [...scores];
    updated[idx] = score;
    setScores(updated);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-primary mb-2">{project.title}</h1>
      <p className="text-sm text-gray-600 mb-4">{project.description}</p>

      {isAllEvaluated && (
        <div className="bg-green-100 border border-green-300 text-green-700 rounded-lg p-3 mb-4 text-sm">
          전체 평가 완료! 평균 점수: <strong>{averageScore}점</strong>
        </div>
      )}

      <h2 className="text-lg font-semibold text-gray-700 mb-2">팀원 목록</h2>
      <ul className="space-y-2">
        {members.map((member, idx) => (
          <li
            key={idx}
            className="bg-white rounded-xl shadow px-4 py-3 flex flex-col gap-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-base font-medium">{member.name}</p>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
              {evaluated[idx] ? (
                <span className="text-xs text-green-600 font-medium animate-pulse">평가 완료 ✅</span>
              ) : (
                <button
                  onClick={() => handleEvaluate(idx)}
                  className={`text-xs px-3 py-1 rounded-full font-medium ${loading ? 'bg-gray-300' : 'bg-primary text-white'}`}
                  disabled={loading || scores[idx] === 0}
                >
                  {loading ? '제출 중...' : '제출하기'}
                </button>
              )}
            </div>
            {!evaluated[idx] && (
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600">점수:</label>
                <select
                  value={scores[idx]}
                  onChange={(e) => handleScoreChange(idx, Number(e.target.value))}
                  className="text-sm border rounded px-2 py-1"
                >
                  <option value={0}>선택</option>
                  <option value={1}>1점</option>
                  <option value={2}>2점</option>
                  <option value={3}>3점</option>
                  <option value={4}>4점</option>
                  <option value={5}>5점</option>
                </select>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}