// 📄 src/components/Button.tsx
import { ButtonHTMLAttributes } from "react"; // 기본 HTML button 속성들을 가져옵니다.
import clsx from "clsx"; // 조건부로 클래스명을 추가하거나 제거할 수 있도록 돕는 라이브러리입니다.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string; // 버튼에 추가적인 className을 넣을 수 있게 합니다.
  children: React.ReactNode; // 버튼 안에 들어갈 자식 요소를 정의합니다.
}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props} // 전달된 나머지 props를 button에 그대로 전달
      className={clsx(
        "bg-primary text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition", // 기본 스타일
        className // 추가적인 스타일을 여기에서 받습니다.
      )}
    >
      {children}
    </button>
  );
}