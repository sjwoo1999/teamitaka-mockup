// src/router/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { ROUTES } from "./routes";
import { projectRoutes } from "./ProjectRoutes";
import { teamRoutes } from "./TeamRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
      <Route element={<MainLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        {projectRoutes}
        {teamRoutes}
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Router;
