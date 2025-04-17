import { NavLink } from "react-router-dom";
import { ROUTES } from "@/router/routes";
import { Home, Folder, Users, User } from "lucide-react";

const tabs = [
  { name: "홈", path: ROUTES.HOME, icon: <Home size={20} /> },
  { name: "프로젝트", path: ROUTES.PROJECT, icon: <Folder size={20} /> },
  { name: "팀", path: ROUTES.TEAM, icon: <Users size={20} /> },
  { name: "프로필", path: ROUTES.PROFILE, icon: <User size={20} /> },
];

const TabBar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white shadow-inner border-t flex justify-around py-2 z-10">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `flex flex-col items-center text-sm ${
              isActive ? "text-blue-600 font-semibold" : "text-gray-400"
            }`
          }
        >
          {tab.icon}
          <span>{tab.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default TabBar;
