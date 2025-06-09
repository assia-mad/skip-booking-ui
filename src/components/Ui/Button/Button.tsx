import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "ghost" | "selected";
  disabled?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = "ghost",
  disabled = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const base =
    "rounded-lg font-semibold transition-all duration-200 text-base text-center py-3 px-4";

  const variants = {
    primary: "bg-primary-dark text-white hover:bg-accent-blue",
    ghost: "bg-gray-50 text-primary-dark hover:bg-accent-blue hover:text-white",
    selected: "bg-primary-dark text-white shadow hover:bg-accent-blue",
  };

  const disabledStyle =
    "bg-gray-100 text-gray-400 cursor-not-allowed hover:bg-gray-100";

  const finalClass = clsx(
    base,
    fullWidth && "w-full",
    disabled ? disabledStyle : variants[variant],
    className,
  );

  return (
    <button disabled={disabled} className={finalClass} {...props}>
      {children}
    </button>
  );
};
