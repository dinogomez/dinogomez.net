import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1  w-full">
        <Skeleton className="w-[237px] h-[184px]" />
        <Skeleton className="w-[237px] h-[184px]" />
        <Skeleton className="w-[237px] h-[184px]" />
      </div>
    </div>
  );
}

export default Loading;
