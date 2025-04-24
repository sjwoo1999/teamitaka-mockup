import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// 📄 src/components/common/Header.tsx
import { Bell } from "lucide-react";
export default function Header() {
    return (_jsxs("header", { className: "flex justify-between items-center px-4 py-3", children: [_jsx("h1", { className: "text-primary font-bold text-2xl", children: "Teamitaka" }), _jsx(Bell, { className: "text-primary", size: 20 })] }));
}
