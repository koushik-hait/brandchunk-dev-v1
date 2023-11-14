import clsx from "clsx";
import React from "react";

const Label = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "rounded-full px-1.5 shadow-[0_0_1px_3px_black] bg-gray-800 text-gray-300"
      }
    >
      {children}
    </div>
  );
};
export const Boundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={
        "relative rounded-lg border border-dashed p-4 lg:p-9 border-gray-700"
      }
    >
      {children}
    </div>
  );
};
