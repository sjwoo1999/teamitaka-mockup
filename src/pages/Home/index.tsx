// 📄 src/pages/Home/index.tsx

export default function Home() {
  return (
    <div className="px-4 pt-4 pb-28 space-y-4 max-w-md mx-auto">
      {/* 프로필 박스 */}
      <div className="bg-[#FFF3EE] rounded-xl p-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-700 font-bold">김조형</p>
          <p className="text-xs text-gray-500 mt-1">
            홍익대학교 디자인과 재학 중
          </p>
          <div className="mt-2 flex gap-2">
            <span className="bg-orange-200 text-xs px-2 py-1 rounded-full">브랜딩</span>
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">UXUI</span>
          </div>
        </div>
        <img src="/assets/profile.svg" className="w-16 h-16" />
      </div>

      {/* 오늘의 할 일 */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h2 className="font-semibold text-sm mb-3">오늘의 할 일</h2>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><input type="checkbox" /> 지표 엑셀에 정리하기</li>
          <li><input type="checkbox" /> 자료 조사 및 분석하기</li>
        </ul>
      </div>

      {/* 진행 중인 프로젝트 */}
      <div>
        <h2 className="font-semibold text-sm mb-3">진행중인 프로젝트</h2>
        {/* → 스와이프 영역으로 나중에 교체 가능 */}
        <div className="bg-white rounded-xl p-4 shadow-sm"> ... </div>
      </div>

      {/* 모집 마감 임박 */}
      <div>
        <h2 className="font-semibold text-sm mb-3">모집 마감 임박 프로젝트 🔥</h2>
        {/* → 리스트 반복 */}
        <div className="bg-white rounded-lg p-3 shadow-sm"> ... </div>
      </div>
    </div>
  );
}