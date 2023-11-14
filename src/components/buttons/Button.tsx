import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.JSX.Element;
  endIcon?: React.JSX.Element;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, type = "button", startIcon, endIcon, className, ...props },
    ref
  ) => {
    return (
      <button
        type={type}
        ref={ref}
        className={cn(
          "inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md",
          className
        )}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  }
);

export default Button;
