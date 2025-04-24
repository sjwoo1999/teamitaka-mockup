import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users } from "lucide-react";
import classNames from "classnames";
const TeamCard = ({ title, description, recruiting }) => {
    const buttonClass = classNames("px-3 py-1 text-sm rounded-full", recruiting ? "bg-primary text-white" : "bg-gray-100 text-gray-700");
    const cardClass = classNames("rounded-xl border px-4 py-4 shadow-sm space-y-2", recruiting ? "bg-[#FFF9F7] border-[#FFE5DB]" : "bg-white border-gray-200");
    return (_jsxs("div", { className: cardClass, children: [_jsx("h3", { className: "text-lg font-semibold text-primary leading-snug", children: title }), _jsx("p", { className: "text-sm text-gray-700", children: description }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { className: "text-primary", size: 20 }), _jsx("span", { className: "text-xs text-gray-500", children: "\uD300 \uAD6C\uC131 \uC911" })] }), _jsx("div", { className: "flex justify-end mt-2", children: _jsx("button", { className: buttonClass, children: recruiting ? "모집중" : "모집 완료" }) })] }));
};
export default TeamCard;
