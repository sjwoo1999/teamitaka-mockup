import { jsx as _jsx } from "react/jsx-runtime";
import Project from "@/pages/Project";
import ProjectDetail from "@/pages/Project/ProjectDetail";
import { ROUTES } from "./routes";
export const projectRoutes = [
    {
        path: ROUTES.PROJECT,
        element: _jsx(Project, {}),
    },
    {
        path: ROUTES.PROJECT_DETAIL,
        element: _jsx(ProjectDetail, {}),
    },
];
