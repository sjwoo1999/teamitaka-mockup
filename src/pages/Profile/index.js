import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { teamList } from "@/mock/team";
import { getAppliedTeamIds, getAppliedTeamDetails, } from "../../utils/storage";
export default function Profile() {
    const [appliedTeams, setAppliedTeams] = useState([]);
    const [topTags, setTopTags] = useState([]);
    const [activityLog, setActivityLog] = useState([]);
    useEffect(() => {
        const appliedIds = getAppliedTeamIds();
        const filteredTeams = teamList.filter((team) => appliedIds.includes(team.id));
        setAppliedTeams(filteredTeams);
        // ✅ 관심 태그 통계
        const tagStats = {};
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
            .filter(Boolean);
        setActivityLog(merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
    }, []);
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-xl font-bold text-primary mb-4", children: "\uB098\uC758 \uD65C\uB3D9 \uC694\uC57D" }), _jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6", children: [_jsxs("div", { className: "bg-white rounded-xl shadow p-4 text-center", children: [_jsx("p", { className: "text-sm text-gray-500", children: "\uCD1D \uC9C0\uC6D0\uD55C \uD300" }), _jsx("p", { className: "text-2xl font-bold text-primary", children: appliedTeams.length })] }), _jsxs("div", { className: "bg-white rounded-xl shadow p-4 text-center", children: [_jsx("p", { className: "text-sm text-gray-500", children: "\uBAA8\uC9D1 \uC911\uC778 \uD300" }), _jsx("p", { className: "text-2xl font-bold text-green-600", children: appliedTeams.filter((team) => team.status === "모집중").length })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h2", { className: "text-md font-semibold text-gray-700 mb-2", children: "\uAD00\uC2EC \uBD84\uC57C Top 3" }), _jsx("div", { className: "flex flex-wrap gap-2", children: topTags.length === 0 ? (_jsx("p", { className: "text-sm text-gray-400", children: "\uC544\uC9C1 \uAD00\uC2EC \uD0DC\uADF8\uAC00 \uC5C6\uC5B4\uC694." })) : (topTags.map((tag, idx) => (_jsxs("span", { className: "bg-primary text-white text-xs px-3 py-1 rounded-full", children: ["#", tag] }, idx)))) })] }), _jsxs("div", { children: [_jsx("h2", { className: "text-md font-semibold text-gray-700 mb-2", children: "\uC9C0\uC6D0 \uD65C\uB3D9 \uC774\uB825" }), activityLog.length === 0 ? (_jsx("p", { className: "text-sm text-gray-400", children: "\uC544\uC9C1 \uD65C\uB3D9 \uC774\uB825\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." })) : (_jsx("ul", { className: "space-y-2", children: activityLog.map((entry, idx) => (_jsx("li", { className: "bg-white shadow rounded-lg px-4 py-2 flex justify-between items-center", children: _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium text-gray-800", children: entry.title }), _jsx("p", { className: "text-xs text-gray-500", children: new Date(entry.date).toLocaleString("ko-KR", {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        }) })] }) }, idx))) }))] })] }));
}
