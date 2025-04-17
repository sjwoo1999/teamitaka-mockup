// 📁 teamitaka-mockup/mock/projects.ts
import { Project } from "@/types/project";

export const projectList: Project[] = [
  {
    id: 1,
    title: "UX 리서치 기반 AI 다이어트 서비스",
    description: "MVP 출시 완료, 사용자 피드백 수집 중입니다.",
    dday: -3,
    status: "진행 중",
  },
  {
    id: 2,
    title: "티미타카 UX 목업 개발",
    description: "프론트 단독 목업 시뮬레이션 구현 중!",
    dday: 0,
    status: "오늘 시작",
  },
  {
    id: 3,
    title: "React Native 기반 감정 분석 앱",
    description: "디자인 QA 중이며, 5월 중순 오픈 예정입니다.",
    dday: 7,
    status: "예정",
  },
];