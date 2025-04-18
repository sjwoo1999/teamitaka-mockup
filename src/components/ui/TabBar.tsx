// 📄 src/components/ui/TabBar.tsx
import { NavLink } from "react-router-dom";
import { Home, Folder, Share2, User } from "lucide-react";

const tabs = [
  { name: "메인", path: "/home", icon: <Home size={22} /> },
  { name: "프로젝트 관리", path: "/project", icon: <Folder size={22} /> },
  { name: "팀 매칭", path: "/team", icon: <Share2 size={22} /> },
  { name: "프로필", path: "/profile", icon: <User size={22} /> },
];

export default function TabBar() {
  return (
    <nav className="w-full bg-white border-t flex justify-around py-2 text-xs font-semibold fixed bottom-0 max-w-md left-1/2 transform -translate-x-1/2 z-10">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 ${
              isActive ? "text-primary" : "text-gray-400"
            }`
          }
        >
          {tab.icon}
          <span>{tab.name}</span>
        </NavLink>
      ))}
    </nav>
  );
}