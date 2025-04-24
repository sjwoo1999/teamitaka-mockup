import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
export default function Button({ className, children, ...props }) {
    return (_jsx("button", { ...props, className: clsx("bg-primary text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition ease-in-out", className), children: children }));
}
