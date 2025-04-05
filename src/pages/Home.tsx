// src/pages/Home.tsx
import { projectList } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">진행 중인 프로젝트</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              dday={project.dday}
              status={project.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
}