import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">프로젝트 상세: {projectId}</h1>
    </div>
  );
};

export default ProjectDetail;
