const Home = () => {
    return (
      <div className="p-4 space-y-4">
        <h1 className="text-xl font-bold">오늘 할 일</h1>
        <div className="bg-white p-4 rounded-xl shadow">- 할 일 1</div>
        <div className="bg-white p-4 rounded-xl shadow">- 할 일 2</div>
  
        <h2 className="text-lg font-semibold mt-6">진행 중인 프로젝트</h2>
        <div className="bg-white p-4 rounded-xl shadow">- 프로젝트 A</div>
      </div>
    );
  };
  
  export default Home;
  