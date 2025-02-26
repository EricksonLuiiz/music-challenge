import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            <div className="flex items-center space-x-2 px-2">{children}</div>
        </button>
    );
}
