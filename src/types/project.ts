export type ProjectStatus = "진행 중" | "예정" | "완료" | "오늘 시작";

export interface Project {
  id: number;
  title: string;
  description: string;
  dday: number;  // 음수: 지남, 0: 오늘, 양수: 남은 날
  status: ProjectStatus;
}
