import { Outlet } from "react-router-dom";
import TabBar from "@/components/ui/TabBar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
      <TabBar />
    </div>
  );
};

export default MainLayout;
