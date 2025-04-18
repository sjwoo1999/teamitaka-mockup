// Home.tsx
import React from 'react';
import '../../styles/Home.css';

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
        <h2>김조형</h2>
        <p>홍익대학교 디자인과 재학 중</p>
        <div className="tags">
          <span className="tag">브랜드</span>
          <span className="tag">UXUI</span>
        </div>
        <div className="stats">
          <span>팀플 경험 5회</span> • <span>진행 중 프로젝트 3개</span>
        </div>
      </section>

      {/* 오늘의 할 일 */}
      <section className="todo-section">
        <h3>오늘의 할 일</h3>
        <label>
          <input type="checkbox" /> 지표 엑셀에 정리하기
        </label>
        <label>
          <input type="checkbox" /> 자료 조사 및 분석하기
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
            <h4>김혜현 교수님 ] 비주얼 마케터 디자인 팀</h4>
            <p>팀 프로젝트 팀원 구합니다!</p>
            <div className="project-meta">
              <span>얼리버드</span> • <span>302</span> • <span>79</span> • <span>25.03.24</span>
            </div>
          </div>
        </div>
        <div className="hot-project-card">
          <div className="project-image">🖼️</div>
          <div className="project-details">
            <span className="badge">Best</span>
            <h4>김건상 교수님 ] 기초 디자인 테크닉 (2)</h4>
            <p>함께 스케치 디벨로퍼 구합니다. 스터디 작업 ..</p>
            <div className="project-meta">
              <span>시라소니</span> • <span>214</span> • <span>83</span> • <span>25.03.27</span>
            </div>
          </div>
        </div>
        <div className="hot-project-card">
          <div className="project-image">🖼️</div>
          <div className="project-details">
            <span className="badge">Best</span>
            <h4>하연솔 교수님 ] 지도하에 공모전 함께 할</h4>
            <p>팀플리 구합니다!!</p>
            <div className="project-meta">
              <span>뱁새</span> • <span>182</span> • <span>19</span> • <span>25.03.12</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;