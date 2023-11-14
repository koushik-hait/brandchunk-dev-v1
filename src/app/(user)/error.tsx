"use client";
import { Button } from "@/components";
import { Boundary } from "@/components/Boundary";
import React from "react";

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

  return (
    <Boundary>
      <div className="space-y-4">
        <h2 className="text-lg font-bold">[Error]: Somthing went wrong!... </h2>
        <p className="text-sm text-red-600">[Error]: {error?.message}</p>
        <div>
          <Button onClick={() => reset()}>Try Again</Button>
        </div>
      </div>
    </Boundary>
  );
}
