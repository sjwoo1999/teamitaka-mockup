// Home.tsx
import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      {/* 헤더 */}
      <header className="header">
        <h1 className="app-title">Teamitaka</h1>
        <div className="notification-icon">🔔</div>
      </header>

      {/* 사용자 섹션 */}
      <section className="user-section">
        <h2>김조영</h2>
        <p>움직여야만 디자인지 재활 중</p>
        <div className="tags">
          <span className="tag">번팀</span>
          <span className="tag">UXUI</span>
        </div>
        <div className="stats">
          <span>팀원 경쟁 5회</span> • <span>진행 중 프로젝트 3개</span>
        </div>
      </section>

      {/* 오늘의 할 일 */}
      <section className="todo-section">
        <h3>오늘의 할 일</h3>
        <label>
          <input type="checkbox" /> 지재 모색에 정리하기
        </label>
        <label>
          <input type="checkbox" /> 자돈 조사 및 분석하기
        </label>
      </section>

      {/* 진행중인 프로젝트 */}
      <section className="project-section">
        <h3>진행중인 프로젝트</h3>
        <div className="project-card">
          <div className="project-info">
            <h4>프로젝트명</h4>
            <p>프로젝트 기간</p>
            <p>고정 팀 시각</p>
            <div className="team-avatars">
              <span>👤</span><span>👤</span><span>👤</span>
            </div>
          </div>
          <div className="project-deadline">
            <span>D-07</span>
          </div>
        </div>
      </section>

      {/* 모집 마감 임박 프로젝트 */}
      <section className="hot-project-section">
        <h3>모집 마감 임박 프로젝트 🔥</h3>
        <div className="hot-project-card">
          <div className="project-image">🖼️</div>
          <div className="project-details">
            <span className="badge">Best</span>
            <h4>김조영과 무서운 기획주얼 매칭 디자인지</h4>
            <p>팀 프로젝트 팀원 구합니다!</p>
            <div className="project-meta">
              <span>알림바로</span> • <span>302</span> • <span>79</span> • <span>26.03.24</span>
            </div>
          </div>
        </div>
        <div className="hot-project-card">
          <div className="project-image">🖼️</div>
          <div className="project-details">
            <span className="badge">Best</span>
            <h4>김조영과 무서운 기획주얼 매칭 디자인지 (2)</h4>
            <p>팀 프로젝트 팀원 구합니다!</p>
            <div className="project-meta">
              <span>알림바로</span> • <span>214</span> • <span>83</span> • <span>25.03.27</span>
            </div>
          </div>
        </div>
        <div className="hot-project-card">
          <div className="project-image">🖼️</div>
          <div className="project-details">
            <span className="badge">Best</span>
            <h4>한글을 곱씹을 지스러운해 공모전 함께할 팀원 구합니다!!</h4>
            <p>팀 프로젝트 팀원 구합니다!</p>
            <div className="project-meta">
              <span>알림바로</span> • <span>182</span> • <span>19</span> • <span>25.03.12</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;