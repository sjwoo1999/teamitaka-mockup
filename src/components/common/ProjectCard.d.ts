import { FC } from "react";
interface ProjectCardProps {
    title: string;
    description: string;
    teamExp: string;
    status: "진행 중" | "오늘 시작" | "예정";
    dDay: number;
}
declare const ProjectCard: FC<ProjectCardProps>;
export default ProjectCard;
