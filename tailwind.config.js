module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",  // TailwindCSS가 적용될 파일 범위 설정
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6600",  // 고유한 브랜드 색상
        secondary: "#F4F4F4", // 배경 색상
        accent: "#333333", // 텍스트 색상
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],  // 기본 폰트
      },
    },
  },
  plugins: [],
};