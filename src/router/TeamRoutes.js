import { jsx as _jsx } from "react/jsx-runtime";
import Team from "@/pages/Team";
import TeamDetail from "@/pages/Team/TeamDetail";
import Match from "@/pages/Match";
import { ROUTES } from "./routes";
export const teamRoutes = [
    {
        path: ROUTES.TEAM,
        element: _jsx(Team, {}),
    },
    {
        path: ROUTES.TEAM_DETAIL,
        element: _jsx(TeamDetail, {}),
    },
    {
        path: ROUTES.MATCH,
        element: _jsx(Match, {}),
    },
];
