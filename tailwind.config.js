module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",  // TailwindCSS가 적용될 파일 범위 설정
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F76241",  // 고유한 브랜드 색상
        accent: "#FF8B66",
        muted: "#3B3B3B",
        success: "#F5F5F5",
      },
      fontFamily: {
        sans: ["Pretendard", "Helvetica Neue", "Arial"],  // 기본 폰트
      },
    },
  },
  plugins: [],
};