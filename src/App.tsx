// 📄 src/App.tsx
import { BrowserRouter } from "react-router-dom"; // React Router 라이브러리에서 BrowserRouter를 가져옵니다. 이를 통해 SPA(Single Page Application) 라우팅을 설정합니다.
import Router from "./router"; // 프로젝트에서 라우팅을 관리하는 Router 컴포넌트를 import합니다.
import TabBar from "./components/TabBar"; // 하단 탭바를 관리하는 TabBar 컴포넌트를 import합니다.

export default function App() {
  return (
    <BrowserRouter>
      {/* global.css는 App.tsx에서 최상위 컴포넌트에 적용되므로, global.css가 전역 스타일을 관리합니다. */}
      <div className="min-h-screen pb-14 bg-background">
        <Router /> {/* 이 부분에서 동적 페이지 경로가 결정됩니다. */}
        <TabBar /> {/* 하단 탭을 렌더링하는 부분 */}
      </div>
    </BrowserRouter>
  );
}