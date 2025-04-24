// ============================
// 📁 src/pages/Team/Complete.tsx
// ============================

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Complete() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/team");
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <div className="bg-primary p-4 rounded-full mb-4">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-gray-800">지원이 완료되었습니다</h2>
    </div>
  );
}