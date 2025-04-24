// 📄 src/pages/Match/index.tsx
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { teamList } from "@/mock/team"; // teamList는 mock에서 가져옴
import TeamCard from "@/components/common/TeamCard";
import { getAppliedTeamIds } from "@/utils/storage";
export default function Match() {
    const [selectedTag, setSelectedTag] = useState(null);
    const appliedIds = getAppliedTeamIds();
    const uniqueTags = Array.from(new Set(teamList.flatMap((team) => team.tags)));
    const filteredList = selectedTag
        ? teamList.filter((team) => team.tags.includes(selectedTag))
        : teamList;
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-xl font-bold text-primary mb-4", children: "\uD83C\uDFAF \uB9DE\uCDA4\uD615 \uD300 \uCC3E\uAE30" }), _jsx("p", { className: "text-sm text-gray-600 mb-4", children: "\uAD00\uC2EC \uBD84\uC57C\uC5D0 \uB530\uB77C \uB2F9\uC2E0\uC5D0\uAC8C \uC5B4\uC6B8\uB9AC\uB294 \uD300\uC744 \uCD94\uCC9C\uD574\uB4DC\uB9B4\uAC8C\uC694." }), _jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: uniqueTags.map((tag, idx) => (_jsxs("button", { className: `px-3 py-1 text-xs rounded-full border transition-all duration-200 ${selectedTag === tag
                        ? "bg-primary text-white border-primary font-semibold ring-2 ring-primary/40"
                        : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"}`, onClick: () => setSelectedTag(tag === selectedTag ? null : tag), children: ["#", tag] }, idx))) }), _jsx("div", { className: "space-y-3", children: filteredList.length === 0 ? (_jsx("p", { className: "text-sm text-gray-400 text-center mt-8", children: "\uD83D\uDE22 \uD574\uB2F9 \uD0DC\uADF8\uC5D0 \uB9DE\uB294 \uD300\uC774 \uC5C6\uC5B4\uC694." })) : (filteredList.map((team) => (_jsx(TeamCard, { id: team.id, title: team.title, description: team.description, status: team.status, applied: appliedIds.includes(team.id) }, team.id)))) })] }));
}
