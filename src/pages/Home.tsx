// 📄 src/pages/Home.tsx (업데이트됨)
import { projectList } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-primary mb-4">진행 중인 프로젝트</h1>
      {projectList.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          dday={project.dday}
          status={project.status}
        />
      ))}
    </div>
  );
}