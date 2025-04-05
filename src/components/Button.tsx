// 📄 src/components/Button.tsx
import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "bg-primary text-white text-sm font-medium px-3 py-1 rounded-lg hover:opacity-90 transition",
        className
      )}
    >
      {children}
    </button>
  );
}
