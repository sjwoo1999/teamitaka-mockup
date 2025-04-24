import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// ============================
// 📁 src/pages/Team/index.tsx
// ============================
import { teamList } from "@/mock/team";
import TeamCard from "@/components/common/TeamCard";
import { getAppliedTeamIds } from "@/utils/storage";
export default function Team() {
    const appliedIds = getAppliedTeamIds();
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-xl font-bold text-primary mb-4", children: "\uBAA8\uC9D1 \uC911\uC778 \uD300" }), _jsx("div", { className: "space-y-3", children: teamList.map((team) => (_jsx(TeamCard, { id: team.id, title: team.title, description: team.description, recruiting: team.status === "모집중", applied: appliedIds.includes(team.id) }, team.id))) })] }));
}
