// 📄 src/components/ProjectCard.tsx
export default function ProjectCard({
  title,
  description,
  status,
  dday,
  userName,
  userRole,
  userExperience
}: {
  title: string;
  description: string;
  status: string;
  dday: string;
  userName: string;
  userRole: string;
  userExperience: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-sm mx-auto">
      {/* Project Title and Info */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-accent">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
      
      {/* User Profile Inside the Project */}
      <div className="flex items-center mt-4">
        <img
          className="w-14 h-14 rounded-full border-4 border-primary"
          src="/path/to/profile-img.jpg"
          alt={userName}
        />
        <div className="ml-4">
          <h3 className="text-lg font-medium">{userName}</h3>
          <p className="text-sm text-gray-500">{userRole}</p>
          <p className="text-xs text-gray-400">팀원 경험 {userExperience}</p>
        </div>
      </div>

      {/* Status & D-Day */}
      <div className="mt-4 flex justify-between">
        <div className="text-sm font-semibold text-gray-600">상태: {status}</div>
        <div className="text-sm font-semibold text-gray-600">D-Day: {dday}</div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-primary text-white py-1 px-4 rounded-lg">프로젝트 진행</button>
        <button className="bg-gray-200 text-gray-800 py-1 px-4 rounded-lg">프로젝트 수정</button>
      </div>
    </div>
  );
}