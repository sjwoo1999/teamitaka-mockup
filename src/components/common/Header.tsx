// 📄 src/components/common/Header.tsx
import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3">
      <h1 className="text-primary font-bold text-2xl">Teamitaka</h1>
      <Bell className="text-primary" size={20} />
    </header>
  );
}