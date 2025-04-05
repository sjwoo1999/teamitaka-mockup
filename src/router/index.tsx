import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";
import ProjectDetail from "../pages/ProjectDetail"; // 프로젝트 상세 페이지 컴포넌트
import Profile from "../pages/Profile";
import Team from "../pages/Team";
import TeamDetail from "../pages/TeamDetail";
import Match from "../pages/Match";
import '../index.css';

// React Router 설정에서 /와 /home을 동일하게 처리
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/profile" element={<Profile />} />
      {/* 프로젝트 상세 페이지 경로 */}
      <Route path="/project/:id" element={<ProjectDetail />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team/:id" element={<TeamDetail />} />
      <Route path="/match" element={<Match />} />
    </Routes>
  );
}