/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ✅ 여기에 실제 코드 경로를 넣어줘야 Tailwind가 스캔함
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5A5F",        // 주요 브랜드 컬러
        "primary-dark": "#e0484c", // 버튼 hover
        gray: {
          100: "#f5f5f5",
          200: "#e5e7eb",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
        },
      },
    },
  },
  plugins: [],
}
