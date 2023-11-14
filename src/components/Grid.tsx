import { cn } from "@/lib/utils";
import React, { Ref, forwardRef } from "react";

interface GridProps {
  children: React.ReactNode;
  cols?: string | number;
  gap?: string | number;
  className: string;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    { children, className, cols = 2, gap = 2, ...props },
    ref: Ref<HTMLDivElement>
  ) => {
    const baseClass = `grid grid-cols-${cols} gap-${gap}`;
    return (
      <div ref={ref} className={cn(baseClass, className)}>
        {children}
      </div>
    );
  }
);

export default Grid;
