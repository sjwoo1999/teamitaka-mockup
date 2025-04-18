// 📄 src/router/ProjectRoutes.ts
import { RouteObject } from "react-router-dom";
import Project from "@/pages/Project";
import ProjectDetail from "@/pages/Project/ProjectDetail";
import { ROUTES } from "./routes";

export const projectRoutes: RouteObject[] = [
  {
    path: ROUTES.PROJECT,
    element: <Project />,
  },
  {
    path: ROUTES.PROJECT_DETAIL,
    element: <ProjectDetail />,
  },
];