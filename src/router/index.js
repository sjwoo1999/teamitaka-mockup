import { jsx as _jsx } from "react/jsx-runtime";
// 📄 src/routes/index.tsx
import { useRoutes } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import { projectRoutes } from "@/router/ProjectRoutes";
import { teamRoutes } from "@/router/TeamRoutes";
const routes = [
    {
        path: "/",
        element: _jsx(MainLayout, {}),
        children: [
            {
                index: true,
                element: _jsx(Home, {}),
            },
            {
                path: ROUTES.HOME,
                element: _jsx(Home, {}),
            },
            {
                path: ROUTES.PROFILE,
                element: _jsx(Profile, {}),
            },
            ...projectRoutes,
            ...teamRoutes,
        ],
    },
];
export default function Router() {
    return useRoutes(routes);
}
