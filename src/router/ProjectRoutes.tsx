// src/router/ProjectRoutes.tsx
import { Route } from "react-router-dom";
import Project from "@/pages/Project";
import ProjectDetail from "@/pages/Project/ProjectDetail";
import { ROUTES } from "./routes";

export const projectRoutes = (
  <>
    <Route path={ROUTES.PROJECT} element={<Project />} />
    <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetail />} />
  </>
);
