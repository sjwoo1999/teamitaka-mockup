module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",  // TailwindCSS가 적용될 파일 범위 설정
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",  // 고유한 브랜드 색상
        accent: "#F97316",
        muted: "#6B7280",
        success: "22C55E",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "sans-serif"],  // 기본 폰트
      },
    },
  },
  plugins: [],
};