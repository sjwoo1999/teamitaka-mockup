// src/components/TabBar.tsx
import { Link, useLocation } from "react-router-dom";

export default function TabBar() {
  const location = useLocation();
  const tabs = [
    { name: "홈", path: "/" },
    { name: "매칭", path: "/match" },
    { name: "프로젝트", path: "/project" },
    { name: "프로필", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around py-2">
      {tabs.map((tab) => (
        <Link key={tab.path} to={tab.path}>
          <div className={`text-sm ${location.pathname === tab.path ? "text-primary font-bold" : "text-gray-400"}`}>
            {tab.name}
          </div>
        </Link>
      ))}
    </nav>
  );
}
