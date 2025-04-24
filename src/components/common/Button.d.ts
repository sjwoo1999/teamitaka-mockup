import { ButtonHTMLAttributes } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
}
export default function Button({ className, children, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
