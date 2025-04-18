// 📄 src/router/TeamRoutes.ts
import { RouteObject } from "react-router-dom";
import Team from "@/pages/Team";
import TeamDetail from "@/pages/Team/TeamDetail";
import Match from "@/pages/Match";
import { ROUTES } from "./routes";

export const teamRoutes: RouteObject[] = [
  {
    path: ROUTES.TEAM,
    element: <Team />,
  },
  {
    path: ROUTES.TEAM_DETAIL,
    element: <TeamDetail />,
  },
  {
    path: ROUTES.MATCH,
    element: <Match />,
  },
];