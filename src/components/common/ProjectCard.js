import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UserCircle } from "lucide-react";
import classNames from "classnames";
import { getStatusStyle } from "@/utils/statusUtils";
const ProjectCard = ({ title, description, teamExp, status, dDay, }) => {
    const statusStyle = getStatusStyle(status);
    return (_jsxs("div", { className: "rounded-xl bg-[#FFF9F7] border border-[#FFE5DB] px-4 py-4 shadow-sm space-y-2", children: [_jsx("h3", { className: "text-lg font-semibold text-primary leading-snug", children: title }), _jsx("p", { className: "text-sm text-gray-700", children: description }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(UserCircle, { className: "text-primary", size: 20 }), _jsx("span", { className: "text-xs text-gray-500", children: teamExp })] }), _jsxs("div", { className: "flex justify-between items-center text-sm mt-1", children: [_jsxs("span", { className: "text-muted", children: ["\uC0C1\uD0DC: ", status] }), _jsxs("span", { className: "text-muted", children: ["D-Day: ", dDay > 0 ? `+${dDay}` : dDay] })] }), _jsxs("div", { className: "flex gap-2 mt-2", children: [_jsx("button", { className: classNames("px-3 py-1 text-sm rounded-full", statusStyle.bg, statusStyle.text), children: "\uD504\uB85C\uC81D\uD2B8 \uC9C4\uD589" }), _jsx("button", { className: "px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-700", children: "\uD504\uB85C\uC81D\uD2B8 \uC218\uC815" })] })] }));
};
export default ProjectCard;
