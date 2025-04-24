import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// ============================
// 📁 src/pages/Team/Complete.tsx
// ============================
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Complete() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/team");
        }, 1500);
        return () => clearTimeout(timer);
    }, [navigate]);
    return (_jsxs("div", { className: "flex flex-col justify-center items-center h-screen text-center", children: [_jsx("div", { className: "bg-primary p-4 rounded-full mb-4", children: _jsx("svg", { className: "w-8 h-8 text-white", fill: "none", stroke: "currentColor", strokeWidth: 3, viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M5 13l4 4L19 7" }) }) }), _jsx("h2", { className: "text-lg font-semibold text-gray-800", children: "\uC9C0\uC6D0\uC774 \uC644\uB8CC\uB418\uC5C8\uC2B5\uB2C8\uB2E4" })] }));
}
