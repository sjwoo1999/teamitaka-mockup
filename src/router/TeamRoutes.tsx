// src/router/TeamRoutes.tsx
import { Route } from "react-router-dom";
import Team from "../pages/Team";
import TeamDetail from "../pages/Team/TeamDetail"; 
import Match from "../pages/Match";
import { ROUTES } from "./routes";

export const teamRoutes = (
  <>
    <Route path={ROUTES.TEAM} element={<Team />} />
    <Route path={ROUTES.TEAM_DETAIL} element={<TeamDetail />} />
    <Route path={ROUTES.MATCH} element={<Match />} />
  </>
);
