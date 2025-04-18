// 📄 src/routes/index.tsx
import { useRoutes } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import { projectRoutes } from "@/router/ProjectRoutes";
import { teamRoutes } from "@/router/TeamRoutes";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
      ...projectRoutes,
      ...teamRoutes,
    ],
  },
];

export default function Router() {
  return useRoutes(routes);
}