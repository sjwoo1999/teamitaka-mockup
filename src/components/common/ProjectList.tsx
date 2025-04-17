// src/components/ProjectList.tsx
export default function ProjectList() {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-primary">진행 중인 프로젝트</h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-semibold text-accent">{project.title}</h3>
              <p className="text-sm text-gray-500">{project.description}</p>
  
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-full">{project.status}</span>
                  <span className="text-xs text-gray-400">{project.dday}</span>
                </div>
                <button className="bg-primary text-white px-4 py-2 rounded-lg">상세 보기</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }