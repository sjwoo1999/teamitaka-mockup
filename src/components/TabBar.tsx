// TabBar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/TabBar.css';

const TabBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="tab-bar">
      <div className={`tab-item ${location.pathname === '/home' ? 'active' : ''}`}>
        <Link to="/home" className="nav-link">
          <span>메인</span>
        </Link>
      </div>
      <div className={`tab-item ${location.pathname === '/project' ? 'active' : ''}`}>
        <Link to="/project" className="nav-link">
          <span>프로젝트 관리</span>
        </Link>
      </div>
      <div className={`tab-item ${location.pathname === '/team' ? 'active' : ''}`}>
        <Link to="/team" className="nav-link">
          <span>팀매칭</span>
        </Link>
      </div>
      <div className={`tab-item ${location.pathname === '/profile' ? 'active' : ''}`}>
        <Link to="/profile" className="nav-link">
          <span>프로필</span>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;