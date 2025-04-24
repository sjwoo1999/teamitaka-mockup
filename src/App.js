import { jsx as _jsx } from "react/jsx-runtime";
// 📄 src/App.tsx
import { BrowserRouter } from "react-router-dom";
import Router from "@/router";
import "./index.css";
function App() {
    return (_jsx(BrowserRouter, { children: _jsx("div", { className: "app-container", children: _jsx(Router, {}) }) }));
}
export default App;
