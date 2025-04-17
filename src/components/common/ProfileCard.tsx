// 📄 src/components/ProfileCard.tsx
export default function ProfileCard() {
    return (
      <div className="flex items-center p-6 bg-white rounded-lg shadow-xl">
        <img
          className="w-16 h-16 rounded-full border-4 border-primary"
          src="/path/to/profile-img.jpg"
          alt="User Profile"
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-accent">김조형</h2>
          <p className="text-sm text-gray-600">홍익대학교 UXUI 디자인학과 재학 중</p>
          <div className="flex mt-2 space-x-2">
            <span className="px-3 py-1 text-xs text-white bg-primary rounded-full">UXUI</span>
            <span className="px-3 py-1 text-xs text-white bg-green-500 rounded-full">팀원 경험 5회</span>
          </div>
          <div className="mt-4 flex space-x-4">
            <button className="bg-primary text-white py-1 px-4 rounded-lg">연락하기</button>
            <button className="bg-gray-200 text-gray-800 py-1 px-4 rounded-lg">프로필 수정</button>
          </div>
        </div>
      </div>
    );
  }