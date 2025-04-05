// 📄 src/App.tsx (수정됨)
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen pb-14 bg-background">
        <Router />
        <TabBar />
      </div>
    </BrowserRouter>
  );
}