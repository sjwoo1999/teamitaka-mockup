import ProjectCard from "../../components/common/ProjectCard";
import { projectList } from "@/mock/projects";

export default function Project() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">진행 중인 프로젝트</h1>
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          status={project.status}
          dday={project.dday}
        />
      ))}
    </div>
  );
}
