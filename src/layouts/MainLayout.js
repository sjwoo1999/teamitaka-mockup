import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// 📄 src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
import TabBar from "@/components/ui/TabBar";
import Header from "@/components/common/Header"; // 선택적
export default function MainLayout() {
    return (_jsx("div", { className: "w-screen h-screen bg-neutral-900 flex justify-center items-center", children: _jsxs("div", { className: "w-full max-w-md h-full flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden", children: [_jsx(Header, {}), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [_jsx("main", { className: "flex-1 overflow-y-auto px-4 pt-6 pb-24", children: _jsx(Outlet, {}) }), _jsx("div", { className: "border-t border-gray-200", children: _jsx(TabBar, {}) })] })] }) }));
}
