// ============================
// 📁 src/pages/Project/index.tsx
// ============================

import ProjectCard from "@/components/common/ProjectCard";

const ProjectPage = () => {
  const dummyData = [
    {
      title: "UX 리서치 기반 AI 다이어트 서비스",
      description: "MVP 출시 완료, 사용자 피드백 수집 중입니다.",
      teamExp: "팀원 경험",
      status: "진행 중",
      dDay: -3,
    },
    {
      title: "티미타카 UX 목업 개발",
      description: "프론트 단독 목업 시뮬레이션 구현 중!",
      teamExp: "팀원 경험",
      status: "오늘 시작",
      dDay: 0,
    },
    {
      title: "React Native 기반 감정 분석 앱",
      description: "디자인 QA 중이며, 5월 중순 오픈 예정입니다.",
      teamExp: "팀원 경험",
      status: "예정",
      dDay: 7,
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-black">진행 중인 프로젝트</h2>
      {dummyData.map((item, index) => (
        <ProjectCard key={index} {...item} />
      ))}
    </div>
  );
};

export default ProjectPage;
