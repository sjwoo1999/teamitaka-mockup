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
        "bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition ease-in-out",
        className
      )}
    >
      {children}
    </button>
  );
}