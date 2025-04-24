import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// ============================
// 📁 src/pages/Team/TeamDetail.tsx
// ============================
import { useParams, useNavigate } from "react-router-dom";
import { teamList } from "@/mock/team";
import { getAppliedTeamIds, saveAppliedTeam, } from "@/utils/storage";
import { useEffect, useState } from "react";
const TeamDetail = () => {
    const { teamId } = useParams();
    const navigate = useNavigate();
    const numericId = Number(teamId);
    const team = teamList.find((t) => t.id === numericId);
    const [applied, setApplied] = useState(false);
    useEffect(() => {
        const appliedIds = getAppliedTeamIds();
        setApplied(appliedIds.includes(numericId));
    }, [numericId]);
    const handleApply = () => {
        if (applied)
            return;
        saveAppliedTeam(numericId);
        setApplied(true);
        navigate("/team/complete");
    };
    if (!team) {
        return _jsx("div", { className: "p-4", children: "\uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uD300\uC785\uB2C8\uB2E4." });
    }
    return (_jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-xl font-bold text-gray-800 mb-2", children: team.title }), _jsx("p", { className: "text-gray-600 mb-4", children: team.description }), _jsxs("p", { className: "text-sm text-gray-500 mb-6", children: ["\uC0C1\uD0DC: ", team.status] }), _jsx("button", { onClick: handleApply, disabled: applied, className: `px-4 py-2 rounded-md text-sm font-medium transition ${applied
                    ? "bg-gray-300 text-white cursor-not-allowed"
                    : "bg-primary text-white hover:bg-primary/90"}`, children: applied ? "지원 완료" : "지원하기" })] }));
};
export default TeamDetail;
