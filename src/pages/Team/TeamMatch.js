import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// ============================
// 📁 src/pages/Team/TeamMatch.tsx
// ============================
import TeamCard from "@/components/common/TeamCard";
import { teamList } from "@/mock/team";
import { getAppliedTeamIds } from "@/utils/storage";
export default function TeamMatch() {
    const appliedIds = getAppliedTeamIds();
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-800 mb-4", children: "\uD300 \uB9E4\uCE6D" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: teamList.map((team) => (_jsx(TeamCard, { id: team.id, title: team.title, description: team.description, recruiting: team.status === "모집중", applied: appliedIds.includes(team.id) }, team.id))) })] }));
}
