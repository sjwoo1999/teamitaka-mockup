// 📄 src/router/index.tsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Match from "../pages/Match";
import Project from "../pages/Project";
import Profile from "../pages/Profile";
import ProjectDetail from "../pages/ProjectDetail";
import Complete from "../pages/Complete";
import Team from "../pages/Team";
import TeamDetail from "../pages/TeamDetail";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/match" element={<Match />} />
      <Route path="/project" element={<Project />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/complete" element={<Complete />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team/:id" element={<TeamDetail />} />
    </Routes>
  );
}
