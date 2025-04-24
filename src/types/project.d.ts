export type ProjectStatus = "진행 중" | "예정" | "완료" | "오늘 시작";
export interface Project {
    id: number;
    title: string;
    description: string;
    dday: number;
    status: ProjectStatus;
}
