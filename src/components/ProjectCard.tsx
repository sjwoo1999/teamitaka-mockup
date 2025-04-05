import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: number; // ✅ ID 추가
  title: string;
  description: string;
  dday: number;
  status: string;
}

export default function ProjectCard({ id, title, description, dday, status }: ProjectCardProps) {
  return (
    <Link to={`/project/${id}`}>
      <div className="p-4 bg-white rounded-2xl shadow mb-4 hover:bg-gray-50 transition">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg font-semibold text-black">{title}</h2>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
          <span className="text-xs font-medium text-white bg-primary px-2 py-1 rounded-full">
            {status}
          </span>
        </div>
        <div className="text-sm text-gray-400 mt-2">
          {dday > 0 ? `D-${dday}` : dday === 0 ? "D-Day" : `D+${Math.abs(dday)}`}
        </div>
      </div>
    </Link>
  );
}
