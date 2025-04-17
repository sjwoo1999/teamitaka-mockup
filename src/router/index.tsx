import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import ProjectDetail from "@/pages/Project/ProjectDetail";
import Team from "@/pages/Team";
import TeamDetail from "@/pages/Team/TeamDetail";
import Match from "@/pages/Match";
import Profile from "@/pages/Profile";
import { ROUTES } from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PROJECT} element={<Project />} />
        <Route path={ROUTES.PROJECT_DETAIL} element={<ProjectDetail />} />
        <Route path={ROUTES.TEAM} element={<Team />} />
        <Route path={ROUTES.TEAM_DETAIL} element={<TeamDetail />} />
        <Route path={ROUTES.MATCH} element={<Match />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Router;
