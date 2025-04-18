// 📄 src/components/common/Header.tsx
import { Link } from 'react-router-dom'; // 페이지 간 라우팅을 위한 Link 컴포넌트를 import

export default function Header() {
  return (
    <div className="bg-primary p-4 rounded-lg flex items-center justify-between">
      <h1 className="text-white text-2xl font-bold">Teamitaka</h1> {/* 애플리케이션 제목 */}
      <div className="flex space-x-4">
        {/* 링크를 클릭하면 Profile 및 Projects 페이지로 이동 */}
        <Link to="/profile" className="text-white font-semibold">Profile</Link>
        <Link to="/projects" className="text-white font-semibold">Projects</Link>
      </div>
    </div>
  );
}