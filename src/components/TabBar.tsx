import React from "react";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from '../assets/home.svg?react';
import ProjectIcon from '../assets/project.svg?react';
import TeamIcon from '../assets/team.svg?react';
import ProfileIcon from '../assets/profile.svg?react';
import '../styles/TabBar.css';

const TabBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="tab-bar">
      <div className={`tab-item ${location.pathname === '/home' ? 'active' : ''}`}>
        <Link to="/home" className="nav-link">
          <HomeIcon className="tab-icon" />
          <span>메인</span>
        </Link>
      </div>
      <div className={`tab-item ${location.pathname === '/project' ? 'active' : ''}`}>
        <Link to="/project" className="nav-link">
          <ProjectIcon className="tab-icon" />
          <span>프로젝트 관리</span>
        </Link>
      </div>
      <div className={`tab-item ${location.pathname === '/team' ? 'active' : ''}`}>
        <Link to="/team" className="nav-link">
          <TeamIcon className="tab-icon" />
          <span>팀매칭</span>
        </Link>
      </div>
      <div className={`tab-item ${location.pathname === '/profile' ? 'active' : ''}`}>
        <Link to="/profile" className="nav-link">
          <ProfileIcon className="tab-icon" />
          <span>프로필</span>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;